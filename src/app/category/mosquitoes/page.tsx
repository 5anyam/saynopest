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
      <h1 className="text-2xl text-center font-bold text-primary mb-4">Mosquitoes</h1>

<p className="text-gray-700 mb-6">
  Mosquitoes are small insects that can fly. They bite to suck animal blood, and their bites can be itchy and sometimes spread serious diseases like dengue or malaria. It is important to take precautions to keep them away.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance</h2>
<p className="text-gray-700 mb-6">
  Mosquitoes have a distinct body shape with a large lower abdomen, narrow upper body, and one pair of wings. Female mosquitoes have a specialized mouthpart that allows them to pierce skin and feed on the blood of humans and animals.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
<p className="text-gray-700 mb-6">
  Mosquitoes prefer warm, damp areas and often breed in standing water such as birdbaths, clogged drains, gutters, ponds, and even water-filled containers. These environments provide the ideal conditions for laying eggs and growing larvae.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Feeding Behavior</h2>
<p className="text-gray-700 mb-6">
  Both male and female mosquitoes feed on plant nectar, but only females bite to extract blood. This blood provides essential proteins needed for egg development. Mosquitoes are generally active during the early morning and evening, though some species may also bite during the day.
</p>

<p className="text-gray-700 mb-6">
  Mosquitoes are drawn to carbon dioxide, body heat, and sweat, which is why they often target humans. Increasing mosquito populations and mosquito-borne diseases are a growing concern globally and in the U.S., mainly due to:
</p>
<ul className="list-disc list-inside text-gray-700 mb-6">
  <li>Abundant breeding sites</li>
  <li>Climatic changes</li>
  <li>Unclean surroundings</li>
</ul>

<p className="text-gray-700 mb-6">
  These factors contribute to the spread of diseases like West Nile virus, Zika, dengue, and chikungunya.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Common Mosquito Species in America</h2>
<ul className="list-disc list-inside text-gray-700 mb-6">
  <li>Yellow Fever Mosquito</li>
  <li>Asian Tiger Mosquito</li>
  <li>Northern House Mosquito</li>
  <li>Southern House Mosquito</li>
  <li>Common Malaria Mosquito</li>
</ul>

<h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Mosquitoes</h2>
<p className="text-gray-700">
  From silent biters to buzzing nuisances, explore the top mosquito species in the U.S. and how their appearances and behaviors differ.
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
  );
}
