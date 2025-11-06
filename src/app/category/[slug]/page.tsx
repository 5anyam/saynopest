import type { Metadata } from 'next';
import { getAllPosts, getCategoryBySlug } from '@/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/category/${slug}`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`;
  
  // Get category data for dynamic metadata
  const category = await getCategoryBySlug(slug);
  
  const title = category ? `${category.name} | Say No Pest` : "Pest Control Category | Say No Pest";
  const description = category 
    ? `Browse our comprehensive ${category.name.toLowerCase()} guides and expert advice. Professional pest control solutions and tips.`
    : "Browse our comprehensive pest control guides and expert advice. Professional pest control solutions and tips.";
  
  return {
    title: title,
    description: description,
    keywords: `${category?.name || 'pest control'}, pest control, extermination, pest removal, pest management, home pest control`,
    authors: [{ name: 'Say No Pest' }],
    creator: 'Say No Pest',
    publisher: 'Say No Pest',
    
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'Say No Pest',
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: `${category?.name || 'Pest Control'} guides and solutions`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [featuredImage],
      creator: '@saynopest',
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Additional SEO
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Category and topic metadata
    category: 'Pest Control',
    
    // Additional structured metadata
    other: {
      'article:section': category?.name || 'Pest Control',
      'article:tag': `${category?.name || 'pest control'}, pest management, extermination`,
      'og:image:alt': `${category?.name || 'Pest Control'} guides and solutions`,
      'twitter:image:alt': `${category?.name || 'Pest Control'} guides and solutions`,
      // Schema.org hints
      'schema:breadcrumb': `Home > Categories > ${category?.name || 'Pest Control'}`,
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const query = await searchParams;

  const currentPage = query.page ? parseInt(query.page as string, 10) : 1;
  const searchTerm = typeof query.search === 'string' ? query.search : '';

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryId = category.id;
  const { posts, totalPages } = await getAllPosts(currentPage, 20, searchTerm, categoryId);

  if (!posts || posts.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
        <p>No posts found in this category.</p>
      </div>
    );
  }

  return (
    <div className="mt-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name;

          return (
            <div
              key={post.id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                {imageUrl && (
                  <div className="w-full h-72 bg-white flex items-center justify-center">
                    <Image
                      src={imageUrl}
                      alt={post.title.rendered}
                      width={500}
                      height={300}
                      className="max-h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="p-4 flex flex-col flex-1">
                  {categoryName && (
                    <span className="inline-block mb-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full max-w-max">
                      {categoryName}
                    </span>
                  )}
                  <h3
                    className="text-lg font-semibold mb-2 text-center"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {new Date(post.date).toLocaleDateString('en-US')}
                  </p>
                  <div className="mt-auto text-center">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
                    >
                      Read Now
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="text-center mt-10">
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8">
            {currentPage > 1 && (
              <Link
                href={`/category/${slug}?page=${currentPage - 1}`}
                className="text-blue-600 hover:underline"
              >
                ← Previous
              </Link>
            )}

            <span>
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages && (
              <Link
                href={`/category/${slug}?page=${currentPage + 1}`}
                className="text-blue-600 hover:underline"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
