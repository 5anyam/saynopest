import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

const cockroachFaqData = [
  {
    question: "What types of cockroaches are commonly found in homes?",
    answer: "In the U.S., the most common cockroaches that come in your homes are: German cockroaches, American cockroaches, Oriental cockroaches, Brown-banded cockroaches. German cockroaches are the most widely occurring indoor pests whereas the American cockroaches are larger and often located in the basements or sewers. Oriental cockroaches such as wet places, and brown-banded cockroaches are primarily found in warmer regions such as attics and kitchens."
  },
  {
    question: "Why are cockroach infestations so common in the U.S.?",
    answer: "Cockroaches live in environments where they can easily find food, water, and make their web. Homes mainly give these situations, mainly in kitchens, bathrooms, and basements. Warmer states like Florida, Texas, and California face higher cockroach activity in the year, while colder states still see invasion in heated buildings."
  },
  {
    question: "What health risks are associated with cockroach infestations?",
    answer: "The cockroaches are not only a nuisance -they can influence your health. These are carriers of bacteria such as Salmonella and E. coli that are capable of spoiling food and surfaces. Their cast off and excrements may also lead to skin complications and asthma, primarily among children and sensitive individuals."
  },
  {
    question: "How can I prevent cockroach infestations?",
    answer: "Follow these points to get rid of cockroaches: Keep your kitchen clean and remove left food. Store food in packed boxes, and do not keep pet food out full night. Remove waste regularly and use garbage bins. Fix leaks and remove water because they are attracted to moisture. Fill breaks, gaps, and entry places of doors, windows, and pipes."
  },
  {
    question: "When should I contact a professional for cockroach control?",
    answer: "If you see cockroaches during the day, identify the signs like droppings or a strong smell; it is time to call an expert. A single cockroach means there are many hiding in your home. Professional pest control experts have the products and treatments to remove the invasion safely and effectively. Understand the level of invasion and take early action to deal with this problem."
  }
];

