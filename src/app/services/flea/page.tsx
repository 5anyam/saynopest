import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

const fleaFaqData = [
  {
    question: "How do fleas infest homes through pets?",
    answer: "The fleas climb the fur of pets and in a few minutes multiply within the house attaching themselves into the carpets, bedding and furniture. Fleas multiply quickly and thus a few of them on a pet can end up being a huge home infestation."
  },
  {
    question: "Why are flea bites concentrated on feet and ankles?",
    answer: "Fleas lie on the ground and attack the exposed parts of the body, ankles and feet are one of the most commonly bitten parts. The lower limbs offer the best locations to target as they have a high jumping capability, which enables them to reach them easily when they pass by and thereby make them good targets."
  },
  {
    question: "How do flea eggs and larvae survive in carpets and furniture?",
    answer: "The flea pupae detach themselves off the animals and bury on soft surfaces and the larvae feed on organic debris until they become bigger. Carpets and upholstery fibers provide a warm and safe environment that allows hiding them until they are big enough."
  },
  {
    question: "Are there natural ways to repel or reduce fleas indoors?",
    answer: "Yes, it can be supported with the help of regular vacuum cleaning, bedding washing, and such natural repellents as essential oils or diatomaceous earth. It is important to be consistent since natural ways to do this should be used as often as possible to interrupt the life cycle of the flea."
  },
  {
    question: "How does SayNoPest treat flea infestations in multi-pet homes?",
    answer: "SayNoPest is environmentally conscious of pets, along with the apartments, and adopts safe solutions to the environment with the guarantee that all life stages of fleas will be eliminated. Their combination method will make sure that pets and living rooms are simultaneously used, which will exclude the possibility of a flea returning."
  }
];

// Generate FAQ Schema
const generateFleaFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fleaFaqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

const fleaTypes = [
  {
    name: "Cat Flea",
    image: "/types/flies/cat-flea.jpg",
    description:
      "The most common flea species affecting both cats and dogs. Small, dark reddish-brown insects capable of jumping up to 8 inches vertically to find a host.",
    link: "https://saynopest.com/blog/cat-flea-this-is-the-worldwide-most-prevalent-fleet-of-fleas/"
  },
  {
    name: "Dog Flea",
    image: "/types/flies/DogFlea.jpg",
    description:
      "Similar to cat fleas but slightly larger and prefer dogs as their primary host. They can also infest cats and will bite humans when pet hosts are unavailable.",
    link: "https://www.saynopest.com/blog/dog-flea-identification-behaviour-and-habitat"
  },
  {
    name: "Human Flea",
    image: "/types/flies/humanflea.jpg",
    description:
      "Less common today due to improved hygiene standards. These fleas can live in human hair and bedding, causing itchy bites primarily on legs and feet.",
    link: "https://www.saynopest.com/blog/human-flea-rare-but-possible-infestations-explained"
  },
  {
    name: "Oriental Rat Flea",
    image: "/types/flies/orient-flea.jpg",
    description:
      "Primary vector for plague transmission and historically significant. Usually found on rodents but will bite humans when rodent hosts become unavailable.",
    link: "https://www.saynopest.com/blog/oriental-rat-flea-disease-transmission"
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/flea`;
  const featuredImage = `${baseUrl}/types/flea-hero-image.jpg`;
  
  const title = "Professional Flea Treatments, Effective & Safe | SayNoPest";
  const description = "Protect your home from fleas with safe, professional treatments. SayNoPest links you to reliable providers for effective, lasting results.";
  
  return {
    title: title,
    description: description,
    keywords: "flea control, cat flea, dog flea, human flea, rat flea, flea types, flea identification, pest control, flea removal, flea infestation, flea treatment",
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
          alt: "Common types of fleas found in US homes - identification guide",
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
      'article:tag': 'cat flea, dog flea, human flea, rat flea, oriental rat flea, flea identification, pest control',
      'og:image:alt': 'Guide to common flea types found in US homes',
      'twitter:image:alt': 'Guide to common flea types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Fleas > Flea Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

export default function FleaTypesPage() {
  const fleaFaqSchema = generateFleaFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fleaFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        {/* Content Section */}
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Flea</h1>

          <p className="text-gray-700 mb-6">
            Fleas are small, blood-sucking insects that live on pets and can also bite humans, causing itchiness and irritation. They sometimes spread diseases, making regular pet care and hygiene essential.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance</h2>
          <p className="text-gray-700 mb-6">
            Fleas are tiny, wingless insects measuring about 1/8 of an inch long. Their flat, oval shape allows them to move easily through animal fur. Fleas have six legs, with strong hind legs that enable them to jump distances over 100 times their own body length to find a host. They are commonly found in humid places like grassy areas, carpets, and pet beds.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
          <p className="text-gray-700 mb-6">
            Fleas thrive on warm-blooded animals such as dogs, cats, and rodents, and will bite humans when needed. While they are more active in warm seasons, they can survive year-round indoors due to consistent heating and cozy conditions. In the U.S.,{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/blog/why-choose-a-flea-treatment-service">
                flea infestations
              </Link>
            </b>{" "}
            are most severe in warm and humid regions such as the Southeast, Gulf Coast, and parts of the West Coast. Infestations peak in spring and fall, particularly persisting year-round in places like Florida and Texas.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Prevention</h2>
          <p className="text-gray-700 mb-6">
            Flea bites can cause discomfort, allergic reactions, and transmit diseases such as murine typhus, plague, and cat scratch disease. They can also carry tapeworms that pose health risks to both pets and humans. Regular flea treatment for pets, maintaining cleanliness, and controlling humidity indoors are essential steps to prevent infestations and protect family members.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Fleas</h2>
          <p className="text-gray-700 text-center mb-8">
            Despite their size, fleas are a diverse group of parasites, each adapted with impressive survival tactics for living on different hosts and in varying environments.
          </p>
        </div>

        {/* Flea Types Grid - Centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
            {fleaTypes.map((type, index) => (
              <Link href={type.link} key={index}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-primary mb-2">
                      {type.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section - Separate and Full Width */}
        <FAQSection 
          faqs={fleaFaqData}
          title="Frequently Asked Questions About Fleas"
          subtitle="Get answers to common questions about flea infestations through pets, bite patterns, natural prevention methods, and professional treatment services."
        />
      </div>
    </>
  );
}
