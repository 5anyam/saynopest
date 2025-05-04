import { Hero } from "@/components/hero/hero";
import { LatestPosts } from "@/components/latestPosts/latest-posts";
import { getAllPosts } from "@/lib/queries";
import { Services } from "@/components/services/page";
import { Clients } from "@/components/clients";
import { Testimonials } from "@/components/testimonial";

export default async function Page() {
  const { posts } = await getAllPosts();

  return (
    <div className="mt-24">
      <Hero/>
      <Services/>
      <Clients/>
      <Testimonials/>
      <LatestPosts posts={posts} />  
    </div>
  );
}