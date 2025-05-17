import Image from "next/image";

const antTypes = [
  {
    name: "Fire Ant",
    image: "/types/aitronella-ant.jpg",
    description:
      "Known for their aggressive nature and painful stings, fire ants build large mound nests outdoors and can swarm when disturbed. They're common in the southern U.S."
  },
  {
    name: "Twig Ant",
    image: "/types/grease-ant.jpg",
    description:
      "Twig ants are often found nesting in dead branches and twigs. While not typically aggressive, they can invade homes near wooded areas or gardens."
  },
  {
    name: "Acrobat Ant",
    image: "/types/argentine-ant.jpg",
    description:
      "Named for their unique habit of raising their abdomen over their head when threatened, acrobat ants nest in decaying wood and sometimes inside walls."
  },
  {
    name: "Army Ant",
    image: "/types/army-ant.jpg",
    description:
      "Army ants are nomadic and known for their massive swarms. While less common in the U.S., they pose a risk due to their aggressive foraging behavior."
  },
  {
    name: "Pavement Ant",
    image: "/types/carpenter-ant.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease."
  }
];

export default function AntTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Ants
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          From your kitchen counter to your yard, ants can be found just about anywhere. Discover the most common types of ants in the U.S. and the challenges they bring.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Ants</h2>
          <p className="text-gray-700 leading-relaxed">
            Ants are small yet incredibly resilient insects that live in highly organized colonies. Attracted to food, water, and shelter, they are experts in infiltration, often forming visible trails as they invade homes.
            <br /><br />
            Despite their tiny size, ants are powerful—able to lift up to 50 times their body weight. With over 12,000 known species globally, including several problematic ones in the U.S., they are a force to be reckoned with. A small infestation can escalate quickly, especially when scout ants leave pheromone trails that invite the whole colony.
            <br /><br />
            Whether you are dealing with biting fire ants or nuisance pavement ants, early detection and control are key to preventing large infestations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {antTypes.map((type, index) => (
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
              <div className="p-4 text-center">
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
