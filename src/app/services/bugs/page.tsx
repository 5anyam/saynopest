
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com/services';
  const canonicalUrl = `${baseUrl}/bugs`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Bugs Pest Control Services, Fast & Reliable | SayNoPest";
  const description = "SayNoPest helps you find fast, reliable bug control services. Eliminate pests quickly and keep your home protected with expert solutions.";
  
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

const bugsTypes = [
  {
    name: "Giant Water Bug",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/MicrosoftTeams-image-1.jpg",
    description:
      "Easily recognized by its long legs and fast movement, this species is commonly found in basements and bathrooms. It preys on insects and is generally harmless to humans.",
    link: "https://www.saynopest.com/giant-water-bug-americas-aquatic-predator",
  },
  {
    name: "Stink Bug",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/MicrosoftTeams-image.jpg",
    description:
      "Easily recognized by its long legs and fast movement, this species is commonly found in basements and bathrooms. It preys on insects and is generally harmless to humans.",
    link: "https://www.saynopest.com/what-are-stink-bugs-a-complete-guide-for-usa",
  },
  {
    name: "Bed Bug",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/MicrosoftTeams-image-2.jpg",
    description:
      "Easily recognized by its long legs and fast movement, this species is commonly found in basements and bathrooms. It preys on insects and is generally harmless to humans.",
    link: "https://www.saynopest.com/what-kills-bed-bugs-instantly",
  },
];

export default function BedBugTypesPage() {
  return (
    <>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Bugs</h1>

          <p className="text-gray-700 mb-6">
            Bugs are a varied collection of insects that exist all over the United States, each of them having good looks, living places, and a set of habits that make them completely different from one another. Most bugs are well known by the lot of their shapes and colors: thus, stink bugs are for the most part large, ovoid, or shield-shaped, water bugs are flat, yellow-brown, which is a blend of a cockroach and a praying mantis movie, and bed bugs are little, reddish-brown and ovoid. These six-legged creatures are able to live in many different types of places, from water and trees to houses and cities. Also, consequently, their activities may be very different: they may be in search of a warm place inside during the cold seasons, they may eat plants, other insects, and even human blood, depending on the species.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Explore Different types of Bugs</h2>
          <p className="text-gray-700 mb-6">
            Water bugs are the natives of the underwater world, and hence, one can find them mostly in places where water flows gently. As for the most distinctive features of these animals, a large size, a flat brown body, and efficient front legs for catching prey are the most associated with them. Water bugs are hardly ever found wandering around the indoors of houses. Instead, they usually live in ponds or swimming pools and may give you a painful bite if you handle them, though these{" "} <b className="text-green-500">
    <Link href="https://www.saynopest.com/giant-water-bug-americas-aquatic-predator">
    giant water bug
    </Link></b>{" "}  bites are usually not dangerous from a medical point of view.
          </p>

          <p className="text-gray-700 mb-6">
          <b className="text-green-500">
    <Link href="https://www.saynopest.com/what-are-stink-bugs-a-complete-guide-for-usa">
    Stink bug
    </Link></b>{" "} , in particular, brown marmorated stink bugs, are invaders that have already occupied almost all areas of the country. And therefore the greatest thing that is known about them is the stinking smell that comes out of them in purting and pressing. It is also important to note that stink bugs neither bite nor sting; moreover, they cannot be recognized as the direct cause of any damage to humans or animals. Nevertheless, they can be dangerous for crops as they can carry a disease and thus lead to a pest problem and a few more symptoms because they can be a source of allergens. Once they are inside the house, you should not expect to find an easy way of eliminating them because they are usually very numerous and are able to enter areas that human beings cannot access.
          </p>

          <p className="text-gray-700 mb-6">
            Bed bugs are a kind of vampiric being that may infest such places as houses, flats, hotels, or any other place where people sleep or rest. These are also master hiders, and they exist in mattresses, furniture, and cracks. They appear at night to feed. <b className="text-green-500">
    <Link href="https://static.saynopest.com/confused-between-bed-bug-bites-vs-mosquito-bites">
    Bed bug bites
    </Link></b>{" "} result in the skin being itchy, developing welts, and possibly allergic reactions; besides that, bed bugs are hard to eradicate once they infest a place.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Harmful Effects and Risks</h2>
          <p className="text-gray-700 mb-6">
            Although not every bug is directly dangerous to humans, the mere presence of the bug can cause serious trouble. The <b className="text-green-500">
    <Link href="https://www.saynopest.com/how-to-get-rid-of-water-bugs-a-complete-guide">
    water bugs
    </Link></b>{" "}  can cause pain when bitten, which might result in swelling or allergic reactions (on rare occasions). Though they are not harmful to humans, stink bug can cause economic damage as they feed on fruits and vegetables, as well as create major annoyance when large groups of them enter homes and emit a strong stench that can leave stains on floors and furniture. Bed bugs are regarded as the worst pests in the whole of the United States because they spread very rapidly and make their presence known by biting and causing some level of disturbance. Infestation by bed bugs may result in anxiety, insomnia, and subsequent infection of the skin from the scratches. Also, they are resilient and capable of concealment, and thus, professional pest control is mandatory in their elimination.
          </p>

          <h2 className="text-2xl font-semibold text-center text-primary mb-2">Types of Bugs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {bugsTypes.map((type, index) => (
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
      </div>
    </>
  );
}
