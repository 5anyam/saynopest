import Image from "next/image";

const centipedeTypes = [
  {
    name: "House Centipede",
    image: "/types/centipede/house-centipede.jpg",
    description:
      "Easily recognized by its long legs and fast movement, this species is commonly found in basements and bathrooms. It preys on insects and is generally harmless to humans."
  },
  {
    name: "Giant Desert Centipede",
    image: "/types/centipede/giant-desert-centipede.jpg",
    description:
      "One of the largest centipedes in the U.S., growing up to 8 inches. Found in the Southwest, it can deliver a painful bite but is not deadly."
  },
  {
    name: "Eastern Bark Centipede",
    image: "/types/centipede/eastern-bark-centipede.jpg",
    description:
      "Often found under tree bark and in moist logs. These reddish-brown centipedes are fast, aggressive hunters and common in wooded regions."
  },
  {
    name: "Eastern Red Centipede",
    image: "/types/centipede/eastern-red-centipede.jpg",
    description:
      "A medium-sized reddish centipede often found in gardens and moist indoor spaces. It feeds on insects and is usually harmless to humans."
  },
  {
    name: "Diamondback Soil Centipede",
    image: "/types/centipede/diamondback-soil-centipede.jpg",
    description:
      "A soil-dwelling centipede with a patterned back. It’s blind and slow-moving, preying on small invertebrates in damp environments."
  },
  {
    name: "Brown Centipede",
    image: "/types/centipede/brown-centipede.jpg",
    description:
      "Small and dark brown, this species is often found indoors in moist areas. It avoids light and is harmless but may cause concern due to its appearance."
  },
  {
    name: "Common Cryptops",
    image: "/types/centipede/common-cryptops.jpg",
    description:
      "This small centipede lacks eyes and prefers dark, damp places. Its bite can cause mild irritation but poses no serious threat to humans."
  }
];

export default function CentipedeTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Centipedes
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Centipedes are fast-moving, multi-legged arthropods that thrive in damp, dark environments. Though intimidating in appearance, they help control other pests and are generally not harmful to humans.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Centipedes</h2>
          <p className="text-gray-700 leading-relaxed">
            Centipedes are elongated arthropods with a segmented body and a pair of legs per segment. Depending on the species, they can range in color from yellowish to dark brown and grow anywhere from 1/8 inch to 8 inches long. Equipped with venomous jaws, they prey on insects and small invertebrates—making them beneficial for pest control.
            <br /><br />
            Most centipedes prefer damp, dark environments like basements, crawl spaces, and under logs or leaf litter. They are nocturnal and sensitive to humidity. While some species can bite, these bites are typically no more serious than a bee sting.
            <br /><br />
            Their presence often indicates high indoor moisture or existing pest infestations. Though not dangerous, managing centipedes is essential to ensure peace of mind and address underlying issues in the home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {centipedeTypes.map((type, index) => (
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
