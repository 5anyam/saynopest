import Image from "next/image";

const termiteTypes = [
  {
    name: "Subterranean Termites",
    image: "/types/subterranean-termites.jpg",
    description: "These termites build large underground colonies and require moist environments. They commonly enter homes through soil contact or foundation cracks."
  },
  {
    name: "Formosan Termites",
    image: "/types/formosan-termites.jpg",
    description: "Highly aggressive and destructive, Formosan termites can build nests underground or in walls and attics if moisture is available."
  },
  {
    name: "Drywood Termites",
    image: "/types/drywood-termites.jpg",
    description: "These termites live in dry wood and don't require contact with soil. They infest wooden furniture, walls, and framing above ground."
  },
  {
    name: "Dampwood Termites",
    image: "/types/dampwood-termites.jpg",
    description: "Larger in size, dampwood termites prefer moist, decaying wood and are commonly found in areas with high humidity or water damage."
  }
];

export default function TermiteTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Termites
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Termites are silent but destructive pests that can cause serious structural damage to homes. Identifying the type of termite is key to controlling infestations effectively.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Why Termites Are a Serious Concern</h2>
          <p className="text-gray-700 leading-relaxed">
            Termites are small, soft-bodied insects typically measuring between 1/8 inch to 1 inch depending on species and caste. Their coloring varies from pale cream or white (in worker termites) to darker browns and even black in reproductive swarmers. They have straight, beaded antennae and straight waists, with swarmers displaying two equal pairs of wings.
            <br /><br />
            Termite habitats differ based on the type: Subterranean termites live in moist soil and enter structures through foundation gaps, drywood termites nest in dry wood above ground, and Formosan termites can build nests underground or within walls and attics if moisture is available. All termites feed primarily on cellulose-based materials like wood, paper, and plant debris, staying hidden as they cause damage.
            <br /><br />
            Known as “silent destroyers,” termites can go undetected for long periods while consuming a home from the inside out. In the U.S. alone, termites are responsible for damaging over 600,000 homes annually, leading to billions in repair and control costs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {termiteTypes.map((type, index) => (
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
