import type { Metadata, ResolvingMetadata } from 'next';
import {
  getPostBySlug,
  getAuthorById,
  getCategoriesByIds,
  getPostsByCategory,
  getAllCategories,
} from "@/lib/queries";
import Link from 'next/link';
import Image from 'next/image';
import BookNowForm from '@/components/BookNowForm';

// 👇 Category type define karo yahi (ya types.ts mein export karo)
type Category = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
  const slugData = await params;
  const post = await getPostBySlug(slugData.slug);
  if (!post) return <div>Post not found</div>;

  const author = await getAuthorById(post.author);
  const categories = await getCategoriesByIds(post.categories);
  const relatedPosts = post.categories.length > 0
    ? await getPostsByCategory(post.categories[0], 3)
    : [];
  const allCategories = await getAllCategories();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
    <div className="container mx-auto px-4 mt-24 flex flex-col lg:flex-row gap-12">
      {/* Main Content */}
      <div className="lg:w-2/3 w-full">
        <h1
          className="font-bold text-4xl mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className="flex justify-between text-sm text-gray-700 mb-6 flex-wrap gap-2">
          <div>
            Published on <b>{formattedDate}</b> by <b>{author?.name}</b>
          </div>
          <div className="flex gap-2 text-xs">
            {categories.map((category) => (
              <Link
                key={category.id}
                className="bg-green-100 text-green-700 px-2 py-1 rounded-md"
                href={`/category/${category.slug}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

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

        <div
          className="prose lg:prose-lg max-w-none prose-headings:font-semibold prose-p:leading-7 prose-img:mx-auto prose-img:rounded-md prose-a:text-green-600 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

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
          <BookNowForm/>

          {/* Categories Sidebar */}
          <div className="border p-6 rounded-md shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {allCategories
                .filter((cat: Category) => cat.count > 0)
                .map((cat: Category) => (
                  <li key={cat.id}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="text-green-700 hover:underline block"
                    >
                      {cat.name} ({cat.count})
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
    </>
  );
}
