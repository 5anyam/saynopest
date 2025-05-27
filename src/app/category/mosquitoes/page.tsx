import Image from "next/image";

const mosquitoTypes = [
  {
    name: "Aedes Mosquitoes",
    image: "/types/mosquitoes/aedes-mosquitoes.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime."
  },
  {
    name: "Anopheles Mosquito",
    image: "/types/mosquitoes/anopheles-mosquito.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika."
  },
  {
    name: "Culex Mosquitoes",
    image: "/types/mosquitoes/culex-mosquitoes.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  }
];

export default function MosquitoTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Mosquitoes
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Mosquitoes are common pests in the U.S. known for their buzzing presence and itchy bites. While both male and female mosquitoes feed on nectar, only females bite to obtain protein for egg development.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Mosquitoes</h2>
          <p className="text-gray-700 leading-relaxed">
            Mosquitoes have long lower bodies, narrow upper bodies, and a single pair of wings. Female mosquitoes have specialized mouthparts to extract blood from humans and animals. These insects breed in warm, damp environments like clogged drains, stagnant ponds, and forgotten containers.
            <br /><br />
            They are most active in the mornings and evenings, although some species bite during the day. Attracted by body warmth, carbon dioxide, and sweat, mosquitoes find humans an easy target.
            <br /><br />
            Climate change, dirty surroundings, and the abundance of breeding grounds have led to an increase in mosquito infestations—and with it, the risk of disease transmission, including Zika, West Nile, dengue, and chikungunya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mosquitoTypes.map((type, index) => (
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
