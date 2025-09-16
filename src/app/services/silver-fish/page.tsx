import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/silver-fish`;
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

const silverfishTypes = [
  {
    name: "Common Silverfish",
    image: "/types/common-silverfish.jpg",
    description: "Recognized by their silvery, carrot-shaped bodies and fast movements. They are frequently found in damp and dark household areas.",
    link: "https://www.saynopest.com/common-silverfish-saynopest",
  },
];

export default function SilverfishTypesPage() {
  return (
    <>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Silverfish</h1>

          <p className="text-gray-700 mb-6">
            Silverfish get their name from being small, having no wings and moving so quickly you might think they’re swimming. The dampness and dark of your house can make these insects hide and quietly ruin your property.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">What are Silverfish?</h2>
          <p className="text-gray-700 mb-6">
            Silverfish are very small, without wings, and they look and move like fish—earning their name from being silver and gray. Their bodies typically measure 1/2 to 3/4 inches, are slender, flat, and shaped like a carrot or tiny fish. They have long antennae at the front and three tail-like extensions at the back. Their metallic scales make them easily recognizable. Silverfish are nocturnal pests that prefer dark areas and typically hide in damp places such as bathrooms, basements, attics, kitchens, and laundry rooms.
          </p>


           {/* Now, the paragraph that should appear just beside the image */}
            <div className="flex flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden p-6 gap-6">
            <Link href="https://www.saynopest.com/common-silverfish-saynopest"><div className="w-full h-60 relative">
              {silverfishTypes.map((type, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                 <div className="w-full h-60 relative">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {type.name}
                  </h2>
                </div>
              </div>
            ))}
              </div></Link>
              <div className="md:w-1/2 w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">What Do Silverfish Eat?</h2>
          <p className="text-gray-700 mb-6">
            Being herbivores,{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/where-do-silverfish-come-from-understanding-them">silverfish diet</Link>
            </b>{" "}
            includes starchy materials like paper, books, wallpaper, cardboard, glue, textiles, and even dried foods such as flour, cereal, and pasta. They can also feed on synthetic fabrics and, occasionally, dead insects. While silverfish don’t bite or transmit disease, they can cause significant damage to books, important documents, clothes, and food supplies.
          </p>
              </div>
            </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Silverfish Infestation</h2>
          <p className="text-gray-700 mb-6">
            Many American households, especially in the Southeast, Midwest, and coastal regions, are vulnerable to{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/where-do-silverfish-come-from-understanding-them">silverfish infestation</Link>
            </b>{" "}
            due to high humidity and ample food sources. Although silverfish aren’t harmful to people or pets, they can contaminate food, destroy valuables, and trigger allergies through their shed scales and droppings.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Where do silverfish come from</h2>
          <p className="text-gray-700 mb-6">
          The most common silverfish in United States households are Common Silverfish, Gray or Long-tailed Silverfish, Four-Lined Silverfish, and Firebrat. The main cause of these insects entering our homes is that they prefer warm, humid, and dark environments, which our homes provide in attics, basements, bathrooms, and kitchens. 
          They also have easy access to a food source, consisting of starches, glue, paper, and textiles. The primary causes of their invasion of the indoor areas include moisture, food supply and clutter; leaks, high humidity and food stored in an unprofessional manner render the households especially attractive to them.
          </p>

          
        </div>
      </div>
    </>
  );
}
