import { getAllPosts, getAllCategories } from "@/lib/queries";

type SearchPageProps = {
  searchParams?: {
    q?: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q?.toLowerCase() || "";

  const [postsResponse, categoriesResponse] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  const allPosts = Array.isArray(postsResponse) ? postsResponse : postsResponse?.posts || [];
  const allCategories = Array.isArray(categoriesResponse) ? categoriesResponse : categoriesResponse?.categories || [];

  const filteredPosts = allPosts.filter((post: any) =>
    post?.title?.rendered?.toLowerCase().includes(query)
  );

  const filteredCategories = allCategories.filter((cat: any) =>
    cat?.name?.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-4xl mt-10 mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search results for "<span className="text-primary">{query}</span>"
      </h1>

      {/* Blog Posts */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
        {filteredPosts.length > 0 ? (
          <ul className="space-y-2">
            {filteredPosts.map((post: any) => (
              <li key={post.id}>
                <a
                  href={`/${post.slug}`}
                  className="text-primary hover:underline"
                >
                  {post.title.rendered}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No matching blog posts found.</p>
        )}
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        {filteredCategories.length > 0 ? (
          <ul className="space-y-2">
            {filteredCategories.map((cat: any) => (
              <li key={cat.id}>
                <a
                  href={`/category/${cat.slug}`}
                  className="text-green-700 hover:underline"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No matching categories found.</p>
        )}
      </div>
    </div>
  );
}
