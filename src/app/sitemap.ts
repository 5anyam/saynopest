import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/queries'

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // Static pages you want to include in the sitemap (e.g., Home, About, Contact)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${process.env.WORDPRESS_URL}/`, // Home page
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.WORDPRESS_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/termites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/ants`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/bed-bugs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/centipede`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/earwigs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/spiders`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/ticks`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/cockroaches`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/silverfish`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/category/wasps`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more static pages if needed
  ];

  const postUrls: MetadataRoute.Sitemap = [];
  let pageNumber = 1;
  const perPage = 100;

  // Dynamically fetch WordPress posts
  while (true) {
    const posts = await getAllPosts(pageNumber, perPage);
    const batchPostUrls = posts.posts.map((post) => ({
      url: `${process.env.WORDPRESS_URL}/${post.slug}`,
      lastModified: new Date(post.modified), // Ensure modified is properly typed
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    postUrls.push(...batchPostUrls);

    if (posts.totalPages <= pageNumber) {
      break;
    }

    pageNumber++;
  }


  // Combine the URLs: static pages + posts + dynamic pages
  return [...staticPages, ...postUrls];
}
