import type { Metadata, ResolvingMetadata } from 'next';
import { getPostBySlug, getAuthorById, getCategoriesByIds } from "@/lib/queries";
import Link from 'next/link';

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

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 mt-24 flex flex-col lg:flex-row gap-12">
      {/* Main Content */}
      <div className="lg:w-2/3 w-full">
        <h1
          className="font-bold text-3xl mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>

        <div className="flex justify-between text-sm items-center mb-6 flex-wrap gap-2">
          <div>
            Published on <b>{date}</b> by <b>{author?.name}</b>
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

        {/* Blog Content */}
        <div
          className="prose max-w-none prose-img:mx-auto prose-img:w-full prose-img:rounded-md prose-p:leading-8 prose-p:my-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
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

          {/* Table of Contents (if desired, generated manually or via headings extraction) */}
          {/* You can optionally use a plugin or a script to extract headings */}
          {/* Example static TOC below: */}
          <div className="border p-6 rounded-md shadow-md bg-white">
            <h4 className="text-lg font-semibold mb-4">Table of Contents</h4>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li><a href="#section-1" className="text-green-700 hover:underline">Introduction</a></li>
              <li><a href="#section-2" className="text-green-700 hover:underline">Common Pests</a></li>
              <li><a href="#section-3" className="text-green-700 hover:underline">Treatment Options</a></li>
              <li><a href="#section-4" className="text-green-700 hover:underline">Prevention Tips</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
