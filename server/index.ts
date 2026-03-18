import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Nodemailer transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // 1. Save to database
    const newContactMessage = await prisma.contactMessage.create({
      data: { firstName, lastName, email, phone, message },
    });

    // 2. Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Submission from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Message Received</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(201).json({ success: true, data: newContactMessage });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ error: 'Internal server error while submitting contact form.' });
  }
});

// Newsletter Route
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Save to database
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    res.status(201).json({ success: true, data: subscriber });
  } catch (error: any) {
    if (error.code === 'P2002') {
      // Prisma unique constraint violation (email already exists)
      return res.status(409).json({ error: 'Email is already subscribed to the newsletter.' });
    }
    console.error('Error saving newsletter subscriber:', error);
    res.status(500).json({ error: 'Internal server error while subscribing to newsletter.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
