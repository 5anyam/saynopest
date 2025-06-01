import Image from "next/image";

const earwigTypes = [
  {
    name: "European Earwig (Forficula auricularia)",
    image: "/types/european-earwig.jpg",
    description:
      "The most common species in the U.S., known for their prominent pincers. They are nocturnal, thrive in damp areas, and often enter homes in search of moisture and food."
  },
  {
    name: "Ring-legged Earwig (Euborellia annulipes)",
    image: "/types/ring-legged-earwig.jpg",
    description:
      "This dark-colored, wingless earwig species is recognizable by the pale rings on its legs. It’s found mostly in southern regions and prefers moist indoor areas."
  },
  {
    name: "Striped or Riparian Earwig (Labidura riparia)",
    image: "/types/striped-earwig.jpg",
    description:
      "Often found near rivers and streams, this earwig has a striped appearance and stronger predatory behavior. It feeds on other insects and plant debris."
  },
  {
    name: "Maritime Earwig (Anisolabis maritima)",
    image: "/types/maritime-earwig.jpg",
    description:
      "Typically found along coastal areas, this large, dark-colored earwig prefers moist, sandy environments. It lacks wings and is a strong scavenger and predator."
  }
];

export default function EarwigTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto mb-16">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">Earwigs</h1>

<p className="text-gray-700 mb-6">
  Recognized by their pincers and nocturnal behavior, earwigs are omnivorous insects that thrive in damp environments. Learn about the common species found in the U.S.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Earwigs Uncovered: Identifying the Pincer-Tailed Insect</h2>
<p className="text-gray-700 mb-6">
  Earwigs are easily identified by the pincers, or cerci, located at the end of their abdomen. Adults measure about 1.3 to 2.5 cm in length and are typically dark brown or reddish-brown, sometimes with lighter or striped bodies compared to their younger counterparts. Although most earwigs have wings, they rarely use them to fly.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Where Earwigs Hide and What They Eat</h2>
<p className="text-gray-700 mb-6">
  Being nocturnal, earwigs tend to hide during the day in damp, dark places such as under rocks, mulch, leaf litter, or logs. At night, they become active and feed on a wide variety of materials, including decomposing plant matter, live plants, fruits, flowers, and even other insects. This makes them both scavengers and occasional predators.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">When Earwigs Invade Your Home: Habitat & Danger</h2>
<p className="text-gray-700 mb-6">
  Earwigs often travel in small groups and are usually found near moist areas inside homes, such as bathrooms, damp basements, and overly wet kitchens. Their thigmotactic behavior—seeking out close contact with surfaces—draws them to these environments. While earwigs are not dangerous to humans, their presence can cause discomfort, and in large numbers, they may damage garden plants and spoil stored food.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Earwig Invasion in the USA</h2>
<p className="text-gray-700 mb-6">
  Earwig infestations are becoming more common across the U.S. due to ideal conditions created by warm, wet climates. Frequent rainfall and high humidity promote breeding and survival, contributing to rising populations. Without proper control, large infestations can lead to food contamination, soil disruption, and environmental imbalance.
</p>

<h2 className="text-2xl font-semibold text-primary text-center mb-2">Types of Earwigs</h2>
<p className="text-gray-700">
  Discover the most common types of earwigs found in the U.S. and learn what makes each type unique in their natural and indoor habitats.
</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {earwigTypes.map((type, index) => (
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
