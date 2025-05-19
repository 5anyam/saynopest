// components/LatestPosts.tsx
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
import { SearchBar } from "@/components/searcBar/searchBar";

type LatestPostsProps = {
  posts: Post[];
  currentPage?: number;
  totalPages?: number;
  title?: string;
  searchTerm?: string;
  categories?: number;
};

export async function LatestPosts({
  title,
  posts,
  currentPage = 1,
  totalPages = 1,
  searchTerm,
  categories,
}: LatestPostsProps) {
  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className="mb-12">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <h2 className="text-2xl text-primary text-center font-bold mb-4 sm:mb-0">
      {title || searchTerm ? "Search Results" : "Latest Posts"}
    </h2>
    <SearchBar />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.slice(0, 6).map((post) => {
      const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

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
              {category && (
                <span className="inline-block mb-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full max-w-max">
                  {category}
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
                  className="inline-block text-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
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

  <div className="text-center mt-8">
    {totalPages > 1 ? (
      <div className="flex justify-between items-center">
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
            className="text-blue-600 hover:underline"
          >
            Previous
          </Link>
        )}

        <span>
          Page {currentPage} of {totalPages}
        </span>

        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
            className="text-blue-600 hover:underline"
          >
            Next
          </Link>
        )}
      </div>
    ) : (
      <Link href="/blog" className="text-blue-600 hover:underline">
        View More Posts
      </Link>
    )}
  </div>
</div>

  );
}
