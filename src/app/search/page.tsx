import { getAllPosts, getAllCategories } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { decode } from "html-entities";
import { Metadata } from "next"; 

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/pest-library`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Common Types of Ants in the US | Identification & Control Guide";
  const description = "Discover the most common ant species found in American homes including Fire Ants, Carpenter Ants, Pavement Ants, and more. Learn identification tips and effective control methods.";
  
  return {
    title: title,
    description: description,
    keywords: "ants, ant types, fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, ant identification, pest control, ant removal, ant infestation",
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
          alt: "Common types of ants found in US homes - identification guide",
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
      'article:section': 'Ant Control',
      'article:tag': 'fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, pest identification',
      'og:image:alt': 'Guide to common ant types found in US homes',
      'twitter:image:alt': 'Guide to common ant types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Ants > Ant Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

type Category = {
  id: number;
  name: string;
  slug: string;
  count?: number;
};

type ExtendedPost = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  yoast_head_json?: {
    og_image?: {
      url: string;
    }[];
  };
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q?.toLowerCase() || "";

  const [postsResponse, categoriesResponse] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  const allPosts: ExtendedPost[] = Array.isArray(postsResponse)
    ? postsResponse
    : postsResponse?.posts || [];

  const allCategories: Category[] = Array.isArray(categoriesResponse)
    ? categoriesResponse
    : categoriesResponse?.categories || [];

  // 👇 Fix here: decode HTML and then check includes
  const filteredPosts = allPosts.filter((post) => {
    const decodedTitle = decode(post?.title?.rendered || "").toLowerCase();
    return decodedTitle.includes(query);
  });

  const filteredCategories = allCategories.filter((category) =>
    category.name.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-6xl mt-20 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">
        Search results for <span className="text-green-600">{query}</span>
      </h1>

      {/* Categories first */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        {filteredCategories.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="p-4 bg-gray-100 rounded-lg border hover:bg-green-50 hover:text-green-800 transition"
              >
                <h4 className="font-medium">{cat.name}</h4>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No matching categories found.</p>
        )}
      </div>

      {/* Blog Post Cards in vertical layout */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Blog Posts</h2>
        {filteredPosts.length > 0 ? (
          <div className="flex flex-col gap-6">
            {filteredPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col sm:flex-row"
              >
                {post?.yoast_head_json?.og_image?.[0]?.url && (
                  <Image
                    src={post.yoast_head_json.og_image[0].url}
                    alt={post.title.rendered}
                    width={400}
                    height={240}
                    className="w-full h-48 object-contain sm:w-[220px] sm:h-[180px] flex-shrink-0"
                  />
                )}
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h3
                    className="text-lg font-bold line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  {post.excerpt?.rendered && (
                    <p
                      className="text-gray-600 text-sm line-clamp-3 mt-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No matching blog posts found.</p>
        )}
      </div>
    </div>
  );
}
