import FAQSection from '@/components/FAQSection';
import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

const antFaqData = [
  {
    question: "How do ant infestations spread between rooms?",
    answer: "Ants enter via the cracks, wall, wiring and lines of plumbing. They track odour trails which have been left by scout ants to food and water sources. One colony is able to spread nests in several rooms within a short period of time."
  },
  {
    question: "What signs show ants are nesting in my home?",
    answer: "The most common evidence is small piles of soil or shavings of wood rustling on the walls. Swarmers of winged ants there should be too. Such signs are an excellent indicator that usually there exists a nest."
  },
  {
    question: "What are natural or low-chemical options for controlling ants?",
    answer: "Vinegar, lemon juice and some of the most important oils like peppermint disrupt ant trails. The diatomaceous earth is non-toxic and makes the ants highly inactive. One can reduce the infestations by close food containers and sweeping away the crumbs."
  },
  {
    question: "Do ants pose health risks or trigger allergies?",
    answer: "Yes, ants are able to contaminate food with bacteria on their way. Some species such as fire ants provide painful stings which can be allergic. Interior infestations may increase the severity of asthma in vulnerable persons."
  },
  {
    question: "How does SayNoPest handle multi-species ant infestations?",
    answer: "SayNoPest recognizes the individual ant species prior to treatment because they need various treatment. They are a combination of target baits, nontoxic sprays and barrier treatments. Their combination is a guarantee of long-term inter-species prevention."
  }
];


// Metadata generation function
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/ants`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Ant Control Solutions, Targeted, Safe, Effective | SayNoPest";
  const description = "Eliminate ant infestations with safe, effective pest control solutions. SayNoPest helps you connect with trusted pest control providers across the USA.";
  
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

// Ant types data
const antTypes = [
  {
    name: "Fire Ant",
    image: "/types/grease-ants.jpg",
    description:
      "Twig ants are often found nesting in dead branches and twigs. While not typically aggressive, they can invade homes near wooded areas or gardens.",
    link: "https://www.saynopest.com/fire-ants-vs-red-ants-saynopest/"
  },
  {
    name: "Twig Ant",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/twig-ant.jpg",
    description:
      "Twig ants are often found nesting in dead branches and twigs. While not typically aggressive, they can invade homes near wooded areas or gardens.",
    link: "https://www.saynopest.com/elongated-twig-ants-saynopest/"
  },
  {
    name: "Argentine Ant",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/ants.jpg",
    description:
      "Army ants are nomadic and known for their massive swarms. While less common in the U.S., they pose a risk due to their aggressive foraging behavior.",
    link: "https://www.saynopest.com/california-argentine-ants-saynopest/"
  },
  {
    name: "Carpenter Ant",
    image: "/types/carpenter-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
    link: "https://www.saynopest.com/carpenter-ants-vs-black-ants-saynopest/"
  },
  {
    name: "Pavement Ant",
    image: "/types/pavement-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
    link: "https://www.saynopest.com/how-to-get-rid-of-pavement-ants-permanently-saynopest"
  },
  {
    name: "Army Ant",
    image: "/types/army-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
    link: "https://www.saynopest.com/army-ant-bites-saynopest/"
  }
];

// Main component
export default function AntTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Ants
        </h1>
        <p className="text-2xl font-bold text-gray-800 mb-4">From your kitchen counter to your yard, ants can be found just about anywhere.</p>
        <p className="text-gray-700 mb-6">
          Discover the most common types of ants in the U.S. and the challenges they bring.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Do Ants Keep Coming Back?</h2>
        <p className="text-gray-700 mb-6">
          Did you ever go to your bedroom and suddenly see an army of ants in bed marching to a forgotten crumb? You are not the only one!
          This invasion of ants is a huge problem of American homeowners. No matter if its grub of sugar ants in your pantry, <b className="text-green-500">
          <Link href="https://www.saynopest.com/ants-out-ways-on-how-to-get-rid-of-fire-ants-saynopest">
            fire ants 
          </Link>
        </b> in your yard, or always the <b className="text-green-500">
          <Link href="https://www.saynopest.com/do-carpenter-ants-eat-wood-like-termites-saynopest">
            carpenter ants
          </Link>
        </b> coming from nowhere to sneak into your walls, these annoying creatures are very good
          at finding a way in.  
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">How One Ant Leads to Hundreds?</h2>
        <p className="text-gray-700 mb-6">
          Ants are very skilled in finding food, water and shelter for themselves. A few crumbs, a leaking faucet, or even the pets
          dinner bowl can get their interest. And after they have entered the house, the trail that they leave will let the rest of the
          colony know their way. Before you realize it, a small inconvenience can turn into a huge infestation. 
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ant Facts You Might Need to Know</h2>
        <p className="text-gray-700">
          Although ants are small, but they can be extremely dangerous or even deadly sometimes. There are no fewer than 12,000 known
          species of ants spread all over the world, and it is said that there could likely be about 22,000 existing species. Ants are
          the record holders when it comes to strength. They are so tiny yet so mighty that they can lift 10-50 times more than their
          body weight. They are insects of a social nature appearing as colonies and having very advanced systems of life organization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:grid-cols-4 gap-6">
        {antTypes.map((type, index) => (
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
      <FAQSection 
  faqs={antFaqData}
  title="Frequently Asked Questions About Ants"
  subtitle="Get answers to common questions about ant infestations, natural control methods, health risks, and professional treatment services."
/>
    </div>
  );
}
