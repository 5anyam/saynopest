import Image from "next/image";

const tickTypes = [
  {
    name: "Blacklegged Tick (Deer Tick)",
    image: "/blacklegged-tick.jpg",
    description: "Commonly found in the Northeast and Upper Midwest, these ticks are the primary vectors of Lyme disease. They are small, dark-colored, and feed on both animals and humans."
  },
  {
    name: "Lone Star Tick",
    image: "/lone-star-tick.jpg",
    description: "Easily recognized by the single white dot on the female's back, this tick is aggressive and known to transmit ehrlichiosis and Southern tick-associated rash illness (STARI)."
  },
  {
    name: "Rocky Mountain Wood",
    image: "/rocky-mountain-wood-tick.jpg",
    description: "Widespread across the U.S., this tick prefers dogs and humans as hosts. It can transmit Rocky Mountain spotted fever and tularemia."
  },
  {
    name: "Brown Dog Tick",
    image: "/brown-dog-tick.jpg",
    description: "Often found indoors, especially in kennels, this tick prefers dogs but can bite humans. It transmits canine ehrlichiosis and babesiosis."
  }
];

export default function TickTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto mb-8">
  <h1 className="text-2xl font-bold text-primary mb-4 text-center">Ticks</h1>

  <p className="text-gray-700 mb-6">
    Ticks live in grass and wooded areas and feed on blood—from your pets or even yourself. Though small, their bites can transmit serious diseases. That’s why its crucial to check for ticks after spending time outdoors.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance and Behavior of Ticks</h2>
  <p className="text-gray-700 mb-6">
    Ticks are parasitic arachnids and among the most dangerous blood-feeding pests in the U.S. Adult ticks range in size from 1/8 inch (like a sesame seed) to 1/4 inch (like an apple seed), depending on species and life stage. Their bodies are oval and flattened, equipped with eight legs and a specialized head for piercing skin and feeding on blood.
    <br /><br />
    Commonly found in wooded areas, tall grass, and shrubs, ticks perch on vegetation waiting for a host—human, pet, or wildlife—to pass by. They feed solely on blood and require it to grow through their life stages: larva, nymph, and adult. Ticks can survive for months without feeding by staying in humid, shaded environments.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks</h2>
  <p className="text-gray-700 mb-6">
    Ticks pose a significant public health risk in the U.S. States with suitable climates for ticks report high cases of diseases like Lyme disease, Rocky Mountain spotted fever, and anaplasmosis. Ticks can transmit harmful pathogens within just 24–48 hours of attaching to a host.
  </p>

  <h2 className="text-2xl font-semibold text-primary text-center mb-2">Types of Ticks</h2>
  <p className="text-gray-700">
    Despite their small size, ticks come in various species, each with unique traits, dangers, and survival tactics. Identifying the specific type of tick can help guide appropriate prevention and treatment efforts.
  </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
  );
}
