import type { Metadata, ResolvingMetadata } from 'next';
import { getAllPosts, getCategoryBySlug } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ✅ Metadata function
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Category: ${slug}`,
    openGraph: {
      images: ['/open-graph.jpg', ...previousImages],
    },
  };
}

// ✅ Main Page Component
export default async function CategoryPage({ params, searchParams }: PageProps) {
  const currentPage = searchParams.page ? parseInt(searchParams.page as string, 10) : 1;
  const searchTerm = typeof searchParams.search === "string" ? searchParams.search : "";

  const category = await getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryId = category.id;
  const { posts, totalPages } = await getAllPosts(currentPage, 10, searchTerm, categoryId);

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
          const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

          return (
            <div
              key={post.id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <Link href={`/${post.slug}`} className="flex flex-col h-full">
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
                    {new Date(post.date).toLocaleDateString("en-US")}
                  </p>
                  <div className="mt-auto text-center">
                    <Link
                      href={`/${post.slug}`}
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

      {/* ✅ Pagination */}
      <div className="text-center mt-10">
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8">
            {currentPage > 1 && (
              <Link
                href={`/category/${params.slug}?page=${currentPage - 1}`}
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
                href={`/category/${params.slug}?page=${currentPage + 1}`}
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
