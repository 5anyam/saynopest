import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/queries';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.WORDPRESS_URL;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/termites`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/beetle`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ants`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/bugs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/centipede`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/earwigs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/spiders`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ticks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/cockroaches`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/silverfish`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/wasps`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const postUrlsMap = new Map<string, MetadataRoute.Sitemap[number]>();
  let pageNumber = 1;
  const perPage = 100;

  while (true) {
    const posts = await getAllPosts(pageNumber, perPage);

    posts.posts.forEach((post) => {
      const url = `${baseUrl}/${post.slug}`;
      if (!postUrlsMap.has(url)) {
        postUrlsMap.set(url, {
          url,
          lastModified: new Date(post.modified),
          changeFrequency: 'weekly',
          priority: 0.5,
        });
      }
    });

    if (posts.totalPages <= pageNumber) {
      break;
    }

    pageNumber++;
  }

  const postUrls = Array.from(postUrlsMap.values());

  return [...staticPages, ...postUrls];
}
