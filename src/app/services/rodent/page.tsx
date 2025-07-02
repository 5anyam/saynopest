import Head from "next/head";
import Image from "next/image";

const miceTypes = [
  {
    name: "Deer Mouse",
    image: "/types/rodents/deer-mouse.jpg",
    description: "These termites build large underground colonies and require moist environments. They commonly enter homes through soil contact or foundation cracks."
  },
  {
    name: "Field Mouse",
    image: "/types/rodents/field-mouse.jpg",
    description: "Highly aggressive and destructive, Formosan termites can build nests underground or in walls and attics if moisture is available."
  },
  {
    name: "House Mouse",
    image: "/types/rodents/house-mouse.jpg",
    description: "These termites live in dry wood and don't require contact with soil. They infest wooden furniture, walls, and framing above ground."
  },
  {
    name: "White Footed",
    image: "/types/rodents/white-footed-mouse.jpg",
    description: "Larger in size, dampwood termites prefer moist, decaying wood and are commonly found in areas with high humidity or water damage."
  }
];

export default function RodentsPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/rodent" />
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-2xl text-center font-bold text-primary mb-4">Rodents</h1>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Appearance</h2>
          <p className="text-gray-700 mb-6">
            Rodents are small to medium-sized mammals, and their most noticeable feature is their
            continuously growing, very sharp incisors. They use their teeth for gnawing food,
            digging burrows, and self-defense. In the U.S., rodents come in different sizes and
            colors, typically having compact bodies, short legs, and bushy or bare tails. Fur colors
            vary from brown, gray, and black to lighter shades depending on the species. Rodents are
            commonly found in urban areas, rural fields, forests, and wetlands.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Rodent Behavior</h2>
          <p className="text-gray-700 mb-6">
            Rodents are nocturnal, sleeping during the day and becoming active at night. Their diet
            includes seeds, plants, insects, and leftover food from kitchens. They breed rapidly,
            which contributes to fast population growth. Their exceptional scavenging abilities help
            them survive in a variety of environments without running out of food.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Types of Rodent Infestation</h2>
          <p className="text-gray-700 mb-6">
            Various types of rodents can invade homes easily, making them a major concern. Rodent
            problems affect over 16 million homes and around 38 million people across the U.S.
            Infestations are especially common in rural areas, colder regions, and older or darker
            homes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Need for Rodent Control</h2>
          <p className="text-gray-700 mb-6">
            Rodents can carry and spread harmful diseases such as Hantavirus, Leptospirosis, and
            Salmonella. Their constant gnawing on wires can damage structures and even cause fire
            hazards due to exposed electrical wiring. Effective rodent control is essential to
            maintain a safe, clean, and healthy living environment in the U.S.
          </p>

          <h2 className="text-2xl font-semibold text-primary text-center mb-2">Types of Rodents</h2>
          <p className="text-gray-700">
            There are several types of rodents found across the United States. Recognizing them is
            the first step in determining the best way to eliminate them and prevent future
            infestations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {miceTypes.map((type, index) => (
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

