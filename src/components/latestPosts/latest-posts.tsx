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
        <h2 className="text-2xl text-primary font-bold mb-4 sm:mb-0">
          {title || searchTerm ? "Search Results" : "Latest Posts"}
        </h2>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 6).map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className="border rounded-lg shadow hover:shadow-md transition bg-white overflow-hidden"
          >
            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              {post._embedded?.["wp:term"]?.[0]?.[0]?.name && (
                <span className="inline-block mb-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {post._embedded["wp:term"][0][0].name}
                </span>
              )}

              <h3
                className="text-lg font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US")}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        {totalPages > 1 ? (
          <div className="flex justify-between items-center">
            {currentPage > 1 && (
              <Link
                href={`/posts?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
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
                href={`/posts?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
                className="text-blue-600 hover:underline"
              >
                Next
              </Link>
            )}
          </div>
        ) : (
          <Link href="/posts" className="text-blue-600 hover:underline">
            View More Posts
          </Link>
        )}
      </div>
    </div>
  );
}
