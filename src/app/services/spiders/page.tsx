import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const spiderFaqData = [
  {
    question: "What types of spiders are commonly found in homes?",
    answer: "Common house spiders which you can easily see in your homes are: house spider, cellar spider (or daddy longlegs), wolf spider, yellow sac spider, hobo spider, jumping spider. These spiders make their webs in the basements, attics, and corners. These house spiders are not harmful until they are being disturbed."
  },
  {
    question: "Are all spiders dangerous to humans?",
    answer: "Spiders that live inside the house are not a threat in most cases. Although all spiders are venomous as they do not cohabit with other insects, only a few species, such as the black widow and the brown recluse, have venomous bites that can cause health problems for humans. Most spiders will at that time bite only when people forcibly handle them."
  },
  {
    question: "Why do spiders infest homes?",
    answer: "The spiders move into the houses in search of food, water, and shelter, as well as areas where they can lay their eggs. The things that attract them are the other insects, warm areas during cold seasons and easy to enter through taking advantage of small cracks or open windows."
  },
  {
    question: "How can I prevent spider infestations?",
    answer: "Simple cleaning and proper care can help to get rid of them: Maintain a Neat & Clean home, mainly basements, cupboards, and furniture. Get rid of spider-webs and egg-cases. Stuff the cracks and the holes of doors, windows, and foundations. Store food in tightly packed storage containers in order to prevent insect pests that attract spiders. Clean up your yard, take the firewood out of your yard and trim the bushes around the house. Use natural materials such as peppermint oil, diatomaceous earth at entry points."
  },
  {
    question: "When should I contact a professional for spider control?",
    answer: "It is important to contact a pest control expert at the time when spider invasion has increased in your home and property. The expert pest control knows how to handle these pests by using effective methods and treatments. Experts are able to identify, treat and prevent spider problems safely."
  }
];

// Generate FAQ Schema
const generateSpiderFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": spiderFaqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/spiders`;
  const featuredImage = `${baseUrl}/types/spider-hero-image.jpg`;
  
  const title = "Spider Control & Prevention Services | SayNoPest Experts";
  const description = "SayNoPest connects you with experts for safe spider control. Eliminate infestations and prevent future issues with trusted pest services.";
  
  return {
    title: title,
    description: description,
    keywords: "spider control, black widow, brown recluse, house spiders, spider identification, venomous spiders, spider bites, pest control, spider prevention",
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
          alt: "Spider identification and control services - black widow and brown recluse guide",
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
      'article:section': 'Spider Control',
      'article:tag': 'spider control, black widow, brown recluse, house spiders, spider identification, venomous spiders',
      'og:image:alt': 'Guide to spider identification and control services',
      'twitter:image:alt': 'Guide to spider identification and control services',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Spiders > Spider Control',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const spiderTypes = [
  {
    name: "Black Widow Spider",
    image: "/types/spiders/black-widow-spider.jpg",
    description:
      "Easily recognized by its shiny black body and red hourglass marking on its abdomen. Found in dark, undisturbed areas like basements and garages. Its venomous bite can cause severe pain and muscle cramps.",
    link: "https://www.saynopest.com/black-widow-spider-identification-bite-symptoms-webs/"
  },
  {
    name: "Brown Recluse Spider",
    image: "/types/spiders/brown-recluse-spider.jpg",
    description:
      "Light to dark brown with a distinctive violin-shaped mark on its back. Prefers dry, undisturbed places like closets or attics. Its bite can cause serious skin damage in rare cases.",
    link: "https://www.saynopest.com/brown-recluse-spider-what-every-american-homeowner-know/"
  },
  {
    name: "Wolf Spider",
    image: "/types/spiders/wolf-spider.jpg",
    description:
      "Large, hairy, and fast-moving. Often mistaken for tarantulas. They don't spin webs but hunt their prey and are usually found near the ground, inside or outside.",
    link: "https://www.saynopest.com/wolf-spider-natures-agile-hunter-in-american-homes/"
  },
  {
    name: "Jumping Spider",
    image: "/types/spiders/jumping-spider.jpg",
    description:
      "Small and compact with vivid colors and large forward-facing eyes. Known for their agility and curious behavior. Harmless to humans and very active hunters.",
    link: "https://www.saynopest.com/jumping-spiders-meet-the-fascinating-world-of-crawlers/"
  },
  {
    name: "House Spider",
    image: "/types/spiders/house-spider.jpg",
    description:
      "Yellowish-brown with an elongated abdomen. Includes species like the American House Spider. Common in corners, ceilings, and basements where they build messy webs.",
    link: "https://www.saynopest.com/most-common-house-spiders-in-the-united-states/"
  },
  {
    name: "Yellow Sac Spider",
    image: "/types/spiders/yellow-sac-spider.jpg",
    description:
      "Pale yellow or beige spider, under half an inch long. Active at night and known for wandering instead of webbing. Its bite is mildly venomous and can cause skin irritation.",
    link: "https://www.saynopest.com/yellow-sac-spider"
  },
  {
    name: "Southern House Spider",
    image: "/types/spiders/southern-house-spider.jpg",
    description:
      "Brown to gray, commonly found in southern states. Males often resemble brown recluses but are harmless. Females build funnel webs in cracks and corners.",
    link: "https://www.saynopest.com/southern-house-spider"
  },
  {
    name: "Hobo Spider",
    image: "/types/spiders/hobo-spider.jpg",
    description:
      "Found mainly in the Pacific Northwest. Brown with chevron markings on the abdomen. Builds funnel-shaped webs and can occasionally bite, though it is not considered highly dangerous.",
    link: "https://www.saynopest.com/hobo-spiders"
  }
];

