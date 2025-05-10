// lib/queries.ts

const baseUrl = "https://static.saynopest.com";
import { ExtendedPost, Category, Author } from "@/lib/types";

const revalidateTime: number = 43200; // half day in seconds

// Define the Post interface with slug and modified properties
interface Post {
  id: number;
  slug: string;  // Add slug property
  modified: string;  // Add modified property (string to handle the date string format)
  title: string;
  content: string;
  // Add other properties specific to your posts
}

// Define the Page interface with slug and modified properties
interface Page {
  id: number;
  slug: string;  // Add slug property
  modified: string;  // Add modified property (string to handle the date string format)
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  // Add other properties based on the actual data structure
}

export async function getAllPosts(
  pageNumber: number = 1,
  perPage: number = 10,
  searchTerm: string = '',
  categories: number = 0
): Promise<{ posts: ExtendedPost[]; totalPages: number }> {
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: pageNumber.toString(),
    search: searchTerm,
    _embed: 'true',
  });

  if (categories !== 0) {
    params.set("categories", categories.toString());
  }

  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`, {
    next: {
      revalidate: revalidateTime,
    },
  });

  const posts = await response.json();
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") ?? "1");

  return { posts, totalPages };
}

export async function getPostBySlug(slug: string): Promise<ExtendedPost | null> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed=true&slug=${slug}`, {
    next: {
      revalidate: revalidateTime,
    },
  });
  const post = await response.json();
  return post[0];
}

export async function getAuthorById(id: number): Promise<Author | null> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/users/${id}`);
  const author: Author = await response.json();
  return author;
}

export async function getCategoriesByIds(ids: number[]): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories?include=${ids.join(",")}`);
  const categories: Category[] = await response.json();
  return categories;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}

// Get posts by category ID
export async function getPostsByCategory(categoryId: number, limit: number = 3): Promise<Post[]> {
  const res = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed`
  );

  if (!res.ok) {
    console.error("Failed to fetch posts by category", await res.text());
    return [];
  }

  const posts: Post[] = await res.json();
  return posts;
}

// Get all pages
export async function getAllPages(): Promise<Page[]> {
  const pageSize = 100; // Number of pages to fetch per request
  const pages: Page[] = []; // Use the Page type for the array
  let page = 1;

  while (true) {
    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages?per_page=${pageSize}&page=${page}`);
    const data: Page[] = await response.json(); // Type the data as Page[]

    if (data.length === 0) {
      break; // No more pages to fetch
    }

    pages.push(...data);

    // If there are more pages to fetch, increment the page number and continue
    page++;
  }

  return pages;
}
