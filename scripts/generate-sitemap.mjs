import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const configuredUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
if (!configuredUrl) {
  console.warn('SITE_URL is not set; skipping sitemap generation. Set it to the deployed site origin before building for production.');
  process.exit(0);
}

let siteUrl;
try {
  siteUrl = new URL(configuredUrl);
} catch {
  throw new Error(`Invalid SITE_URL: ${configuredUrl}. Provide an absolute URL, such as https://www.example.com.`);
}
if (!['http:', 'https:'].includes(siteUrl.protocol)) {
  throw new Error('SITE_URL must use http or https.');
}
const origin = siteUrl.href.replace(/\/+$/, '');
const routes = ['/', '/about', '/services', '/products', '/research', '/care', '/contact'];
const lastmod = new Date().toISOString().slice(0, 10);
const entries = routes.map((route) => `  <url>\n    <loc>${origin}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
const outputDir = resolve('public');
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml for ${origin}`);
