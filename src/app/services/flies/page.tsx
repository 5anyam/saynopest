import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const fleasFaqData = [
  {
    question: "How do fleas infest homes through pets?",
    answer: "Fleas ride on the fur of pets and within minutes proliferate inside the home by detaching themselves into the carpets, bedding, and furniture."
  },
  {
    question: "Why are flea bites concentrated on feet and ankles?",
    answer: "Fleas are low-lying and focus on the exposed body parts which ankles and feet are among the most frequent biting areas."
  },
  {
    question: "How do flea eggs and larvae survive in carpets and furniture?",
    answer: "Flea pupae fall off the animals and lie on soft surfaces, and the larvae feed on organic debris until they get big."
  },
  {
    question: "Are there natural ways to repel or reduce fleas indoors?",
    answer: "Yes- it can be facilitated through routine vacuum cleaning, body bedding washing and natural repulsions like essential oils or diatomaceous earth."
  },
  {
    question: "How does SayNoPest treat flea infestations in multi-pet homes?",
    answer: "SayNoPest cares about the environment of pets, as well as in the apartments, applying safe solutions to the surroundings with the assurance that all life stages of fleas will be eradicated."
  }
];

// Generate FAQ Schema
const generateFleasFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fleasFaqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/fleas`;
  const featuredImage = `${baseUrl}/types/flea-hero-image.jpg`;
  
  const title = "Flea Control & Treatment Services for Pet Owners | SayNoPest";
  const description = "Professional flea control services for homes with pets. Get effective treatment for flea infestations and protect your family and pets with expert solutions.";
  
  return {
    title: title,
    description: description,
    keywords: "flea control, flea infestation, pet fleas, flea treatment, flea bites, flea removal, pest control, flea prevention",
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
          alt: "Flea control and treatment services for pet owners - identification guide",
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
      'article:section': 'Flea Control',
      'article:tag': 'flea control, pet fleas, flea infestation, flea bites, flea prevention',
      'og:image:alt': 'Guide to flea control and treatment for pet owners',
      'twitter:image:alt': 'Guide to flea control and treatment for pet owners',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Fleas > Flea Control',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const fleaTypes = [
  {
    name: "Cat Flea",
    image: "/types/fleas/cat-flea.jpg",
    description: "The most common flea species found on both cats and dogs. Small, dark brown insects that can jump up to 8 inches vertically.",
    link: "https://www.saynopest.com/cat-fleas/"
  },
  {
    name: "Dog Flea", 
    image: "/types/fleas/dog-flea.jpg",
    description: "Similar to cat fleas but slightly larger. Prefer dogs as hosts but will also feed on cats and humans when necessary.",
    link: "https://www.saynopest.com/dog-fleas/"
  },
  {
    name: "Human Flea",
    image: "/types/fleas/human-flea.jpg", 
    description: "Less common today due to improved hygiene. Can live in human hair and bedding, causing itchy bites primarily on legs and feet.",
    link: "https://www.saynopest.com/human-fleas/"
  },
  {
    name: "Oriental Rat Flea",
    image: "/types/fleas/rat-flea.jpg",
    description: "Primary vector for plague transmission. Usually found on rodents but can bite humans when rodent hosts are unavailable.",
    link: "https://www.saynopest.com/rat-fleas/"
  }
];

export default function FleasTypesPage() {
  const fleasFaqSchema = generateFleasFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fleasFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-14 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Fleas</h1>

          <p className="text-gray-700 mb-6">
            Fleas are small, wingless parasites that feed on the blood of mammals and birds. They are particularly problematic for pet owners, as they can quickly infest homes and cause discomfort for both pets and humans through their itchy bites.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance of Fleas</h2>
          <p className="text-gray-700 mb-6">
            Fleas are small insects, typically 1-3mm in length, with dark brown or reddish-brown bodies. They have powerful hind legs that allow them to jump up to 8 inches vertically and 16 inches horizontally. Their bodies are flattened from side to side, making it easy for them to move through pet fur and human hair.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Flea Life Cycle and Infestation Patterns</h2>
          <p className="text-gray-700 mb-6">
            Understanding the flea life cycle is crucial for effective control. Fleas undergo complete metamorphosis with four stages: egg, larva, pupa, and adult. Adult fleas spend most of their time on their host, but eggs fall off into carpets, bedding, and furniture where they develop into larvae. This is why treating both pets and the environment is essential for successful flea control.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Importance of Control</h2>
          <p className="text-gray-700 mb-6">
            Fleas can transmit diseases and cause allergic reactions in both pets and humans. Heavy infestations can lead to anemia in small pets, and flea bites can become infected from scratching. Some people are highly sensitive to flea saliva, developing severe allergic reactions. Professional treatment is often necessary to completely eliminate infestations.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Fleas</h2>
          <p className="text-gray-700">
            Different flea species have varying host preferences, but all can become problematic when they infest homes with pets or in areas with high rodent populations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fleaTypes.map((type, index) => (
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
          faqs={fleasFaqData}
          title="Frequently Asked Questions About Fleas"
          subtitle="Get answers to common questions about flea infestations through pets, bite patterns, natural prevention methods, and professional treatment services."
        />
      </div>
    </>
  );
}
