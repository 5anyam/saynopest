import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const earwigFaqData = [
  {
    question: "What exactly are earwigs, and what distinctive features do they have?",
    answer: "The earwigs are small brown insects though they are defined by the two pincers that are found at the stomach. They are nocturnal creatures and they eat plant matter that is in decay, insects and organic matter. They are also low and can therefore easily fit in dark and narrow crevices."
  },
  {
    question: "Where do earwigs hide during the day, and how do they enter homes?",
    answer: "The earwigs sleep in the dark and wet spots such as in the sub mulch, rock/logs daytime. When neither dry nor cold it becomes conducive they squeeze in the houses through the little holes, through the windows, through the drains."
  },
  {
    question: "Are earwigs harmful to humans or pets?",
    answer: "Earwigs are not very harmful to human beings, pets, they do not carry diseases and their pincers can hardly penetrate the flesh and cut it anywhere, to injure it."
  },
  {
    question: "Can earwigs damage my garden or indoor plants?",
    answer: "Earwigs do chew pretty leaves, yes, and holes and tattered ends of flowers and fruits. A small number of the infestations can be addressed but so many of them can kill young plants in the garden."
  },
  {
    question: "And where do the earwigs live, particularly, in houses, particularly, in the bathroom or the basement?",
    answer: "Earwigs like the dark and two fold wet. Water basements, leaky pipes and dirty bathrooms preferably form their right habitat to live and breed."
  },
  {
    question: "When should I call a professional for an earwig infestation?",
    answer: "Ear wigs too will arrive after a week or too often in the house and thereafter call the pest controller. They are able to provide shelter area, eliminate the infestation and close the accessibility in the future."
  }
];

// Generate FAQ Schema
const generateEarwigFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": earwigFaqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/earwigs`;
  const featuredImage = `${baseUrl}/types/earwig-hero-image.jpg`;
  
  const title = "Earwig Control & Removal Services | Identification Guide";
  const description = "Learn about earwigs found in American homes including identification tips, behavior patterns, and effective control methods to protect your home and garden.";
  
  return {
    title: title,
    description: description,
    keywords: "earwigs, earwig control, earwig identification, European earwig, earwig removal, pest control, earwig infestation, earwig damage",
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
          alt: "Common earwig types found in US homes - identification guide",
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
      'article:section': 'Earwig Control',
      'article:tag': 'earwigs, European earwig, earwig identification, earwig damage, pest control',
      'og:image:alt': 'Guide to common earwig types found in US homes',
      'twitter:image:alt': 'Guide to common earwig types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Earwigs > Earwig Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const earwigTypes = [
  {
    name: "European Earwig (Forficula auricularia)",
    image: "/types/european-earwig.jpg",
    description:
      "The most common species in the U.S., known for their prominent pincers. They are nocturnal, thrive in damp areas, and often enter homes in search of moisture and food.",
    link: "https://www.saynopest.com/european-earwig",
  },
];

export default function EarwigTypesPage() {
  const earwigFaqSchema = generateEarwigFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(earwigFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        {/* Content Section */}
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Earwigs</h1>

          <p className="text-gray-700 mb-6">
            Recognized by their pincers and nocturnal behavior, earwigs are omnivorous insects that thrive in damp environments. Learn about the common species found in the U.S.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Earwigs Uncovered: Identifying the Pincer-Tailed Insect</h2>
          <p className="text-gray-700 mb-6">
            Earwigs are easily identified by the pincers, or cerci, located at the end of their abdomen. Adults measure about 1.3 to 2.5 cm in length and are typically dark brown or reddish-brown, sometimes with lighter or striped bodies compared to their younger counterparts. Although most earwigs have wings, they rarely use them to fly.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Where Earwigs Hide and What They Eat</h2>
          <p className="text-gray-700 mb-6">
            Being nocturnal, earwigs tend to hide during the day in damp, dark places such as under rocks, mulch, leaf litter, or logs. At night, they become active and feed on a wide variety of materials, including decomposing plant matter, live plants, fruits, flowers, and even other insects. This makes them both scavengers and occasional predators. If you spot an{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/how-to-get-rid-of-earwigs-in-house-effective-control-methods">
                Earwig in house
              </Link>
            </b>
            , it may be a sign of nearby moisture issues or garden proximity.
          </p>

          {/* Earwig Type with Side-by-Side Layout */}
          <div className="flex flex-col md:flex-row items-start bg-white rounded-2xl shadow-md overflow-hidden p-6 gap-6 mb-6">
            <Link href="https://www.saynopest.com/european-earwig" className="w-full md:w-1/2">
              <div className="relative w-full h-60 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={earwigTypes[0].image}
                  alt={earwigTypes[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {earwigTypes[0].name}
                </h2>
              </div>
            </Link>

            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                When Earwigs Invade Your Home: Habitat & Danger
              </h2>
              <p className="text-gray-700 mb-4">
                Earwigs often travel in small groups and are usually found near moist areas inside homes,
                such as bathrooms, damp basements, and overly wet kitchens. Their thigmotactic behavior—
                seeking out close contact with surfaces—draws them to these environments. While earwigs are not
                dangerous to humans, their presence can cause discomfort, and in large numbers, they may
                damage garden plants and spoil stored food.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Earwig Invasion in the USA</h2>
          <p className="text-gray-700 mb-6">
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/how-to-get-rid-of-earwigs-an-authentic-guide-homeowners">
                Earwig Infestation
              </Link>
            </b>{" "}
            is becoming more common across the U.S. due to ideal conditions created by warm, wet climates. Frequent rainfall and high humidity promote breeding and survival, contributing to rising populations. Without proper control, large infestations can lead to food contamination, soil disruption, and environmental imbalance.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Which Earwigs Are Most Likely to Invade Your Home</h2>
          <p className="text-gray-700 mb-6">
            The main types of earwigs, which are also found in different regions of the United States, are the European earwig, which is the most common of all types and mostly found inside the house, and the red-legged earwig. These are mostly found in Florida and the southern part of the USA. 
            These insects mostly get attracted indoors by the moisture; so, they can be found where the surroundings are cool and damper such as basement, bathrooms and plants or these insects can also come into the house in huge numbers due to hot and dry conditions or heavy rain as it does not suit the outside conditions anymore.
          </p>
        </div>

        {/* FAQ Section - Separate and Full Width */}
        <FAQSection 
          faqs={earwigFaqData}
          title="Frequently Asked Questions About Earwigs"
          subtitle="Get answers to common questions about earwig identification, behavior, habitat preferences, potential damage, and professional control services."
        />
      </div>
    </>
  );
}
