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
      <div className="max-w-full mx-auto mb-14">
  <h1 className="text-2xl text-center font-bold text-primary mb-4">Centipedes</h1>

  <p className="text-gray-700 mb-6">
    Centipedes are fast-moving creatures often found in damp, dark environments. Although their appearance may seem intimidating, they actually help control other insect pests and are typically harmless to humans.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Centipedes Uncovered: What They Are and How to Identify</h2>
  <p className="text-gray-700 mb-6">
    Centipedes are long, segmented arthropods known for their many legs—ranging from 15 to over 170 pairs depending on the species. With flat, worm-like bodies and a pair of legs per segment, they also feature long, sensitive antennae on a distinct head.
    <br /><br />
    In the U.S., centipedes typically range in color from yellowish to dark brown, often with stripes or markings. Their size varies greatly—from just 1/8 inch to up to 8 inches in the southern and southwestern states.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Where Centipedes Hide: Common Habitats</h2>
  <p className="text-gray-700 mb-6">
    Centipedes thrive in moist, dark environments such as under rocks, mulch, leaf litter, and logs. Inside homes, they commonly inhabit basements, bathrooms, and crawl spaces. As nocturnal hunters, they use venomous jaws to capture and feed on insects, spiders, and other small invertebrates—making them useful in natural pest control.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Friend or Foe? The Role of Centipedes</h2>
  <p className="text-gray-700 mb-6">
    Despite their fearsome appearance, most centipedes pose little threat to humans. Bites from smaller species are rare and typically result in mild pain or swelling similar to a bee sting. Larger species may deliver more painful bites, but they are generally not dangerous.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Signs of House Centipede Infestation</h2>
  <p className="text-gray-700 mb-6">
    Centipede infestations are fairly common in areas with high humidity or during colder seasons when they seek warmth indoors. Their presence can also indicate underlying moisture issues or an existing pest problem. Recognizing and managing a centipede infestation is important not only for comfort but also to address potential root causes.
  </p>

  <h2 className="text-2xl font-semibold text-center text-primary mb-2">Types of Centipedes</h2>
  <p className="text-gray-700">
    Explore the variety of centipedes commonly found in U.S. homes and desert regions. Each type plays a unique role in the ecosystem—and understanding them can help in managing their presence effectively.
  </p>
 </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
  );
}
