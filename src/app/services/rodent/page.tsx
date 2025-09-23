import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const rodentsFaqData = [
  {
    question: "What health risks are associated with a rodent infestation?",
    answer: "Rats and mice give rise to such diseases as: hantavirus, salmonella, and leptospirosis, can bring about allergies and asthma because of their droppings."
  },
  {
    question: "How fast do rodent populations grow in a house?",
    answer: "Rodent reproduction is rapid; in several months, a couple of mice can have a dozen children."
  },
  {
    question: "What attracts rodents into homes, and what habitats do they prefer?",
    answer: "Food waste, debris and heat are an attraction to rodents and in most instances they nest in the attics, basements and the wall cavities."
  },
  {
    question: "Are rodent poisons safe, and what alternative treatments exist?",
    answer: "Pets and children may become victims of poisons, thus, less harmful traps, exclusion, and professional pest control can be employed."
  },
  {
    question: "How does SayNoPest address recurring rodent problems?",
    answer: "SayNoPest implies the reinfestation prevention through the use of exclusion methods, preventing openings and around-the-clock watchfulness."
  }
];


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/rodent`;
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

const miceTypes = [
  {
    name: "Rat",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/rat.jpg",
    description: "These termites build large underground colonies and require moist environments. They commonly enter homes through soil contact or foundation cracks.",
    link: "https://www.saynopest.com/how-to-get-rid-of-rats-effective-solutions",
  },
  {
    name: "Mice",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/mice.jpg",
    description: "Highly aggressive and destructive, Formosan termites can build nests underground or in walls and attics if moisture is available.",
    link: "https://www.saynopest.com/types-of-house-mice-in-the-u-s",
  }
];

export default function RodentsPage() {
  return (
    <>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-2xl text-center font-bold text-primary mb-4">Rodents</h1>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Appearance</h2>
          <p className="text-gray-700 mb-6">
            Rodents are small to medium-sized mammals, and their most noticeable feature is their
            continuously growing, very sharp incisors. They use their teeth for gnawing food,
            digging burrows, and self-defense. In the U.S., rodents come in different sizes and
            colors, typically having compact bodies, short legs, and bushy or bare tails. Fur colors
            vary from brown, gray, and black to lighter shades depending on the species. Rodents are
            commonly found in urban areas, rural fields, forests, and wetlands.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Rodent Behavior</h2>
          <p className="text-gray-700 mb-6">
            Rodents are nocturnal, sleeping during the day and becoming active at night. Their diet
            includes seeds, plants, insects, and leftover food from kitchens. They breed rapidly,
            which contributes to fast population growth. Their exceptional scavenging abilities help
            them survive in a variety of environments without running out of food.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Types of Rodent Infestation</h2>
          <p className="text-gray-700 mb-6">
            Various <b className="text-green-500">
    <Link href="https://www.saynopest.com/discover-how-to-get-rid-of-mice-without-losing-your-mind-saynopest">
    types of rodents
    </Link></b> can invade homes easily, making them a major concern. Rodent
            problems affect over 16 million homes and around 38 million people across the U.S.
            Infestations are especially common in rural areas, colder regions, and older or darker
            homes.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Need for Rodent Control</h2>
          <p className="text-gray-700 mb-6">
            Rodents can carry and spread harmful diseases such as Hantavirus, Leptospirosis, and
            Salmonella. Their constant gnawing on wires can damage structures and even cause fire
            hazards due to exposed electrical wiring. Effective rodent control is essential to
            maintain a safe, clean, and healthy living environment in the U.S.
          </p>

          <h2 className="text-2xl font-semibold text-primary text-center mb-2">Types of Rodents</h2>
          <p className="text-gray-700">
            There are several types of rodents found across the United States. Recognizing them is
            the first step in determining the best way to eliminate them and prevent future
            infestations.
          </p>
        </div>

        <div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {miceTypes.map((type, index) => (
      <Link href={type.link} key={index}>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm">
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
  faqs={rodentsFaqData}
  title="Frequently Asked Questions About Rodents"
  subtitle="Get answers to common questions about rodent health risks, population growth, prevention methods, and professional control services."
/>
</div>

      </div>
    </>
  );
}

