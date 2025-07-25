//import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const antTypes = [
  {
    name: "Fire Ant",
    image: "/types/grease-ants.jpg",
    description:
      "Twig ants are often found nesting in dead branches and twigs. While not typically aggressive, they can invade homes near wooded areas or gardens.",
      link:"https://www.saynopest.com/fire-ants-vs-red-ants-saynopest/"
  },
  {
    name: "Twig Ant",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/twig-ant.jpg",
    description:
      "Twig ants are often found nesting in dead branches and twigs. While not typically aggressive, they can invade homes near wooded areas or gardens.",
      link:"https://www.saynopest.com/elongated-twig-ants-saynopest/"
  },
  {
    name: "Argentine Ant",
    image: "https://static.saynopest.com/wp-content/uploads/2025/07/ants.jpg",
    description:
      "Army ants are nomadic and known for their massive swarms. While less common in the U.S., they pose a risk due to their aggressive foraging behavior.",
      link:"https://www.saynopest.com/california-argentine-ants-saynopest/"
  },
  {
    name: "Carpenter Ant",
    image: "/types/carpenter-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
      link:"https://www.saynopest.com/carpenter-ants-vs-black-ants-saynopest/"
  },
  {
    name: "Pavement Ant",
    image: "/types/pavement-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
      link:"https://www.saynopest.com/how-to-get-rid-of-pavement-ants-permanently-saynopest"
  },
  {
    name: "Army Ant",
    image: "/types/army-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
      link:"https://www.saynopest.com/army-ant-bites-saynopest/"
  }
];

export default function AntTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Ants
        </h1>
  <p className="text-2xl font-bold text-gray-800 mb-4">From your kitchen counter to your yard, ants can be found just about anywhere.</p>
  <p className="text-gray-700 mb-6">
    Discover the most common types of ants in the U.S. and the challenges they bring.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Do Ants Keep Coming Back? </h2>
  <p className="text-gray-700 mb-6">
    Did you ever go to your bedroom and suddenly see an army of ants in bed marching to a forgotten crumb? You’re not the only one!
    This invasion of ants is a huge problem of American homeowners. No matter if it’s grub of sugar ants in your pantry, <b className="text-green-500">
    <Link href="https://www.saynopest.com/ants-out-ways-on-how-to-get-rid-of-fire-ants-saynopest">
      fire ants 
    </Link>
  </b> in your yard, or always the <b className="text-green-500">
    <Link href="https://www.saynopest.com/do-carpenter-ants-eat-wood-like-termites-saynopest">
      carpenter ants
    </Link>
  </b> coming from nowhere to sneak into your walls, these annoying creatures are very good
    at finding a way in.  
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">How One Ant Leads to Hundreds? </h2>
  <p className="text-gray-700 mb-6">
    Ants are very skilled in finding food, water and shelter for themselves. A few crumbs, a leaking faucet, or even the pets
    dinner bowl can get their interest. And after they have entered the house, the trail that they leave will let the rest of the
    colony know their way. Before you realize it, a small inconvenience can turn into a huge infestation. 
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Ant Facts You Might Need to Know </h2>
  <p className="text-gray-700">
    Although ants are small, but they can be extremely dangerous or even deadly sometimes. There are no fewer than 12,000 known
    species of ants spread all over the world, and it is said that there could likely be about 22,000 existing species. Ants are
    the record holders when it comes to strength. They are so tiny yet so mighty that they can lift 10-50 times more than their
    body weight. They are insects of a social nature appearing as colonies and having very advanced systems of life organization.
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:grid-cols-4 gap-6">
          {antTypes.map((type, index) => (
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
      </div>
  );
}
