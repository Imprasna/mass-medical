# SEO setup and editing guide

## What the site now does

- Adds route-specific page titles, meta descriptions, and keyword phrases for `/`, `/about`, `/services`, `/products`, `/research`, `/care`, and `/contact`.
- Emits canonical URLs, Open Graph and Twitter metadata, and JSON-LD for the organization, website, and current page.
- Uses semantic `<main>` landmarks and a keyboard-visible “Skip to main content” link.
- Provides an SVG social-sharing image at `/social-preview.svg`.
- Generates a sitemap for the seven public routes when the deployed origin is configured.

## Configure the real production domain

Canonical URLs and social metadata use `VITE_SITE_URL` when present; otherwise, they use the browser's current origin. Set this variable to the public website origin, with no route suffix, for production builds. Set `SITE_URL` (or `VITE_SITE_URL`) for sitemap generation as well.

Example for a local shell (replace the hostname with your actual site):

```sh
VITE_SITE_URL=https://www.your-real-domain.com SITE_URL=https://www.your-real-domain.com npm run build
```

The build writes `public/sitemap.xml`, and Vite copies it into `dist/sitemap.xml`. The repository does not currently identify a production website domain, so do not submit or publish a sitemap until you replace the example hostname with the real canonical origin. If deployment is hosted beneath a path rather than at the domain root, account for that base path in the site configuration and sitemap URLs.

## How to edit SEO for a page

Edit the `routeMetadata` map in `src/components/SEO.tsx`. Each key must exactly match a public route path. For example:

```ts
'/products': {
  title: 'Medical Equipment Catalog',
  description: 'Browse infusion pumps, patient monitors, ventilators, and respiratory equipment for hospitals and home care.',
  keywords: 'medical equipment catalog, infusion pumps, patient monitors, ventilators',
  schemaType: 'CollectionPage',
},
```

Guidelines:

1. Write a distinct, accurate title for each page (normally about 50–60 characters before the site-name suffix).
2. Write one clear description (roughly 140–160 characters is a useful editorial target, not a strict ranking rule). Summarize actual page content and its value; do not make unsupported promises or stuff keywords.
3. Choose a small set of relevant keyword phrases. The `meta keywords` field is supported for completeness, but major search engines generally do not use it as a ranking signal. Prioritize useful page copy, headings, links, and accurate titles/descriptions.
4. Use schema types that accurately describe the content. The shared component already creates Organization, WebSite, and current WebPage entities. Do not mark the company as a healthcare provider or claim certifications, addresses, awards, or contact details unless verified.
5. Keep titles, descriptions, structured data, and visible page content consistent. Metadata is not a substitute for useful, accessible content.

The existing page components call `<SEO>` and the products route declares it in `src/App.tsx`. Route metadata in the shared SEO component supplies the page-specific copy for each known path; the component props are fallback metadata for unknown routes.

## Social preview image

Replace `public/social-preview.svg` with on-brand artwork if desired. Keep a 1200 × 630 pixel canvas for a standard social preview and maintain readable text at small sizes. The SEO component points Open Graph and Twitter cards to this asset automatically. Use an absolute production URL after deployment and test it with social-sharing debuggers.

## Sitemap and robots

`robots.txt` allows public crawling. The sitemap generator lists only the seven public routes and does not include the not-found page. Regenerate it on every production build after setting the production origin. Submit `https://YOUR_REAL_DOMAIN/sitemap.xml` in Google Search Console and Bing Webmaster Tools after verifying the site. Ensure the deployed host serves the sitemap and robots file at the root.

## Structured-data and release checks

After deployment:

1. Inspect each route's rendered `<head>` and verify a single, correct title, description, canonical URL, social preview, and JSON-LD script.
2. Validate JSON-LD with Google's Rich Results Test and Schema.org Validator. Structured data does not guarantee enhanced search results.
3. Test the sitemap XML and robots.txt at the deployed URLs, then submit the sitemap in Search Console.
4. Test social preview rendering with Facebook Sharing Debugger and LinkedIn Post Inspector.
5. Run `npm run lint` and `npm run build`; check that the canonical origin and sitemap point to the intended production site.
6. Check keyboard navigation, heading order, meaningful image alt text, visible focus, and color contrast as part of the accessibility review.

SEO is not a guarantee of rankings or indexing. Search engines choose whether and how to use snippets and structured data.
