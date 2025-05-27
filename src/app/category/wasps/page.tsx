import Image from "next/image";

const waspTypes = [
  {
    name: "Yellowjackets",
    image: "/types/yellowjacket.jpg",
    description: "Aggressive social wasps that live in colonies and are known for their painful stings. They often build nests underground or in wall cavities."
  },
  {
    name: "Paper Wasps",
    image: "/types/paper-wasp.jpg",
    description: "Slender with long legs and brownish bodies with yellow markings. They build open, umbrella-shaped nests under eaves and ledges."
  },
  {
    name: "Bald-faced Hornet",
    image: "/types/bald-faced-hornet.jpg",
    description: "A large black and white wasp that builds large paper nests in trees and on buildings. Known for being extremely aggressive near their nests."
  },
  {
    name: "European Hornet",
    image: "/types/european-hornet.jpg",
    description: "Larger than most wasps, with brown and yellow markings. They can sting repeatedly and typically build nests in hollow trees or walls."
  },
  {
    name: "Mud Daubers",
    image: "/types/mud-dauber.jpg",
    description: "Solitary wasps that build tube-like nests from mud. They are generally non-aggressive and help control spider populations."
  },
  {
    name: "Digger Wasps",
    image: "/types/digger-wasp.jpg",
    description: "Ground-nesting wasps that dig burrows in sandy soil. They are solitary and prey on insects to feed their larvae."
  },
  {
    name: "Cicada Killer Wasps",
    image: "/types/cicada-killer.jpg",
    description: "Large wasps that paralyze cicadas and bury them as food for their young. They are not typically aggressive toward humans."
  },
  {
    name: "Blue-winged Wasp",
    image: "/types/blue-winged-wasp.jpg",
    description: "Recognizable by their metallic blue wings and reddish-orange body. They help control beetle larvae populations."
  }
];

export default function WaspTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
  <h1 className="text-3xl text-center font-bold text-primary mb-4">Wasp</h1>

  <p className="text-gray-700 mb-6">
    Wasps are widespread stinging insects in the United States, easily recognizable by their long, slender bodies, narrow waists, and bold black, yellow, or reddish markings.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Identification and Nesting Habits of Wasps</h2>
  <p className="text-gray-700 mb-6">
    Wasps typically have long, slender bodies with narrow waists and striking coloration—often black or brown with yellow or reddish stripes. Most adult wasps range from 5/8 inch to over an inch in length, depending on the species. Their wings are long and pendulum-like during flight. Wasps construct nests from chewed wood fibers mixed with saliva and often build them in sheltered areas such as:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Porch ceilings</li>
    <li>Attic rafters</li>
    <li>Sheds</li>
  </ul>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">What Do Wasps Eat?</h2>
  <p className="text-gray-700 mb-6">
    Adult wasps feed on nectar and sweet substances, while larvae are fed a protein-rich diet consisting of insects and spiders brought by worker wasps. Species like paper wasps, yellowjackets, and hornets are social and may become aggressive when their nests are threatened. While wasps play a role in pest control and pollination, their stings can be painful and dangerous—especially for individuals with allergies.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Wasp Infestations: Causes, Risks, and the Need for Professional Control</h2>
  <p className="text-gray-700 mb-6">
    Wasp infestations are common across the U.S. due to abundant nesting locations around buildings and readily available food sources such as trash, sugary beverages, and insects. Warm summers encourage larger colonies, which increases territorial behavior and aggression. Since wasps can sting multiple times and are highly defensive of their nests, professional pest control is often necessary to ensure safety and prevent future infestations.
  </p>

  <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Wasps</h2>
  <p className="text-gray-700">
    Various types of wasps are found across the United States, each with its own appearance, behavior, and nesting style. Identifying the type of wasp can help guide effective control strategies.
  </p>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {waspTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
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
          ))}
        </div>
      </div>
  );
}
