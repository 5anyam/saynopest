// app/about/page.tsx
import EstimateModal from '@/components/bookingModal';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/about`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Common Types of Ants in the US | Identification & Control Guide";
  const description = "Discover the most common ant species found in American homes including Fire Ants, Carpenter Ants, Pavement Ants, and more. Learn identification tips and effective control methods.";
  
  return {
    title: title,
    description: description,
    keywords: "ants, ant types, fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, ant identification, pest control, ant removal, ant infestation",
    authors: [{ name: 'Say No Pest' }],
    creator: 'Say No Pest',
    publisher: 'Say No Pest',
    
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'Say No Pest',
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: "Common types of ants found in US homes - identification guide",
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [featuredImage],
      creator: '@saynopest',
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Additional SEO
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Category and topic metadata
    category: 'Pest Control',
    
    // Additional structured metadata
    other: {
      'article:section': 'Ant Control',
      'article:tag': 'fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, pest identification',
      'og:image:alt': 'Guide to common ant types found in US homes',
      'twitter:image:alt': 'Guide to common ant types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Ants > Ant Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}


export default function AboutPage() {
  return (
    <main className="max-w-6xl mt-24 lg:mt-0 mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Saynopest, we’re on a mission to help homeowners and businesses across the U.S. find trusted, effective pest control services – no guesswork required.
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/pest-expert.jpg" alt="Pest control" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Trusted Pest Guide</h2>
          <p className="text-gray-700">
            As a leading pest affiliate marketing platform, we link you with the best pest management providers. With a powerful network of partners and expert-backed recommendations, we make it easy for you to find reliable pest solutions.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Why SayNoPest?</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li><strong>Educational and Comparison Hub:</strong> Your one-stop for rates and services.</li>
          <li><strong>Opinion Hub:</strong> Unbiased and well-researched insights.</li>
          <li><strong>Transparency:</strong> No hidden agendas, just facts.</li>
          <li><strong>Smart Match:</strong> Get connected with experts based on Price, Rating, and Availability.</li>
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted and comprehensive digital hub for pest control solutions across the United States.
          </p>
        </div>
        <div>
          <Image src="/our-vision.jpg" alt="Our Vision" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Lead Generation Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Introduction:</strong> We offer useful content to help users understand pest solutions.</li>
          <li><strong>Understanding:</strong> We gather basic info about your pest issue.</li>
          <li><strong>Delivery:</strong> We match you with trusted pest control companies.</li>
          <li><strong>Monitor:</strong> We track experiences to ensure quality service.</li>
          <li><strong>Evaluation:</strong> Feedback helps us improve and maintain reliable providers.</li>
        </ol>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/why-choose-us.jpg" alt="Why Choose Us" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700">
            We bring together a team of experts, real experiences, and practical advice so you can confidently pick the best pest control service. With custom matching, we align providers with your budget, location, and needs.
          </p>
        </div>
      </section>

      <section className="text-center bg-green-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Say No to All Kinds of Pests?</h2>
        <p className="text-gray-700 mb-6">Let us help you with trusted pest control companies near you. Just tell us what you need and leave the rest to us!</p>
        <EstimateModal/>
      </section>
    </main>
  );
}
