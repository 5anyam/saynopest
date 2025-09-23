import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const beetleFaqData = [
  {
    question: "What types of beetles are commonly found around homes?",
    answer: "The most common beetle which people spot near their homes are: carpet beetles, powderpost beetles, wood-boring beetles and pantry beetles. These insects are capable of destroying food, garments, wood and even carpeting. Although all the species have their habits, they all have problems when they find their way into our house."
  },
  {
    question: "How can I identify a beetle infestation?",
    answer: "The indicators of a beetle problem largely rely on the type of beetle; however, signs usually include: The wood-boring beetles create holes in timber or furniture. Carpet Beetles have the potential to destroy carpets, clothing. Pantry beetles creep on the stored food, such as flour, rice, or cereal and destroy them. Small beetle shells or larvae may be found near windows and storage places."
  },
  {
    question: "What are the risks associated with beetle infestations?",
    answer: "Beetles can cause several problems: Property damage: These beetles can cause serious damage to your property, which is made up of wood, and several beetles can destroy your carpet and fabrics. Food contamination: Pantry beetles destroy dry goods like grains, pasta and pet food. Allergies: Some beetles shed hairs and skins that can cause skin problems to individuals. Ignoring a beetle invasion can cause serious repairs and food waste."
  },
  {
    question: "How can I prevent beetle infestations?",
    answer: "You can reduce the chances of beetle invasion by following these steps: Store food in tight boxes to keep pantry pests out. Clean the carpet, mate and furniture properly so that you can remove the beetle larvae. Fill breaks and gaps of windows, doors, and the main entry. Check wood material & second-hand items before bringing them inside. Keep your home dry and allow the air to pass through, since some beetles live in damp areas."
  },
  {
    question: "When should I contact a professional for beetle control?",
    answer: "You should call a pest control expert if: The infestation is large & huge. You notice serious wood damage or multiple small holes in furniture or the surface. Pantry pests keep returning even after cleaning and storing food properly. DIY methods don't seem to work. The best pest control experts have the right products and treatments to remove beetles."
  }
];


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/beetle`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Centipede Removal Service, Safe & Thorough Treatment in USA";
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

const beetleTypes = [
  {
    name: "Asian Longhorned Beetle",
    image: "/types/beetles/asian-longhorned-beetle.jpg",
    link: "https://www.saynopest.com/asian-longhorned-beetle"
  },
  {
    name: "Emerald Ash Borer",
    image: "/types/beetles/emerald-ash-borer.jpg",
    link: "https://www.saynopest.com/emerald-ash-borer"
  },
  {
    name: "Mountain Pine Beetle",
    image: "/types/beetles/mountain-pine-beetle.jpg",
    link: "https://www.saynopest.com/mountain-pine-beetle"
  },
  {
    name: "Colorado Potato Beetle",
    image: "/types/beetles/colorado-potato-beetle.jpg",
    link: "https://www.saynopest.com/colorado-potato-beetle"
  },
  {
    name: "Japanese Beetle",
    image: "/types/beetles/japanese-beetle.jpg",
    link: "https://www.saynopest.com/japanese-beetle-saynopest"
  }
];

export default function BeetleTypesPage() {
  return (
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Beetles</h1>

          <p className="text-gray-700 mb-6">
            Beetles are bugs with tough shells that you can find crawling around almost anywhere, from woods to your own backyard.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Different Types of Beetles</h2>
          <p className="text-gray-700 mb-6">
            There are over 30,000 different types of beetles in the United States, which makes them the most common pest in the United States. As you can easily find them. Their hard forewings cover their delicate hind wings with a straight tire shape and are recognised by the black elytra. There are beetles with sizes running from tiny to enormous; the smallest may be only a few millimetres, and the extra large ones are more than six inches long. They have bodies that are shaped like ovals or elongated flat shapes and may be dull brown, black or jazzed up with shining green or red colours. Beetles seem to have six legs from a distance because each antenna makes it look that way, and together with their strong biting jaws, they can manage their eating.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat and Distribution</h2>
          <p className="text-gray-700 mb-6">
            The U.S.A. shoulders nearly all the habitats for innumerable beetles which roam the forest, grassland, wetland, desert, urban park, and indoor areas of the country. Some of them are the inhabitants of soil, under logs, or fallen leaves, while others are those we spot on plants, in stored food products, or even in wooden structures. Many beetles are plant eaters, living on leaves, stems, roots, and seeds. Some organisms are decomposers and feed mainly on decaying plants and animals, fungi, animal hair, etc., and lastly, there are also a few species that are predators.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Life Cycle and Seasonal Activity</h2>
          <p className="text-gray-700 mb-6">
            While a few different types of beetles are lone, others live in groups, and for most of them, growth and eating happen primarily during their larval life before moving on to other stages. While a lot of beetles are active in the summer, some others, including <b className="text-green-500">
    <Link href="https://www.saynopest.com/carpet-beetle-bites-what-every-american-needs-to-know">
    carpet beetles 
    </Link>
  </b> and Asian ladybugs, move into houses when it’s cold. Their flexibility and ability to recover from adversities are reasons why they can succeed in a lot of places, and at the same time, why they become so difficult to handle when they are in homes or crops or when they are destroying structures.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Beetle Infestation</h2>
          <p className="text-gray-700 mb-6">
            At the time of this writing, the United States is one of the most beetle-infested countries in the world due to its variety of climatic zones, extensive farmland, and the transition of green areas into developed ones. The rise in the temperature of the earth, the increase in the sand drought, and the darkness of the forest have become so from beetles to an increase their wood-boring and crop-damaging beetles. However, human beings need to understand <b className="text-green-500">
    <Link href="https://www.saynopest.com/how-to-get-rid-of-carpet-beetles-signs-solutions-and-prevention">
    how to get rid of carpet beetles  
    </Link>
  </b> urgently because these are the creatures that can cause damage to the homes by infesting wood and fabrics and contaminate the food sources, as a result, the farmers lose their earnings in the process of repairs and the homeowners have to pay for the losses of the crops and trees.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Beetles</h2>
          <p className="text-gray-700 mb-6">
            Beetles show up in all kinds of shapes, sizes, and colours, and you’ll spot them just about everywhere across the U.S.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {beetleTypes.map((type, index) => (
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
  faqs={beetleFaqData}
  title="Frequently Asked Questions About Beetles"
  subtitle="Get answers to common questions about beetle identification, prevention, and professional control services."
/>
      </div>
  );
}
