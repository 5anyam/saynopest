import Image from "next/image";

const silverfishTypes = [
  {
    name: "Common Silverfish",
    image: "/types/common-silverfish.jpg",
    description: "Recognized by their silvery, carrot-shaped bodies and fast movements. They are frequently found in damp and dark household areas."
  },
  {
    name: "Urban Silverfish",
    image: "/types/urban-silverfish.jpg",
    description: "Adapted to city environments and can survive in lower humidity areas compared to other species. Often found in apartments and offices."
  },
];

export default function SilverfishTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Silverfish
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Silverfish are tiny, wingless insects known for their silvery color and swift, fish-like movements. They are commonly found in damp, dark areas of the home.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Why Silverfish Are a Concern</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverfish are typically 1/2 to 3/4 inches long, flat, and tapered like a carrot, with three tail-like projections at the rear and long antennae at the front. They prefer dark, damp areas like bathrooms, basements, attics, kitchens, and laundry rooms where they remain hidden during the day and become active at night.
            <br /><br />
            As herbivores, silverfish feed on carbohydrates and protein-rich items including paper, book bindings, wallpaper, glue, cardboard, and textiles. They can even consume dried foods like flour and pasta and sometimes other dead insects. Though they don’t bite or spread disease, they can seriously damage books, clothes, food items, and valuable documents.
            <br /><br />
            Infestations are particularly common in humid regions of the U.S., such as the Southeast, Midwest, and coastal areas. Their presence can also trigger allergic reactions in sensitive individuals due to their shed scales and waste. Eliminating silverfish is essential to protect your belongings and maintain a hygienic environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {silverfishTypes.map((type, index) => (
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
    </div>
  );
}
