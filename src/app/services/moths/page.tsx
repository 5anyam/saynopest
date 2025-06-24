import Head from "next/head";
import Image from "next/image";

const cockroachTypes = [
  {
    name: "American Cockroach",
    image: "/types/american-cockroach.jpg",
    description:
      "The American cockroach is one of the largest species commonly found in homes. It has a reddish-brown color and can grow up to 2 inches in length."
  },
  {
    name: "German Cockroach",
    image: "/types/german-cockroach.jpg",
    description:
      "German cockroaches are small, tan to light brown insects with two dark stripes on their back. They reproduce rapidly and are commonly found in kitchens."
  },
  {
    name: "Oriental Cockroach",
    image: "/types/oriental-cockroach.jpg",
    description:
      "Oriental cockroaches are large, dark-colored, and often found in damp environments like basements. They are slower than other types."
  },
  {
    name: "Brown-banded Cockroach",
    image: "/types/brown-banded-cockroach.jpg",
    description:
      "These cockroaches are smaller and lighter in color, with distinct brown bands across their wings. They prefer warm, dry places."
  }
];

export default function MothsTypesPage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.saynopest.com/services/moths" />
    </Head>
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">Moths</h1>

<p className="text-gray-700 mb-6">
  Moths are nocturnal insects similar to butterflies. Attracted to light due to the scales on their wings, they’re commonly seen flying around homes, garden areas, and the edges of forests—often blending in thanks to their plain-colored wings.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">What Moths Look Like and Where You Can Find Them</h2>
<p className="text-gray-700 mb-6">
  Moths in the U.S. are known for their soft bodies, scaly wings, and dull colors. They vary widely in size—from the tiny clothes moth (6–7 mm) to the large Cecropia moth with a 7-inch wingspan. As nighttime fliers, moths are often spotted near doorways, lights, gardens, forests, or even inside homes. As the temperature cools, moths search for warm hiding spots, making urban and suburban homes attractive places to settle.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Where Do Moths Come From?</h2>
<p className="text-gray-700 mb-6">
  Moth behavior depends on the species and life stage. While caterpillars of many species feed on leaves, others—like clothes moth larvae—feed on materials such as wool, silk, feathers, or stored food products like grains. Adult moths usually don’t eat and live only to reproduce. Females lay hundreds of eggs on food sources for larvae. Because moth eggs are small and hidden, infestations can go undetected. Moths often enter homes through open doors, windows, or infested items, making them hard to control indoors.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Why Moth Infestations Are Increasing in the U.S.</h2>
<p className="text-gray-700 mb-6">
  Moth infestations in the U.S. are rising due to the abundance of natural-fiber clothing, stored grains, urban population density, and the ease of moth transfer between living spaces. Their larvae can damage clothing, food, and even building materials, creating costly problems for homeowners. Many people are unaware of how to prevent or remove pantry and clothes moths, which allows infestations to persist and grow.
</p>

<h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Moths</h2>
<p className="text-gray-700">
  The top 5 most common moths in the U.S. include species that infest homes and stored products, making it essential to identify and manage them early.
</p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cockroachTypes.map((type, index) => (
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
</>
  );
}