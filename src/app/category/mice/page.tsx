import Image from "next/image";

const miceTypes = [
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

export default function MiceTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Mice</h1>

  <p className="text-gray-700 mb-6">
    Mice reproduce rapidly, with a single female capable of producing up to 120 offspring per year, leading to fast infestations.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance</h2>
  <p className="text-gray-700 mb-6">
    Mice have small, compact bodies, large ears, and long, slender tails. Their body length ranges from 2.5 to 4 inches, with tails that can be equal to or longer than the body. Fur color typically ranges from gray-brown to red-brown, with lighter-colored bellies. Their sharp-clawed feet make them excellent climbers and diggers.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Reproduction Rate</h2>
  <p className="text-gray-700 mb-6">
    Mice breed quickly and prolifically. A single female can produce 5–10 litters annually, each containing 6–12 offspring, contributing to rapid infestation if left unchecked.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">What Do Mice Eat?</h2>
  <p className="text-gray-700 mb-6">
    Mice are omnivores, primarily feeding on grains, seeds, and fruits. In human environments, they readily consume food scraps, pantry items, and pet food. Their scavenging habits often lead to contamination of food supplies.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks Caused Due to Mice Presence in Homes</h2>
  <p className="text-gray-700 mb-6">
    Approximately 11.6% of U.S. households report rodent issues yearly, impacting over 16 million homes. Infestations are more common in colder regions like the Midwest and Northeast as mice seek indoor warmth. States like Vermont, South Dakota, and Pennsylvania report higher occurrences due to factors such as aging housing and extreme weather. Mice pose serious health risks including hantavirus, salmonella, and Lyme disease transmitted through droppings, urine, and parasites. Their presence can also exacerbate allergies and asthma, especially in children.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Types of Mice</h2>
  <p className="text-gray-700">
    The United States is home to various types of mice, each differing in appearance and behavior. Understanding the type of mouse helps in choosing the appropriate control method.
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
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
}
