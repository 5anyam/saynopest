import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/queries";

type LayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const slug = params.slug;
  const category = await getCategoryBySlug(slug);

  return {
    title: category ? `Category: ${category.name}` : "Category Not Found",
    openGraph: {
      images: ["/open-graph.jpg"],
    },
  };
}

export default function CategoryLayout({ children }: LayoutProps) {
  return <>{children}</>;
}