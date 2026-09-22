import type { MetadataRoute } from 'next';
import { getSiteUrl, siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
    ],
    sitemap: getSiteUrl('/sitemap.xml'),
    host: siteConfig.url,
  };
}
