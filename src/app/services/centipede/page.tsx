import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

const centipedeFaqData = [
  {
    question: "How can I identify different types of centipedes inside homes vs outdoors?",
    answer: "The house centipede is the most common form of centipede. They are yellowish-grey in colour. They are very fast and they have long legs. You will find large centipedes, more dark in colour, which are chiefly found under rocks, logs, and indoor centipedes are smaller, and preying upon other insects; outdoor kinds may become larger, and are fond of soil or of damp gardens."
  },
  {
    question: "Why do I see centipedes more often during damp or humid weather?",
    answer: "Centipedes like moist and damp places, and can live in humid and wet climates easily. You can easily spot them in basements, bathrooms or in the kitchens at the time of rainfall and the humid season. They are more active in moist soil, and some of them may even get into your house to find a dry yet still moist shelter."
  },
  {
    question: "Are centipede bites dangerous to humans?",
    answer: "Centipede bites are few and not dangerous to humans. Most house centipedes are so small that they cannot even bite humans. Big outdoor species can bite, but the effect is as same as a bee sting. Their bite causes less pain, a bump in the skin, and makes the skin red."
  },
  {
    question: "How can I reduce centipedes naturally before calling a professional?",
    answer: "You can lower centipede numbers with a few simple steps: Dry it out by repairing the leaks and installing. Close cracks and gaps as well as areas of entry around doors and windows. Make your house clean and without any clutter in places where insects can conceal themselves. Check for other pests, as centipedes are parasites of other pests. Mow the lawn, rake up the piles of leaves and store firewood off the house."
  },
  {
    question: "Why is seeing centipedes a sign of other pest issues or moisture problems?",
    answer: "If you spot centipedes, this means that: Your home has high moisture, which attracts them. There may be other insects near your home, like ants, cockroaches, or spiders, which centipedes eat. So, centipedes are not just a creepy themselves—they are a signal that your home may need both pest control and moisture control."
  }
];

// Generate FAQ Schema
const generateCentipedeFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": centipedeFaqData.map(faq => ({
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
  const canonicalUrl = `${baseUrl}/centipede`;
  const featuredImage = `${baseUrl}/types/centipede-hero-image.jpg`;
  
  const title = "Centipede Removal Service, Safe & Thorough Treatment in USA";
  const description = "Protect your home from centipedes with safe, thorough removal. SayNoPest connects you to expert pest control services trusted across the USA.";
  
  return {
    title: title,
    description: description,
    keywords: "centipede control, house centipedes, centipede identification, centipede removal, pest control, moisture control, centipede bites",
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
          alt: "Common types of centipedes found in US homes - identification guide",
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
      'article:section': 'Centipede Control',
      'article:tag': 'house centipedes, centipede identification, moisture control, centipede bites, pest control',
      'og:image:alt': 'Guide to common centipede types found in US homes',
      'twitter:image:alt': 'Guide to common centipede types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Centipedes > Centipede Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}

const centipedeTypes = [
  {
    name: "House Centipede",
    image: "/types/centipede/house-centipede.jpg",
    description:
      "Easily recognized by its long legs and fast movement, this species is commonly found in basements and bathrooms. It preys on insects and is generally harmless to humans.",
    link: "https://www.saynopest.com/house-centipedes/",
  },
  {
    name: "Giant Desert Centipede",
    image: "/types/centipede/giant-desert-centipede.jpg",
    description:
      "One of the largest centipedes in the U.S., growing up to 8 inches. Found in the Southwest, it can deliver a painful bite but is not deadly.",
    link: "https://www.saynopest.com/the-giant-desert-centipede-a-closer-look/",
  },
];

export default function CentipedeTypesPage() {
  const centipedeFaqSchema = generateCentipedeFAQSchema();

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(centipedeFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-14">
          <h1 className="text-2xl text-center font-bold text-primary mb-4">Centipedes</h1>

          <p className="text-gray-700 mb-6">
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/what-are-centipedes-an-in-depth-guide-for-u-s-homeowners">Centipedes</Link>
            </b>{" "}
            are fast-moving creatures often found in damp, dark environments. Although their appearance may seem intimidating, they actually help control other insect pests and are typically harmless to humans.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Centipedes Uncovered: What They Are and How to Identify</h2>
          <p className="text-gray-700 mb-6">
            Centipedes are long, segmented arthropods known for their many legs—ranging from 15 to over 170 pairs depending on the species. With flat, worm-like bodies and a pair of legs per segment, they also feature long, sensitive antennae on a distinct head.
            <br /><br />
            In the U.S., centipedes typically range in color from yellowish to dark brown, often with stripes or markings. Their size varies greatly—from just 1/8 inch to up to 8 inches in the southern and southwestern states.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Where Centipedes Hide: Common Habitats</h2>
          <p className="text-gray-700 mb-6">
            Centipedes thrive in moist, dark environments such as under rocks, mulch, leaf litter, and logs. Inside homes, they commonly inhabit basements, bathrooms, and crawl spaces. As nocturnal hunters, they use venomous jaws to capture and feed on insects, spiders, and other small invertebrates—making them useful in natural pest control.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Friend or Foe? The Role of Centipedes</h2>
          <p className="text-gray-700 mb-6">
            Despite their fearsome appearance, most centipedes pose little threat to humans. Bites from smaller species are rare and typically result in mild pain or swelling similar to a bee sting. Larger species may deliver more painful bites, but they are generally not dangerous.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Signs of House Centipede Infestation</h2>
          <p className="text-gray-700 mb-6">
            Centipede infestations are fairly common in areas with high humidity or during colder seasons when they seek warmth indoors. Their presence can also indicate underlying moisture issues or an existing pest problem. Recognizing and managing a centipede infestation is important not only for comfort but also to address potential root causes. Learn{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/how-to-get-rid-of-centipedes-signs-safety-and-effective-control">how to rid of house centipedes</Link>
            </b>{" "}
            safely and effectively to keep your living space pest-free.
          </p>

          <h2 className="text-2xl font-semibold text-center text-primary mb-2">Types of Centipedes</h2>
          <p className="text-gray-700">
            Explore the variety of centipedes commonly found in U.S. homes and desert regions. Each type plays a unique role in the ecosystem—and understanding them can help in managing their presence effectively.
          </p>
        </div>

        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {centipedeTypes.map((type, index) => (
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
          faqs={centipedeFaqData}
          title="Frequently Asked Questions About Centipedes"
          subtitle="Get answers to common questions about centipede identification, behavior, safety concerns, and natural control methods."
        />
        </div>
      </div>
    </>
  );
}