// Generate FAQ Schema
const generateCockroachFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cockroachFaqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/cockroaches`;
  const featuredImage = `${baseUrl}/types/cockroach-hero-image.jpg`;
  
  const title = "Cockroach Removal & Control Services in USA | SayNoPest";
  const description = "Get rid of cockroaches quickly with professional pest control services. SayNoPest guides you to trusted providers ensuring a cleaner, safer home.";
  
  return {
    title: title,
    description: description,
    keywords: "cockroach control, German cockroaches, American cockroaches, Oriental cockroaches, Brown-banded cockroaches, cockroach removal, pest control, cockroach infestation",
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
          alt: "Common types of cockroaches found in US homes - identification guide",
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
      'article:section': 'Cockroach Control',
      'article:tag': 'German cockroaches, American cockroaches, Oriental cockroaches, Brown-banded cockroaches, cockroach identification',
      'og:image:alt': 'Guide to common cockroach types found in US homes',
      'twitter:image:alt': 'Guide to common cockroach types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Cockroaches > Cockroach Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const cockroachTypes = [
  {
    name: "American Cockroach",
    image: "/types/american-cockroach.jpg",
    description:
      "The American cockroach is one of the largest species commonly found in homes. It has a reddish-brown color and can grow up to 2 inches in length.",
    link: "https://www.saynopest.com/american-cockroaches-life-cycle-nymphs-babies/"
  },
  {
    name: "German Cockroach",
    image: "/types/german-cockroach.jpg",
    description:
      "German cockroaches are small, tan to light brown insects with two dark stripes on their back. They reproduce rapidly and are commonly found in kitchens.",
    link: "https://www.saynopest.com/german-cockroaches-the-unwanted-guests-in-american-homes/"
  },
  {
    name: "Oriental Cockroach",
    image: "/types/oriental-cockroach.jpg",
    description:
      "Oriental cockroaches are large, dark-colored, and often found in damp environments like basements. They are slower than other types.",
    link: "https://www.saynopest.com/oriental-cockroach-identification-life-cycle-bites-control/"
  },
  {
    name: "Brown-banded Cockroach",
    image: "/types/brown-banded-cockroach.jpg",
    description:
      "These cockroaches are smaller and lighter in color, with distinct brown bands across their wings. They prefer warm, dry places.",
    link: "https://www.saynopest.com/brown-banded-cockroach-in-house/"
  }
];

export default function CockroachTypesPage() {
  const cockroachFaqSchema = generateCockroachFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cockroachFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        {/* Content Section */}
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-16">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Cockroach</h1>

          <p className="text-gray-700 mb-6">
            If cockroaches are not controlled, they might enter your home and become a problem rapidly. They too are unpleasant and they may also be dangerous for your health as many prefer to live in dirty and damp spots.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Unwelcome Roommates: Why Cockroaches Thrive Indoors</h2>
          <p className="text-gray-700 mb-6">
            <b>Cockroaches</b> are more than a nuisance to create in the peaceful recesses of our homes—they pose actual threats to indoor health. Learn how roaches continue to exist within American households and why they can be such a serious threat to your health and the cleanliness of your residence.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Common Household Cockroach Species & Their Behavior</h2>
          <p className="text-gray-700 mb-6">
            Cockroaches are unmatched when it comes to flexibility and persistence in comparison with any other household pest, with many species doing well in home environments. Although{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/german-cockroaches-the-unwanted-guests-in-american-homes">
                German cockroaches
              </Link>
            </b>{" "}
            may outnumber others, such as the{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/oriental-cockroach-identification-life-cycle-bites-control">
                American and Oriental Cockroaches
              </Link>
            </b>, this is a common cockroach across the U.S, with reports usually being made within homes.
          </p>
          <p className="text-gray-700 mb-6">
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/american-cockroaches-life-cycle-nymphs-babies">
                American roaches
              </Link>
            </b>{" "}
            are the most prevalent species and can grow up to 1.5–2 inches long and have reddish-brown bodies, on top of which they have a prominent yellowish patch at the end of the head. <b>German cockroaches</b>, for example, are smaller, 0.5–0.6 inches in length, and have light brown bodies bearing a pair of dark stripes on their backs. These insects are primarily a nocturnal species, seeking refuge in dark, warm, and moist areas like under kitchen fixtures, behind appliances, within wall crevices; when dormant during broad daylight.
          </p>
          <p className="text-gray-700 mb-6">
            Their omnivorous diet includes food waste, grease, and starch, and even sometimes non-food items such as book bindings, wallpaper glue, and human hair. Their flexibility enables them to survive in areas ranging from crowded city sewers to the more home-like basements of residences, and even in public restaurants.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Cockroach Infestations Are So Common in the U.S.</h2>
          <p className="text-gray-700 mb-6">
            Cockroach problems are very common in the U.S. due to the country's varied climates, dense urban populations, and abundant food waste. Cockroaches are mostly found in the Southeast across the United States. Homeowners inadvertently risk bringing cockroaches into their homes through store bags, moving, or when introducing cardboard boxes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks Associated with Cockroach Infestations</h2>
          <p className="text-gray-700 mb-6">
            It is necessary to get rid of the home with cockroaches because they are a danger to human health. Salmonella, E. coli, and dysentery pathogens adhere to food and surfaces. Pieces of cockroach excrement, cast-off skin, and salivary glands cause asthma, especially in children, because an astounding 63% of U.S. homes indeed boast the allergens.
          </p>

          <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Cockroaches</h2>
          <p className="text-gray-700 text-center mb-8">
            Cockroaches come in different shapes, habits and often hide in varied places. Here's an overview of the most frequent cockroach species in houses all over the United States.
          </p>
        </div>

        {/* Cockroach Types Grid - Centered */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl">
            {cockroachTypes.map((type, index) => (
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
          faqs={cockroachFaqData}
          title="Frequently Asked Questions About Cockroaches"
          subtitle="Get answers to common questions about cockroach identification, health risks, prevention, and professional control services."
        />
      </div>
    </>
  );
}
