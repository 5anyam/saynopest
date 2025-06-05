import { getAllPosts, getAllCategories } from "@/lib/queries";

interface PageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const query = (searchParams.q || "").toLowerCase();

  const postsResponse = await getAllPosts();
  const categoriesResponse = await getAllCategories();

  const posts = Array.isArray(postsResponse) ? postsResponse : [];
  const categories = Array.isArray(categoriesResponse) ? categoriesResponse : [];

  const filteredPosts = posts.filter((post) =>
    post.title?.rendered?.toLowerCase().includes(query)
  );

  const filteredCategories = categories.filter((cat) =>
    cat.name?.toLowerCase().includes(query)
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {filteredCategories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Matching Categories</h2>
          <ul className="list-disc ml-6">
            {filteredCategories.map((cat) => (
              <li key={cat.id}>
                <a href={`/category/${cat.slug}`} className="text-blue-600 hover:underline">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Matching Blog Posts</h2>
          <ul className="list-disc ml-6">
            {filteredPosts.map((post) => (
              <li key={post.id}>
                <a href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title.rendered}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No matching posts found.</p>
      )}
    </div>
  );
}
