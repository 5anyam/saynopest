
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/cockroaches`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Cockroach Removal & Control Services in USA | SayNoPest";
  const description = "Get rid of cockroaches quickly with professional pest control services. SayNoPest guides you to trusted providers ensuring a cleaner, safer home.";
  
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
  return (
    <>
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
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
    Cockroaches are unmatched when it comes to flexibility and persistence in comparison with any other household pest, with many species doing well in home environments. Although  <b className="text-green-500">
    <Link href="https://www.saynopest.com/german-cockroaches-the-unwanted-guests-in-american-homes">
    German cockroaches
    </Link></b> may outnumber others, such as the <b className="text-green-500">
    <Link href="https://www.saynopest.com/oriental-cockroach-identification-life-cycle-bites-control">
    American and Oriental Cockroaches
    </Link></b>, this is a common cockroach across the U.S, with reports usually being made within homes.
  </p>
  <p className="text-gray-700 mb-6">
  <b className="text-green-500">
    <Link href="https://www.saynopest.com/american-cockroaches-life-cycle-nymphs-babies">
    American roaches
    </Link></b> are the most prevalent species and can grow up to 1.5–2 inches long and have reddish-brown bodies, on top of which they have a prominent yellowish patch at the end of the head. <b>German cockroaches</b>, for example, are smaller, 0.5–0.6 inches in length, and have light brown bodies bearing a pair of dark stripes on their backs. These insects are primarily a nocturnal species, seeking refuge in dark, warm, and moist areas like under kitchen fixtures, behind appliances, within wall crevices; when dormant during broad daylight.
  </p>
  <p className="text-gray-700 mb-6">
    Their omnivorous diet includes food waste, grease, and starch, and even sometimes non-food items such as book bindings, wallpaper glue, and human hair. Their flexibility enables them to survive in areas ranging from crowded city sewers to the more home-like basements of residences, and even in public restaurants.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Cockroach Infestations Are So Common in the U.S.</h2>
  <p className="text-gray-700 mb-6">
    Cockroach problems are very common in the U.S. due to the country’s varied climates, dense urban populations, and abundant food waste. Cockroaches are mostly found in the Southeast across the United States. Homeowners inadvertently risk bringing cockroaches into their homes through store bags, moving, or when introducing cardboard boxes.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks Associated with Cockroach Infestations</h2>
  <p className="text-gray-700 mb-6">
    It is necessary to get rid of the home with cockroaches because they are a danger to human health. Salmonella, E. coli, and dysentery pathogens adhere to food and surfaces. Pieces of cockroach excrement, cast-off skin, and salivary glands cause asthma, especially in children, because an astounding 63% of U.S. homes indeed boast the allergens.
  </p>

  <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Cockroaches</h2>
  <p className="text-gray-700">
    Cockroaches come in different shapes, habits and often hide in varied places. Here’s an overview of the most frequent cockroach species in houses all over the United States.
  </p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
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
        <div className="p-2 text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">
            {type.name}
          </h2>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
</>
  );
}