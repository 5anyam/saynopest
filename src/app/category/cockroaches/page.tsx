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

export default function CockroachTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Cockroaches
        </h1>
       

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          
          <p className="text-gray-700 leading-relaxed">
            Cockroach are more than a nuisance to create in the peaceful recesses of our homes—they pose actual threats to indoor health. Learn how roaches continue to exist within American households and why they can be such a serious threat to your health and the cleanliness of your residence. Cockroaches are unmatched when it comes to flexibility and persistence in comparison with any other household pest, with many species doing well in home environments. Although German cockroaches may outnumber others, such as the American and Oriental Cockroaches this is a common cockroach across the U.S, with reports usually being made within homes.
            <br /><br />
            American roaches are the most prevalent species and can grow up to 1.5-2 inches long and have reddish-brown bodies, on top of which they have a prominent yellowish patch at the end of the head. German cockroaches, for example, are smaller, 0.5–0.6 in length, and have light brown bodies bearing a pair of dark stripes on their backs. These insects are primarily a nocturnal species, seeking refuge in dark, warm, and moist areas like under the kitchen fixtures, behind appliances, within a wall’s crevices; when dormant during broad day.
            <br /><br />
            Their omnivorous diet includes food waste, grease, and starch, and even sometimes non-food items such as book bindings, wallpaper glue, and human hair. Their flexibility enables them to survive in areas ranging from crowded city sewers to the more home-like basements of residences, and even in public restaurants.
            <br /><br />
            Cockroach problems are very common in the U.S. due to the country’s varied climates, dense urban populations, and abundant food waste. Cockroaches are mostly found in the Southeast across the United States. Homeowners inadvertently risk bringing cockroaches into their homes through store bags, moving, or when introducing cardboard boxes. It is necessary to get rid of the home with cockroaches because they are a danger to human health. Salmonella, E. coli, and dysentery pathogens adhere to food and surfaces. Pieces of cockroach excrement, cast-off skin, and salivary glands cause asthma, especially in children, because an astounding 63% of U.S. homes indeed boast the allergens.
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
    </div>
  );
}