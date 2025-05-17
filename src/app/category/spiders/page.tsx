import Image from "next/image";

const spiderTypes = [
  {
    name: "Black Widow Spider",
    image: "/types/spiders/black-widow-spider.jpg",
    description:
      "Easily recognized by its shiny black body and red hourglass marking on its abdomen. Found in dark, undisturbed areas like basements and garages. Its venomous bite can cause severe pain and muscle cramps."
  },
  {
    name: "Brown Recluse Spider",
    image: "/types/spiders/brown-recluse-spider.jpg",
    description:
      "Light to dark brown with a distinctive violin-shaped mark on its back. Prefers dry, undisturbed places like closets or attics. Its bite can cause serious skin damage in rare cases."
  },
  {
    name: "Wolf Spider",
    image: "/types/spiders/wolf-spider.jpg",
    description:
      "Large, hairy, and fast-moving. Often mistaken for tarantulas. They don't spin webs but hunt their prey and are usually found near the ground, inside or outside."
  },
  {
    name: "Jumping Spider",
    image: "/types/spiders/jumping-spider.jpg",
    description:
      "Small and compact with vivid colors and large forward-facing eyes. Known for their agility and curious behavior. Harmless to humans and very active hunters."
  },
  {
    name: "House Spider",
    image: "/types/spiders/house-spider.jpg",
    description:
      "Yellowish-brown with an elongated abdomen. Includes species like the American House Spider. Common in corners, ceilings, and basements where they build messy webs."
  },
  {
    name: "Yellow Sac Spider",
    image: "/types/spiders/yellow-sac-spider.jpg",
    description:
      "Pale yellow or beige spider, under half an inch long. Active at night and known for wandering instead of webbing. Its bite is mildly venomous and can cause skin irritation."
  },
  {
    name: "Southern House Spider",
    image: "/types/spiders/southern-house-spider.jpg",
    description:
      "Brown to gray, commonly found in southern states. Males often resemble brown recluses but are harmless. Females build funnel webs in cracks and corners."
  },
  {
    name: "Hobo Spider",
    image: "/types/spiders/hobo-spider.jpg",
    description:
      "Found mainly in the Pacific Northwest. Brown with chevron markings on the abdomen. Builds funnel-shaped webs and can occasionally bite, though it is not considered highly dangerous."
  }
];

export default function SpiderTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Spiders
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Spiders are commonly found in American homes. Although most are harmless and help control insect populations, certain species like the black widow and brown recluse require caution due to their venomous bites.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Spiders</h2>
          <p className="text-gray-700 leading-relaxed">
            Spiders are eight-legged arachnids known for their ability to spin silk. They come in a variety of shapes and colors depending on their species. Some spin webs to trap prey while others, like wolf and jumping spiders, actively hunt.
            <br /><br />
            They feed on insects like flies, mosquitoes, and ants—helping reduce pest populations in and around homes. While most spiders are solitary and shy, a few can bite when threatened. The black widow and brown recluse are the most medically significant spiders in the U.S.
            <br /><br />
            Spider infestations are common due to favorable indoor environments, easy prey access, and ample hiding spaces. Controlling their population not only reduces potential health risks but also creates a more comfortable living space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {spiderTypes.map((type, index) => (
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
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
