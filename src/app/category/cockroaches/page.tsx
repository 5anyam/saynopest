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

export default function CockroachPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-10">
          Types of Cockroaches
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-14">
          Cockroaches are one of the most resilient pests in the world. Understanding different types can help in identifying and controlling infestations effectively.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
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
              <div className="p-5">
                <h2 className="text-xl font-semibold text-amber-700 mb-2">
                  {type.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
