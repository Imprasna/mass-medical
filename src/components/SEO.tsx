import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const DEFAULT_KEYWORDS = [
  'medical equipment',
  'healthcare supplies',
  'hospital equipment',
  'MASS MedCare',
].join(', ');

/**
 * Adds page-specific document metadata. Canonical URLs use the active deployment
 * origin so the repository does not need to assume a production domain.
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  noindex = false,
}) => {
  const pageTitle = `${title} | MASS MedCare`;
  const canonicalUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : undefined;
  const socialImage = image && canonicalUrl
    ? new URL(image, canonicalUrl).toString()
    : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS}
      />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:site_name" content="MASS MedCare" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {socialImage && <meta property="og:image" content={socialImage} />}
      <meta name="twitter:card" content={socialImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {socialImage && <meta name="twitter:image" content={socialImage} />}
    </Helmet>
  );
};
