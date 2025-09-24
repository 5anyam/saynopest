import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const faqData = [
  {
    question: "Are termite treatment methods safe for children and pets?",
    answer: "Yes, most expert termite treatments in the U.S. are made to be safe for children and pets when applied correctly. Many Licensed pest control companies use products which are approved by the Environmental Protection Agency (EPA) and follow all the strict safety guidelines. As a care, your expert may suggest keeping kids and pets away from infected areas till the products have settled."
  },
  {
    question: "Are there eco-friendly termite treatments?",
    answer: "Yes, their are many eco-friendly options are available. Methods like baiting systems, orange oil treatments, and heat treatments are famous eco friendly treatments. The use of these treatments reduce the use of heavy chemicals and are safe for the environment & best to deal with termites. If you choose eco-friendly termite control, tell your pest control expert to know so that they can inform you the best treatments for your home."
  },
  {
    question: "What should I check for termites before buying a house?",
    answer: "Before buying a house, it's smart to look for signs of termite, such as: Mud tubes along walls or foundations, Empty or damaged wood, Small discarded wings near windows or doors, Small droppings that look like dust. It's also advised to call a expert termite inspection before booking an treatment. This inform you that home is termite-free or that any existing issues are handled properly."
  },
  {
    question: "Do termites damage offices and commercial buildings, too?",
    answer: "Yes, termites can cause serious damage to offices & commercial buildings, not just homes. Any design that contains wood—whether frames, furniture, or surface—can be at risk. Businesses many time experience expensive repairs. That's why regular check up and take preventive treatments are very important to keep your property safe."
  },
  {
    question: "How long does termite treatment last?",
    answer: "The best result of termite treatment depends on the type of method used. Liquid treatments can protect your home for about five to ten years, depending on soil conditions and product quality. Bait systems require ongoing checking but can provide long-term protection when maintained regularly."
  }
];

// Generate FAQ Schema
const generateTermiteFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/termites`;
  const featuredImage = `${baseUrl}/types/termite-hero-image.jpg`;
  
  const title = "Termite Protection & Eradication Services in USA | SayNoPest";
  const description = "Safeguard your property with expert termite protection. SayNoPest connects you to trusted providers for fast, reliable eradication services.";
  
  return {
    title: title,
    description: description,
    keywords: "termite control, subterranean termites, drywood termites, termite treatment, termite inspection, formosan termites, dampwood termites, pest control, termite protection",
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
          alt: "Termite protection and eradication services - subterranean and drywood termites guide",
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
      'article:section': 'Termite Control',
      'article:tag': 'termite control, subterranean termites, drywood termites, termite treatment, termite inspection',
      'og:image:alt': 'Guide to termite protection and eradication services',
      'twitter:image:alt': 'Guide to termite protection and eradication services',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Termites > Termite Control',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const termiteTypes = [
  {
    name: "Subterranean Termites",
    image: "/types/subterranean-termites.jpg",
    description:
      "These termites build large underground colonies and require moist environments. They commonly enter homes through soil contact or foundation cracks.",
    link: "https://www.saynopest.com/subterranean-termites-the-hidden-threat-beneath-your-home/",
  },
  {
    name: "Formosan Termites",
    image: "/types/formosan-termites.jpg",
    description:
      "Highly aggressive and destructive, Formosan termites can build nests underground or in walls and attics if moisture is available.",
    link: "https://www.saynopest.com/formosan-termites",
  },
  {
    name: "Drywood Termites",
    image: "/types/drywood-termites.jpg",
    description:
      "These termites live in dry wood and don't require contact with soil. They infest wooden furniture, walls, and framing above ground.",
    link: "https://www.saynopest.com/drywood-termites-identification-eggs-elimination/",
  },
  {
    name: "Dampwood Termites",
    image: "/types/dampwood-termites.jpg",
    description:
      "Larger in size, dampwood termites prefer moist, decaying wood and are commonly found in areas with high humidity or water damage.",
    link: "https://www.saynopest.com/dampwood-termite",
  },
];

export default function TermiteTypesPage() {
  const termiteFaqSchema = generateTermiteFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termiteFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Termites</h1>

          <p className="text-gray-700 mb-6">
            Termites are silent but destructive pests that can cause serious structural damage to homes. Identifying the type of termite is key to controlling infestations effectively.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">The silent destroyers: How termites damage homes across U.S</h2>
          <p className="text-gray-700 mb-6">
            Termites are relatively small, soft-bodied insects ranging from approximately 1/8 to 1 inch long, depending on caste and species. Their appearance ranges from white or naturally pale cream (particularly worker termites) to off-white, to light brown, dark brown and even black with the reproductive <b className="text-green-500">
    <Link href="https://www.saynopest.com/termite-swarm-in-usa">
    termite swarm
    </Link></b>. Termites are equipped with straight, beaded antennae, a straight waist (different from the pinched waist of ants) and, in the swarm stage, two equal pairs of wings.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Termite Habitat & Behavior</h2>
          <p className="text-gray-700 mb-6">
            His habitat does not change depending on the <b className="text-green-500">
    <Link href="https://www.saynopest.com/what-does-a-termite-look-like-a-complete-guide-2025">
    types of termites
    </Link></b> : Subterranean termites construct large colonies in the soil and need a moist environment; they usually enter the house through soil and foundation cracks, dry wood termites reside in dry wood above ground, and Formosan termites can also nest underground or in walls attics if they can find moist environments. In respect of behaviour, termites are social insects that dwell in large colonies and each has a specialised role, and they feed largely on cellulose materials including wood, papers and plant debris but remain hidden and cause damage only after being detected.
          </p>

          <p className="text-gray-700 mb-6">
            In the U.S. More than 600,000 homes are damaged annually by termites, and a huge amount is spent on repair and control measures. Responsible for the term [silent destroyers], these termites can make a quiet meal of wood, paper, and even wallpaper without being noticed until the woodwork is falling apart.
          </p>

          <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Termites</h2>
          <p className="text-gray-700 mb-4">
            Not all termites are the same—some live underground, others in dry wood or damp places, and knowing the difference helps protect your home better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center mb-16">
          {termiteTypes.map((type, index) => (
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

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqData}
          title="Frequently Asked Questions About Termites"
          subtitle="Get answers to common questions about termite treatments, prevention, and identification."
        />
      </div>
    </>
  );
}