export default function SpiderTypesPage() {
  const spiderFaqSchema = generateSpiderFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spiderFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Spiders</h1>

          <p className="text-gray-700 mb-6">
            Many American homes include spiders. Although most spiders aren't dangerous, black widows and brown recluses should be handled carefully, as their bites are poisonous.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Meet the Eight-Legged Intruders:{" "}
            <b>
              <Link href="https://www.saynopest.com/most-common-house-spiders-in-the-united-states">
                <span className="text-green-500">Common House Spiders</span>
              </Link>
            </b>{" "}
            in the U.S.
          </h2>

          <p className="text-gray-700 mb-6">
            Spiders are among the most common household pests in the U.S. They have eight legs, two body sections, and can spin silk. Appearance varies widely: black widows are shiny black with a red hourglass on their underside; brown recluses are light to dark brown with a violin-shaped mark on their backs.{" "}
            <b>
              <Link href="https://www.saynopest.com/wolf-spider-natures-agile-hunter-in-american-homes">
              <span className="text-green-500"> Wolf spiders</span></Link>
            </b>{" "}
            are large, hairy, and usually gray or brown.{" "}
            <b>
              <Link href="https://www.saynopest.com/jumping-spiders-meet-the-fascinating-world-of-crawlers">
                Jumping spiders
              </Link>
            </b>{" "}
            are small, colorful, and have large eyes.{" "}
            <b>
              <Link href="https://www.saynopest.com/most-common-house-spiders-in-the-united-states">
              <span className="text-green-500"> House spiders </span>
              </Link>
            </b>{" "}
            are yellowish-brown with an elongated abdomen, while yellow sac spiders are pale yellow or beige and less than half an inch long. From fields to homes, spiders are found nearly everywhere — including{" "}
            <b>
              <Link href="https://www.saynopest.com/discover-what-cranberry-field-spiders-are">
              <span className="text-green-500"> cranberry field spiders </span>
              </Link>
            </b>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Spiders: The Silent Bug Hunters</h2>
          <p className="text-gray-700 mb-6">
            Spiders are nature's pest controllers. They feed on insects such as flies, mosquitoes, ants, and beetles—many of which are common in homes. While some spin webs to trap their prey, others like{" "}
            <b>
              <Link href="https://www.saynopest.com/wolf-spider-natures-agile-hunter-in-american-homes">
              <span className="text-green-500"> wolf spiders </span>
              </Link>
            </b>{" "}
            and{" "}
            <b>
              <Link href="https://www.saynopest.com/jumping-spiders-meet-the-fascinating-world-of-crawlers">
              <span className="text-green-500"> jumping spider </span>
              </Link>
            </b>{" "}
            actively hunt. Most spiders are solitary and non-aggressive, preferring to avoid humans. Bites from spiders like the black widow and brown recluse typically occur only in self-defense.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Spiders Love Your Home: The Hidden Invitation</h2>
          <p className="text-gray-700 mb-6">
            Spider infestations are common in the U.S. due to accessible prey, favorable climates, and numerous hiding spots inside and around homes. These conditions make it easy for spiders to settle and thrive. While many are harmless, the presence of spiders can cause discomfort and fear. Its essential to address infestations early to prevent potential bites and create a more comfortable living environment.
          </p>
          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Spiders</h2>
          <p className="text-gray-700">
            Discover the most common types of spiders found in the United States and learn how to identify each one.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {spiderTypes.map((type, index) => (
            <Link href={type.link} key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <Image
                  src={type.image}
                  alt={type.name}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-2 text-center">
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {type.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <FAQSection 
          faqs={spiderFaqData}
          title="Frequently Asked Questions About Spiders"
          subtitle="Get answers to common questions about spider identification, prevention, and professional control services."
        />
      </div>
    </>
  );
}
