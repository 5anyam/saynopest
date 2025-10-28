import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/mosquitoes`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Mosquito Control Services, Enjoy Your Yard Again | SayNoPest";
  const description = "SayNoPest connects you with trusted mosquito control services. Protect your family and enjoy your yard again with safe, effective treatments.";
  
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

const mosquitoTypes = [
  {
    name: "Aedes Mosquitoes",
    image: "/types/mosquitoes/aedes-mosquitoes.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime.",
      link:"https://www.saynopest.com/blog/aedes-mosquitoes-saynopest/"
  },
  {
    name: "Anopheles Mosquito",
    image: "/types/mosquitoes/anopheles-mosquito.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika.",
      link:"https://www.saynopest.com/blog/anopheles-mosquitoes-saynopest/"
  },
  {
    name: "Culex Mosquitoes",
    image: "/types/mosquitoes/culex-mosquitoes.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains.",
      link:"https://www.saynopest.com/blog/culex-mosquito-top-diseases-they-transmit-and-how-to-stay-safe/"
  }
];

export default function MosquitoTypesPage() {
  return (
    <>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl text-center font-bold text-primary mb-4">Mosquitoes</h1>

          <p className="text-gray-700 mb-6">
            Mosquitoes are small insects that can fly. They also bite to suck animal blood. Their bites are very itchy and sometimes spread diseases like dengue or malaria. It is important to keep them away.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance</h2>
          <p className="text-gray-700 mb-6">
            Mosquitoes have a big lower body, narrow upper bodies, and a pair of wings. Female mosquitoes have a special mouthpart that helps them feed on blood from humans and animals.  
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
          <p className="text-gray-700 mb-6">
            They prefer to live in warm, damp places like standing water in birdbaths, clogged drains, gutters, ponds, etc. 
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Feeding Behavior</h2>
          <p className="text-gray-700 mb-6">
            An interesting fact about both male and female mosquitoes is that both feed on plant nectar, but only the female&absop:s bite. They do this to get the protein needed to develop their eggs. 
          </p>

          <p className="text-gray-700 mb-6">
            The fact is—mosquitoes are attracted to the gases released from the human body, along with their body warmth and sweat. Mosquitoes are mostly active in the morning and evening, but some species also bite during the day. 
          </p>

          <p className="text-gray-700 mb-6">
            The issue of the increase of both mosquitoes and the diseases they transmit is common not only in the U.S. but worldwide and the main reason behind it is: 
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Several suitable places for breeding </li>
            <li>Climatic changes </li>
            <li>Dirty surroundings </li>
          </ul>

          <p className="text-gray-700 mb-6">
            All the reasons mentioned above increase the infestation level of mosquitoes which also produces diseases like West Nile virus, Zika, dengue, and chikungunya.  
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Common Mosquito Species in America </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Yellow fever mosquito </li>
            <b><li className="text-green-500"><Link href="https://www.saynopest.com/blog/aedes-mosquitoes-saynopest">Asian tiger mosquito</Link> </li></b>
            <li>Northern house mosquito </li>
            <li>Southern house mosquito </li>
            <li>Common malaria mosquito </li>
          </ul>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Mosquitoes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mosquitoTypes.map((type, index) => (
            <Link href={type.link} key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={type.image}
                alt={type.name}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-2 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">{type.name}</h2>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </>
  );
}
