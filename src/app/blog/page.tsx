import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/queries";

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function BlogPage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const currentPage = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
  const postsPerPage = 20;
  const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categories = parseInt(searchParams.categories as string) || 0;

  const { posts, totalPages } = await getAllPosts(currentPage, postsPerPage, searchTerm, categories);

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="mt-14 text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">No posts found</h2>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {searchTerm ? `Search Results for "${searchTerm}"` : "Our Blog"}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insights, news and the latest updates from our team
        </p>
      </div>

      {/* Featured Post (First Post) */}
      {posts.length > 0 && (
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-96">
                {posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <Image
                    src={posts[0]._embedded["wp:featuredmedia"][0].source_url}
                    alt={posts[0].title.rendered}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  {posts[0]._embedded?.["wp:term"]?.[0]?.[0]?.name && (
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {posts[0]._embedded["wp:term"][0][0].name}
                    </span>
                  )}
                </div>
                <h2 
                  className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}
                />
                <p className="text-gray-600 mb-4">
                  {new Date(posts[0].date).toLocaleDateString("en-US", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <Link
                  href={`/${posts[0].slug}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium w-fit"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Latest Posts Grid */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 sm:mb-0">
            {posts.length > 1 ? "More Articles" : "Latest Posts"}
          </h2>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Page {currentPage} of {totalPages}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => {
            const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

            return (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href={`/${post.slug}`} className="block">
                  <div className="relative h-48 bg-gray-100">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {category && (
                      <span className="inline-block mb-3 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {category}
                      </span>
                    )}
                    
                    <h3
                      className="text-lg font-semibold mb-3 leading-tight hover:text-primary transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium text-sm">
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 pb-16">
          <div className="flex items-center space-x-2">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Link>
            )}

            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                if (pageNum > totalPages) return null;
                
                return (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      pageNum === currentPage
                        ? "bg-primary text-white"
                        : "bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}${categories ? `&categories=${categories}` : ""}`}
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
