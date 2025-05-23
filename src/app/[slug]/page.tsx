import type { Metadata, ResolvingMetadata } from 'next';
import { getPostBySlug, getAuthorById, getCategoriesByIds, getPostsByCategory } from "@/lib/queries";
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title.rendered,
    openGraph: {
      images: ['/open-graph.jpg', ...previousImages],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) return <div>Post not found</div>;

  const author = await getAuthorById(post.author);
  const categories = await getCategoriesByIds(post.categories);
  const relatedPosts = post.categories.length > 0
    ? await getPostsByCategory(post.categories[0], 3)
    : [];

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 mt-24 flex flex-col lg:flex-row gap-12">
      {/* Main Content */}
      <div className="lg:w-2/3 w-full">
        {/* Title */}
        <h1
          className="font-bold text-4xl mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Metadata */}
        <div className="flex justify-between text-sm text-gray-700 mb-6 flex-wrap gap-2">
          <div>
            Published on <b>{formattedDate}</b> by <b>{author?.name}</b>
          </div>
          <div className="flex gap-2 text-xs">
            {categories.map((category) => (
              <Link
                key={category.id}
                className="bg-green-100 text-green-700 px-2 py-1 rounded-md"
                href={`/posts?categories=${category.id}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {post.yoast_head_json?.og_image?.[0]?.url && (
          <div className="mb-8">
            <Image
              src={post.yoast_head_json.og_image[0].url}
              alt="Featured"
              width={600}
              height={400}
              className="rounded-xl w-full h-full object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <div
          className="prose lg:prose-lg max-w-none prose-headings:font-semibold prose-p:leading-7 prose-img:mx-auto prose-img:rounded-md prose-a:text-green-600 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 1 && (
          <div className="mt-16 mb-10">
            <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts
                .filter((p: any) => p.slug !== post.slug)
                .map((related: any) => (
                  <Link
                    href={`/${related.slug}`}
                    key={related.id}
                    className="block p-4 border rounded-md hover:shadow transition bg-white"
                  >
                    <h3
                      className="text-lg font-medium mb-2"
                      dangerouslySetInnerHTML={{ __html: related.title.rendered }}
                    />
                    <p
                      className="text-sm text-gray-600 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: related.excerpt.rendered }}
                    />
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:w-1/3 w-full relative">
        <div className="sticky top-24 space-y-8">
          {/* Book Now Form */}
          <div className="border p-6 rounded-md shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-4">Book Now</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Service</label>
                <select className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option>Termite Control</option>
                  <option>Rodent Removal</option>
                  <option>General Pest Control</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
