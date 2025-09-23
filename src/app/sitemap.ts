import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.WORDPRESS_URL || 'https://www.saynopest.com';
  
  try {
    // Read the sitemap file
    const sitemapPath = path.join(process.cwd(), 'Saynopes New Sitemap.txt');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    // Parse the XML content
    const urlBlocks = sitemapContent.match(/<url>[\s\S]*?<\/url>/g) || [];
    
    const sitemapEntries: MetadataRoute.Sitemap = urlBlocks.map((block) => {
      const locMatch = block.match(/<loc>(.*?)<\/loc>/);
      const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);
      const priorityMatch = block.match(/<priority>(.*?)<\/priority>/);
      const changefreqMatch = block.match(/<changefreq>(.*?)<\/changefreq>/);

      const url = locMatch ? locMatch[1].replace('https://www.saynopest.com', baseUrl) : baseUrl;
      const lastModified = lastmodMatch ? new Date(lastmodMatch[1]) : new Date();
      const priority = priorityMatch ? parseFloat(priorityMatch[1]) : 0.8;
      const changeFrequency = (changefreqMatch ? changefreqMatch[1] : 'daily') as 'daily' | 'weekly' | 'monthly' | 'yearly';

      return {
        url,
        lastModified,
        changeFrequency,
        priority,
      };
    });

    return sitemapEntries;
  } catch (error) {
    console.error('Error reading sitemap file:', error);
    
    // Fallback to basic static pages if file reading fails
    return [
      { 
        url: `${baseUrl}/`, 
        lastModified: new Date(), 
        changeFrequency: 'yearly', 
        priority: 1 
      },
      { 
        url: `${baseUrl}/about`, 
        lastModified: new Date(), 
        changeFrequency: 'monthly', 
        priority: 0.8 
      },
      { 
        url: `${baseUrl}/contact`, 
        lastModified: new Date(), 
        changeFrequency: 'monthly', 
        priority: 0.8 
      },
    ];
  }
}
