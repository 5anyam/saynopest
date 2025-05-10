import type { MetadataRoute } from 'next'
import { getAllPosts, getAllPages } from '@/lib/queries'

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
    // Add more static pages if needed
  ];

  const postUrls: MetadataRoute.Sitemap = [];
  let pageNumber = 1;
  const perPage = 100;

  // Dynamically fetch WordPress posts
  while (true) {
    const posts = await getAllPosts(pageNumber, perPage);
    const batchPostUrls = posts.posts.map((post) => ({
      url: `${process.env.WORDPRESS_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    postUrls.push(...batchPostUrls);

    if (posts.totalPages <= pageNumber) {
      break;
    }

    pageNumber++;
  }

  // Dynamically fetch all pages from WordPress
  const pageUrls: MetadataRoute.Sitemap = [];
  const pages = await getAllPages(); // Ensure `getAllPages` is implemented in your queries file
  pages.forEach((page) => {
    // Exclude static Next.js pages like "home", "about", "contact"
    if (['home', 'about', 'contact'].includes(page.slug.toLowerCase())) {
      return;
    }

    pageUrls.push({
      url: `${process.env.WORDPRESS_URL}/${page.slug}`,
      lastModified: new Date(page.modified),
      changeFrequency: "monthly", // Adjust this based on page content updates
      priority: 0.6, // Adjust priority if needed
    });
  });

  // Combine the URLs: static pages + posts + dynamic pages
  return [...staticPages, ...postUrls, ...pageUrls];
}
