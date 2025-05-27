import Image from "next/image";

const tickTypes = [
  {
    name: "Blacklegged Tick (Deer Tick)",
    image: "/types/blacklegged-tick.jpg",
    description: "Commonly found in the Northeast and Upper Midwest, these ticks are the primary vectors of Lyme disease. They are small, dark-colored, and feed on both animals and humans."
  },
  {
    name: "Lone Star Tick",
    image: "/types/lone-star-tick.jpg",
    description: "Easily recognized by the single white dot on the female's back, this tick is aggressive and known to transmit ehrlichiosis and Southern tick-associated rash illness (STARI)."
  },
  {
    name: "American Dog Tick",
    image: "/types/american-dog-tick.jpg",
    description: "Widespread across the U.S., this tick prefers dogs and humans as hosts. It can transmit Rocky Mountain spotted fever and tularemia."
  },
  {
    name: "Brown Dog Tick",
    image: "/types/brown-dog-tick.jpg",
    description: "Often found indoors, especially in kennels, this tick prefers dogs but can bite humans. It transmits canine ehrlichiosis and babesiosis."
  },
  {
    name: "Gulf Coast Tick",
    image: "/types/gulf-coast-tick.jpg",
    description: "Found along the southeastern and Gulf coasts, this tick transmits Rickettsia parkeri rickettsiosis, a form of spotted fever."
  }
];

export default function TickTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Ticks
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Ticks are dangerous blood-feeding arachnids that can transmit serious diseases like Lyme disease and Rocky Mountain spotted fever. Learn about the most common tick types found in the U.S.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Ticks</h2>
          <p className="text-gray-700 leading-relaxed">
            Ticks are small, oval-shaped arachnids ranging in size from a sesame seed to an apple seed. With eight legs and piercing mouthparts, they latch onto hosts — humans, pets, or wildlife — to feed on blood.
            <br /><br />
            Ticks are often found in wooded areas, tall grass, and shrubs, lying in wait for a passing host. They require high humidity to survive and can go for months without a meal by hibernating in shaded environments.
            <br /><br />
            With warming climates and changing habitats, ticks have spread to new regions, increasing the risk of tick-borne illnesses like Lyme disease, anaplasmosis, and spotted fevers. Quick removal after bites and targeted pest control can reduce these threats effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tickTypes.map((type, index) => (
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
