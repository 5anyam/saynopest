import { getAllPosts, getAllCategories } from "@/lib/queries";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.toLowerCase();

  const [postResult, categoryResult] = await Promise.all([
    getAllPosts(), // returns { posts: ExtendedPost[], totalPages }
    getAllCategories(),
  ]);

  const posts = Array.isArray(postResult) ? postResult : postResult?.posts || [];
  const categories = Array.isArray(categoryResult) ? categoryResult : categoryResult?.categories || [];

  const filteredPosts = posts.filter(post =>
    post?.title?.rendered?.toLowerCase().includes(query)
  );

  const filteredCategories = categories.filter(category =>
    category?.name?.toLowerCase().includes(query)
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
            {filteredPosts.map((post) => (
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
            {filteredCategories.map((cat) => (
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
