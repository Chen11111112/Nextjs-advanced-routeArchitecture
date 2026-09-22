import type { MetadataRoute } from 'next';
import { getPhotoIds } from '@/lib/photos';
import { getSiteUrl } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/dashboard', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/dashboard/visitors', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/dashboard/page-views', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/gallery', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/gallery/featured', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/login', changeFrequency: 'yearly', priority: 0.4 },
  ] as const satisfies ReadonlyArray<{
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
    priority: number;
  }>;

  const staticRoutes: MetadataRoute.Sitemap = staticEntries.map(
    ({ path, changeFrequency, priority }) => ({
      url: getSiteUrl(path),
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const photoRoutes: MetadataRoute.Sitemap = getPhotoIds().map((id) => ({
    url: getSiteUrl(`/gallery/photo/${id}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...photoRoutes];
}
