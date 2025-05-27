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
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Earwigs
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Recognized by their pincers and nocturnal behavior, earwigs are omnivorous insects that thrive in damp environments. Learn about the common species found in the U.S.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Earwigs</h2>
          <p className="text-gray-700 leading-relaxed">
            Earwigs are slender, dark-colored insects with distinctive pincers (cerci) at the rear of their abdomen. Despite having wings, they rarely fly and prefer to stay hidden during the day. At night, they emerge to feed on decomposing plant matter, fruits, flowers, and even small insects—making them both scavengers and predators.
            <br /><br />
            They are sociable insects, often found in large groups, particularly in moist and warm areas. Inside homes, they frequent bathrooms, basements, and kitchens. Outdoors, they nest under rocks, mulch, and leaf litter. Although not dangerous to humans, large populations can damage gardens and stored foods, and their sudden presence can cause panic.
            <br /><br />
            Warm, rainy weather across the U.S. creates ideal breeding conditions, resulting in rising infestation rates. Managing earwig populations through proper moisture control and pest prevention measures is crucial to avoid long-term problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </div>
  );
}
