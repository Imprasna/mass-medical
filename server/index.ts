import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ==================================================
// CONFIGURATION
// ==================================================

const app = express();
const prisma = new PrismaClient();
const port = Number(process.env.PORT || 3001);

// const SMTP_EMAIL = process.env.SMTP_EMAIL;
// const SMTP_APP_PASSWORD = process.env.SMTP_APP_PASSWORD;

const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_APP_PASSWORD = process.env.SMTP_APP_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;



if (!SMTP_EMAIL || !SMTP_APP_PASSWORD) {
  throw new Error("SMTP_EMAIL and SMTP_APP_PASSWORD must be configured in .env");
}

app.use(cors());
app.use(express.json());

// ==================================================
// SMTP TRANSPORT
// ==================================================

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_APP_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP Connection Failed:", error.message);
  } else {
    console.log("SMTP Server Ready - Gmail Connected Successfully");
  }
});

// ==================================================
// EMAIL UTILITIES
// ==================================================

const escapeHtml = (value: unknown): string =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatDate = () =>
  new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

interface EmailField {
  label: string;
  value: unknown;
}

const createEmailTemplate = (
  title: string,
  description: string,
  fields: EmailField[],
  footerText = "Mass Medical Website"
) => {
  const rows = fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:35%;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px;border:1px solid #e2e8f0;color:#334155;word-break:break-word;">
            ${escapeHtml(value || "Not provided")}
          </td>
        </tr>
      `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
        <div style="max-width:680px;margin:30px auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
          <div style="background:#047857;padding:24px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:24px;">MASS MEDICAL</h1>
            <p style="margin:8px 0 0;color:#d1fae5;font-size:13px;">Website Notification</p>
          </div>
          <div style="padding:28px;">
            <h2 style="margin-top:0;color:#047857;font-size:22px;">${escapeHtml(title)}</h2>
            <p style="font-size:14px;line-height:1.7;color:#475569;">${escapeHtml(description)}</p>
            <p style="font-size:13px;color:#64748b;">Received on: ${escapeHtml(formatDate())}</p>
            <table style="width:100%;border-collapse:collapse;margin-top:20px;font-size:14px;">${rows}</table>
            <p style="margin-top:24px;font-size:14px;color:#475569;">Please review this submission and contact the customer if further assistance is required.</p>
          </div>
          <div style="background:#f8fafc;padding:18px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#64748b;">${escapeHtml(footerText)}</p>
            <p style="margin:6px 0 0;font-size:11px;color:#94a3b8;">Automated notification. Reply directly to the customer's email address to contact them.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

interface AdminEmailOptions {
  subject: string;
  title: string;
  description: string;
  fields: EmailField[];
  replyTo?: string;
}

const sendAdminEmail = async ({
  subject,
  title,
  description,
  fields,
  replyTo,
}: AdminEmailOptions) => {
  const info = await transporter.sendMail({
    from: `"Mass Medical" <${SMTP_EMAIL}>`,
    to: ADMIN_EMAIL,
    ...(replyTo ? { replyTo } : {}),
    subject,
    html: createEmailTemplate(title, description, fields),
  });



  
  console.log("Admin Email Sent:", info.messageId);
  return info;
};

// ==================================================
// HEALTH CHECK API
// ==================================================

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, status: "ok" });
});

// ==================================================
// CONTACT FORM API
// ==================================================

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields",
    });
  }

  try {
    await sendAdminEmail({
      subject: `New Contact Submission - ${firstName} ${lastName}`,
      title: "New Contact Message",
      description: "A new contact form submission has been received from the Mass Medical website.",
      replyTo: String(email).trim(),
      fields: [
        { label: "First Name", value: firstName },
        { label: "Last Name", value: lastName },
        { label: "Email Address", value: email },
        { label: "Subject", value: subject },
        { label: "Phone Number", value: phone },
        { label: "Message", value: message },
      ],
    });

    return res.status(201).json({
      success: true,
      message: "Contact email sent successfully",
    });
  } catch (error) {
    console.error("Contact SMTP Error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error while submitting contact form.",
    });
  }
});

// ==================================================
// NEWSLETTER API - PRISMA DATABASE + ADMIN EMAIL
// ==================================================

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email || !String(email).trim()) {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  try {
    const normalizedEmail = String(email).trim().toLowerCase();

    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email: normalizedEmail },
    });

    // Notification failure should not undo a successful database subscription.
    try {
      await sendAdminEmail({
        subject: `New Newsletter Subscriber - ${normalizedEmail}`,
        title: "New Newsletter Subscription",
        description: "A new subscriber has registered for the Mass Medical newsletter.",
        replyTo: normalizedEmail,
        fields: [
          { label: "Subscriber Email", value: normalizedEmail },
          { label: "Subscription Status", value: "Successfully Subscribed" },
        ],
      });
    } catch (emailError) {
      console.error("Newsletter admin notification failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Newsletter subscription successful",
      data: subscriber,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        error: "Email is already subscribed to the newsletter.",
      });
    }

    console.error("Newsletter Error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error while subscribing to newsletter.",
    });
  }
});

// ==================================================
// PATIENT PORTAL ACCESS REQUEST API
// ==================================================

app.post("/api/trigger/service", async (req, res) => {
  const {
    fullName,
    dob,
    patientId,
    email,
    phone,
    gender,
    address,
    bloodGroup,
    emergencyContact,
    reason,
  } = req.body;

  if (
    !fullName ||
    !dob ||
    !email ||
    !phone ||
    !gender ||
    !address ||
    !bloodGroup ||
    !emergencyContact ||
    !reason
  ) {
    return res.status(400).json({
      success: false,
      error: "Please provide all required patient details.",
    });
  }

  try {
    await sendAdminEmail({
      subject: `Patient Portal Access Request - ${fullName}`,
      title: "Patient Portal Access Request",
      description: "A new patient portal access request has been submitted.",
      replyTo: String(email).trim(),
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Date of Birth", value: dob },
        { label: "Patient ID", value: patientId },
        { label: "Email Address", value: email },
        { label: "Phone Number", value: phone },
        { label: "Gender", value: gender },
        { label: "Address", value: address },
        { label: "Blood Group", value: bloodGroup },
        { label: "Emergency Contact", value: emergencyContact },
        { label: "Reason for Access", value: reason },
      ],
    });

    return res.status(201).json({
      success: true,
      message: "Patient portal request submitted successfully.",
    });
  } catch (error) {
    console.error("Patient Portal SMTP Error:", error);
    return res.status(500).json({
      success: false,
      error: "Unable to submit patient portal request. Please try again.",
    });
  }
});

// ==================================================
// PRODUCT QUOTATION REQUEST API
// ==================================================

app.post("/api/product-request", async (req, res) => {
  const {
    productId,
    productName,
    productCategory,
    customerName,
    phone,
    email,
    clinic,
    address,
    quantity,
  } = req.body;

  const requiredFields = [
    productName,
    customerName,
    phone,
    email,
    clinic,
    address,
  ];

  if (requiredFields.some((value) => !String(value ?? "").trim())) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields.",
    });
  }

  const parsedQuantity = Number(quantity);

  if (
    !Number.isInteger(parsedQuantity) ||
    parsedQuantity < 1 ||
    parsedQuantity > 100000
  ) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a whole number between 1 and 100000.",
    });
  }

  try {
    await sendAdminEmail({
      subject: `Product Quotation Request - ${productName}`,
      title: "New Medical Equipment Quotation Request",
      description: "A customer has requested product information and a quotation.",
      replyTo: String(email).trim(),
      fields: [
        { label: "Product Name", value: productName },
        { label: "Product ID", value: productId },
        { label: "Product Category", value: productCategory },
        { label: "Requested Quantity", value: parsedQuantity },
        { label: "Customer Name", value: customerName },
        { label: "Contact Number", value: phone },
        { label: "Email Address", value: email },
        { label: "Clinic / Hospital", value: clinic },
        { label: "Full Address", value: address },
      ],
    });

    return res.status(201).json({
      success: true,
      message: "Product request submitted successfully.",
    });
  } catch (error) {
    console.error("Product Request SMTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to submit product request right now.",
    });
  }
});

// ==================================================
// START SERVER
// ==================================================

// Local development only
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

// Export Express app for Vercel
export default app;


// Graceful Prisma shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
