import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const DEFAULT_KEYWORDS = 'medical equipment, healthcare supplies, hospital equipment, MASS MedCare';
const SOCIAL_IMAGE = '/social-preview.svg';

const routeMetadata: Record<string, { title: string; description: string; keywords: string; schemaType: string }> = {
  '/': {
    title: 'Medical Equipment & Hospital Supplies',
    description: 'Source medical equipment and healthcare supplies for hospitals, clinics, and home care from MASS MedCare. Explore critical-care devices, respiratory equipment, hospital setup services, and patient support.',
    keywords: 'medical equipment supplier, hospital supplies, critical care equipment, respiratory equipment, healthcare solutions',
    schemaType: 'WebPage',
  },
  '/about': {
    title: 'About MASS MedCare',
    description: 'Learn about MASS MedCare and our work supplying medical equipment and healthcare solutions to hospitals, clinics, and patients, with a focus on quality, access, and dependable support.',
    keywords: 'about MASS MedCare, medical equipment company, healthcare supply partner, medical care solutions',
    schemaType: 'AboutPage',
  },
  '/services': {
    title: 'Medical Equipment & Healthcare Services',
    description: 'Explore MASS MedCare services, including medical equipment supply, home ICU setup, hospital setup support, oxygen solutions, medical linens, and NABH accreditation consultancy.',
    keywords: 'medical equipment services, home ICU setup, hospital setup, oxygen cylinder supply, NABH consultancy, medical linens',
    schemaType: 'CollectionPage',
  },
  '/products': {
    title: 'Medical Equipment Catalog',
    description: 'Browse medical equipment from MASS MedCare, including syringe and infusion pumps, patient monitors, ventilators, BiPAP machines, and CPAP machines for clinical and home-care settings.',
    keywords: 'medical equipment catalog, syringe pumps, infusion pumps, patient monitors, ventilators, BiPAP machines, CPAP machines',
    schemaType: 'CollectionPage',
  },
  '/care': {
    title: 'Patient Care & Support',
    description: 'Find patient support information from MASS MedCare, including care resources, personalized support options, and access to the patient portal.',
    keywords: 'patient care support, patient resources, home healthcare support, patient portal, caregiver resources',
    schemaType: 'WebPage',
  },
  '/contact': {
    title: 'Contact MASS MedCare',
    description: 'Contact MASS MedCare about medical equipment, healthcare supplies, hospital setup, patient support, or business partnerships. Send our team your inquiry.',
    keywords: 'contact MASS MedCare, medical equipment inquiry, healthcare supplier contact, hospital equipment quote',
    schemaType: 'ContactPage',
  },
};

const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
  const baseUrl = configuredUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  return baseUrl.replace(/\/+$/, '');
};

/** Adds route-specific search, social sharing, and structured-data metadata. */
export const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, noindex = false }) => {
  const { pathname } = useLocation();
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase();
  const route = routeMetadata[normalizedPath];
  const pageTitle = `${route?.title ?? title} | MASS MedCare`;
  const pageDescription = route?.description ?? description;
  const pageKeywords = route?.keywords ?? keywords;
  const siteUrl = getSiteUrl();
  const canonicalUrl = siteUrl ? `${siteUrl}${normalizedPath}` : undefined;
  const socialImage = siteUrl ? new URL(image ?? SOCIAL_IMAGE, `${siteUrl}/`).toString() : undefined;

  const structuredData = !noindex && canonicalUrl ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'MASS MedCare',
        url: `${siteUrl}/`,
        logo: socialImage,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'MASS MedCare',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': route?.schemaType ?? 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en',
      },
    ],
  } : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords ? `${pageKeywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:site_name" content="MASS MedCare" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {socialImage && <meta property="og:image" content={socialImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {socialImage && <meta name="twitter:image" content={socialImage} />}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>
      )}
    </Helmet>
  );
};
