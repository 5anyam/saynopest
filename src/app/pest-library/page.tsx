import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/pest-library`;
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

const pests = [
  {
    title: "Ants",
    image: "/ants.jpg",
    category: "ants",
  },
  {
    title: "Cockroaches",
    image: "/cockroaches.jpg",
    category: "cockroach",
  },
  {
    title: "Termites",
    image: "/termites.jpg",
    category: "termites",
  },
  {
    title: "Bugs",
    image: "/bugs.jpg",
    category: "bugs",
  },
  {
    title: "Spiders",
    image: "/spiders.jpg",
    category: "spiders",
  },
  {
    title: "Earwigs",
    image: "/types/european-earwig.jpg",
    category: "earwig",
  },
  {
    title: "Mosquitoes",
    image: "/mosquitoes.jpg",
    category: "mosquitoes",
  },
  {
    title: "Wasps",
    image: "/types/wasps/yellowjacket.jpg",
    category: "wasp",
  },
  {
    title: "Silver Fish",
    image: "/types/urban-silverfish.jpg",
    category: "silver-fish",
  },
  {
    title: "Centipede",
    image: "/types/centipede/brown-centipede.jpg",
    category: "centipedes",
  },
  {
    title: "Rodents",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/rat.jpg",
    category: "rodents",
  },
  {
    title: "Millipede",
    image: "/types/millipede/american-giant-millipede.jpg",
    category: "millipede",
  },
];

export default function PestLibrary() {
  return (
    <div className="min-h-screen bg-gray-50 mt-16 py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Pest Library
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pests.map((pest, index) => (
          <Link
            key={index}
            href={`https://www.saynopest.com/category/${pest.category}`}
            className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-80">
              <Image
                src={pest.image}
                alt={pest.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {pest.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
