import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const fliesFaqData = [
  {
    question: "What are the most common fly species infesting homes in the U.S.?",
    answer: "Fruit flies, cluster flies, drain flies and house flies are the most widespread varieties in the U.S. where they are found indoors."
  },
  {
    question: "How do flies enter homes, and why are they attracted?",
    answer: "Fly can enter the building using open doors, windows, and cracks and flies are drawn to food waste, moisture, and organic substances. Any hole or broken screens can give them access, and it is necessary to close the points of access and keep them clean."
  },
  {
    question: "What health risks do flies pose to humans?",
    answer: "Flies can impregnate food and surfaces, therefore resulting in diseases like food poisoning or diarrhea. They are able to transfer junk or feces to your food contaminating it, thus putting you in danger of infections."
  },
  {
    question: "How can I prevent fly infestations in my home?",
    answer: "Close garbage, clean up drains, food kept, and door and window screens helping to block entry. Fly breeding grounds can also be reduced by cleaning up the hidden places regularly like under appliances."
  },
  {
    question: "When should I contact a professional for fly control?",
    answer: "When flies keep returning even when they have been prevented or when it appears that flies are considerable in number, one is supposed to seek the assistance of the professionals. Professionals have the opportunity to determine the origin of the infestation and implement specific remedies that are more efficient compared to domestic ones."
  }
];

// Generate FAQ Schema
const generateFliesFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fliesFaqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/flies`;
  const featuredImage = `${baseUrl}/types/flies-hero-image.jpg`;
  
  const title = "Fly Control & Treatment Services for Homes | SayNoPest";
  const description = "Professional fly control services for homes and businesses. Get effective treatment for fly infestations including house flies, drain flies, and fruit flies with expert solutions.";
  
  return {
    title: title,
    description: description,
    keywords: "fly control, fly infestation, house flies, fruit flies, drain flies, fly treatment, fly removal, pest control, fly prevention",
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
          alt: "Fly control and treatment services - identification guide",
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
      'article:section': 'Fly Control',
      'article:tag': 'fly control, house flies, fruit flies, drain flies, fly prevention',
      'og:image:alt': 'Guide to fly control and treatment services',
      'twitter:image:alt': 'Guide to fly control and treatment services',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Flies > Fly Control',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const flyTypes = [
  {
    name: "House Fly",
    image: "/types/flies/black-fly.jpg",
    description: "The most common fly species found in homes. Gray or black bodies that feed on garbage, food waste, and organic matter.",
    link: "https://www.saynopest.com/how-to-get-rid-of-house-flies/"
  },
  {
    name: "Drain Fly",
    image: "/types/flies/crane-fly.jpg", 
    description: "Small, fuzzy flies that breed in drains and sewers. Often found in bathrooms and areas with standing water or organic buildup.",
    link: "https://www.saynopest.com/how-do-i-get-rid-of-drain-flies-overnight-saynopest"
  },
  {
    name: "Cluster Fly",
    image: "/types/flies/cluster-fly.jpg",
    description: "Larger flies that gather in large numbers, especially during fall. They seek shelter in homes for overwintering.",
    link: "https://www.saynopest.com/cluster-flies-in-house-know-what-to-do"
  }
];

export default function FliesTypesPage() {
  const fliesFaqSchema = generateFliesFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fliesFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-14 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Flies</h1>

          <p className="text-gray-700 mb-6">
            Flies attack places where there is leftover food or trash. You will mostly find different{" "}
            <Link href="https://www.saynopest.com/7-common-types-of-flies-how-to-stop-them-saynopest" className="text-green-500 font-semibold">
              types of flies
            </Link>{" "}
            near dirty places. They do not bite, but they do carry and spread diseases. It becomes essential to keep things clean as it helps keep flies away from your home.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance of Flies</h2>
          <p className="text-gray-700 mb-6">
            Of all the numerous species of pests, it is the flies that are the most common in the United States. Flies are small to the middle in size; they are normally 1/8 to 1/4 inches long with Gray or black bodies which are occasionally striped. Flies are a kind of pests that are hairy, have a pair of transparent wings, and large eyes that are red in color.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat and Population Growth</h2>
          <p className="text-gray-700 mb-6">
            As their habitats are very adaptable, flies can remain and multiply anywhere, from urban to rural areas, and are especially attracted to hotspots where organic matter is in plenty. Flies, by using their specialized mouthparts to either dip the liquid or to dissolve the solid food by the regurgitation of their digestive fluids, can consume a variety of foodstuff such as rotting food, garbage, animal waste, and even sugary liquids. Fly populations in the United States has increased due to the weather (heat and humidity), an increase in food waste, and there is a growth in the number of places where flies may lay their eggs – both in homes and in the localities of the business.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Importance of Control</h2>
          <p className="text-gray-700 mb-6">
            Getting rid of flies such as{" "}
            <Link href="https://www.saynopest.com/how-do-i-get-rid-of-drain-flies-overnight-saynopest" className="text-green-500 font-semibold">
              drain flies
            </Link>{" "}
            is of primary concern to the American population due to the presence of an ideal climate for such flies, and the availability of many spots where the reproduction process of these pests can take place. Getting rid of flies in your home is essential as they are not just a botheration but have been found to be carriers of disease. They can pass several diseases to people by contaminating food and surfaces with germs of their sources of origin.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of flies</h2>
          <p className="text-gray-700">
            From household pests to agricultural threats, each fly species contributes in different ways to its ecosystem and have different human impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {flyTypes.map((type, index) => (
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
          faqs={fliesFaqData}
          title="Frequently Asked Questions About Flies"
          subtitle="Get answers to common questions about fly infestations, prevention methods, health risks, and professional treatment services."
        />
      </div>
    </>
  );
}
