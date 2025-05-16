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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Wasps
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Wasps are widespread stinging insects in the United States, easily recognizable by their long, slender bodies, narrow waists, and bold black, yellow, or reddish markings.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Why Wasps Are a Serious Concern</h2>
          <p className="text-gray-700 leading-relaxed">
            Wasps are known to nest in places like porch ceilings, attic rafters, and sheds, using chewed wood and saliva to create their homes. Adults feed on nectar and sweets, while young wasps are given proteins like insects and spiders. Some wasps, including paper wasps, yellowjackets, and hornets, live in large, social colonies and become extremely aggressive when defending their nests.
            <br /><br />
            While wasps play a vital ecological role by pollinating flowers and controlling insect populations, they can become a threat due to their painful stings—especially for those allergic to them. Wasp infestations are common due to the abundance of ideal nesting spots around homes and easy access to sugary drinks, garbage, and insects.
            <br /><br />
            During long warm summers, colonies grow larger and wasps become more aggressive as they fight over food and defend nests. Unlike bees, wasps can sting multiple times and are very territorial. Professional wasp pest control services are often necessary to safely remove nests and prevent reinfestation.
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
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
