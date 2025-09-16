import { Hero } from "@/components/hero/hero";
import { LatestPosts } from "@/components/latestPosts/latest-posts";
import { getAllPosts } from "@/lib/queries";
import { Services } from "@/components/services/page";
import { Clients } from "@/components/clients";
import { Testimonials } from "@/components/testimonial";
import Head from "next/head";

export default async function Page() {
  const { posts } = await getAllPosts();

  return (
    <Head>
   <link rel="canonical" href="https://www.saynopest.com/" />
    <div className="mt-6">
      <Hero/>
      <Services/>
      <Clients/>
      <Testimonials/>
      <LatestPosts posts={posts} />  
    </div>
    </Head>
  );
}