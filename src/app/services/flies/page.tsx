import Head from "next/head";
import Image from "next/image";

const fliesTypes = [
  {
    name: "Black Fly",
    image: "/types/flies/black-fly.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime."
  },
  {
    name: "Blow Fly",
    image: "/types/flies/blow-fly.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika."
  },
  {
    name: "Bottle Fly",
    image: "/types/flies/bottle-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },
  {
    name: "Cluster Fly",
    image: "/types/flies/cluster-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },{
    name: "Crane Fly",
    image: "/types/flies/crane-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },
  {
    name: "Deer Fly",
    image: "/types/flies/deer-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },
  {
    name: "Gnat Fly",
    image: "/types/flies/gnat.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },
  {
    name: "Horn Fly",
    image: "/types/flies/horn-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  }
];

export default function FliesTypesPage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.saynopest.com/services/flies" />
    </Head>
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto mb-14">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">Flies</h1>

<p className="text-gray-700 mb-6">
  Flies are commonly found near leftover food, trash, and dirty places. Though they don’t bite, they can carry germs and spread diseases. Maintaining cleanliness is one of the best ways to prevent fly infestations.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance of Flies</h2>
<p className="text-gray-700 mb-6">
  Flies are among the most common pests in the United States. They are typically small to medium-sized, measuring between 1/8 to 1/4 inch in length. Their bodies are gray or black and may be striped. Most flies have hairy bodies, a single pair of transparent wings, and large, noticeable red eyes.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat and Population Growth</h2>
<p className="text-gray-700 mb-6">
  Flies thrive in various environments, from cities to rural areas, and are particularly drawn to places rich in organic material. They feed using specialized mouthparts that either soak up liquids or liquefy solids using digestive fluids. Common food sources include decaying food, garbage, animal waste, and sugary substances.
</p>
<p className="text-gray-700 mb-6">
  Fly populations have surged in the U.S. due to warm, humid weather, increased food waste, and an abundance of breeding locations in both residential and commercial areas.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Importance of Control</h2>
<p className="text-gray-700 mb-6">
  Controlling flies is essential not just for comfort but also for public health. The ideal conditions in many parts of the U.S.—ample food sources and breeding grounds—make flies a persistent problem. These pests can carry and transmit diseases by contaminating food and surfaces with pathogens they pick up from garbage and waste.
</p>

<h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Flies</h2>
<p className="text-gray-700">
  From everyday household nuisances to agricultural pests, different fly species have varying impacts on ecosystems and human health. Understanding them is key to effective prevention and control.
</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fliesTypes.map((type, index) => (
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
      </>
  );
}
