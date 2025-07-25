import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const earwigTypes = [
  {
    name: "European Earwig (Forficula auricularia)",
    image: "/types/european-earwig.jpg",
    description:
      "The most common species in the U.S., known for their prominent pincers. They are nocturnal, thrive in damp areas, and often enter homes in search of moisture and food.",
    link: "https://www.saynopest.com/european-earwig",
  },
];

export default function EarwigTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/earwigs" />
        <title>Earwigs in the U.S. | SayNoPest</title>
      </Head>

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Earwigs</h1>

          <p className="text-gray-700 mb-6">
            Recognized by their pincers and nocturnal behavior, earwigs are omnivorous insects that thrive in damp environments. Learn about the common species found in the U.S.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Earwigs Uncovered: Identifying the Pincer-Tailed Insect</h2>
          <p className="text-gray-700 mb-6">
            Earwigs are easily identified by the pincers, or cerci, located at the end of their abdomen. Adults measure about 1.3 to 2.5 cm in length and are typically dark brown or reddish-brown, sometimes with lighter or striped bodies compared to their younger counterparts. Although most earwigs have wings, they rarely use them to fly.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Where Earwigs Hide and What They Eat</h2>
          <p className="text-gray-700 mb-6">
            Being nocturnal, earwigs tend to hide during the day in damp, dark places such as under rocks, mulch, leaf litter, or logs. At night, they become active and feed on a wide variety of materials, including decomposing plant matter, live plants, fruits, flowers, and even other insects. This makes them both scavengers and occasional predators. If you spot an{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/how-to-get-rid-of-earwigs-in-house-effective-control-methods">
                Earwig in house
              </Link>
            </b>
            , it may be a sign of nearby moisture issues or garden proximity.
          </p>

  {/* Now, the paragraph that should appear just beside the image */}
  <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden p-6 gap-6">
  <Link href="https://www.saynopest.com/european-earwig"><div className="w-full h-60 relative">
    {earwigTypes.map((type, index) => (
    <div
      key={index}
      className="flex flex-col items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-60 relative">
        <Image
          src={type.image}
          alt={type.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 md:w-1/2">
        <h2 className="text-xl font-semibold text-primary mb-2">
          {type.name}
        </h2>
      </div>
    </div>
  ))}
    </div></Link>
    <div className="md:w-1/2 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        When Earwigs Invade Your Home: Habitat & Danger
      </h2>
      <p className="text-gray-700 mb-6">
        Earwigs often travel in small groups and are usually found near moist areas inside homes,
        such as bathrooms, damp basements, and overly wet kitchens. Their thigmotactic behavior—
        seeking out close contact with surfaces—draws them to these environments. While earwigs are not
        dangerous to humans, their presence can cause discomfort, and in large numbers, they may
        damage garden plants and spoil stored food.
      </p>
    </div>

  </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Earwig Invasion in the USA</h2>
          <p className="text-gray-700 mb-6">
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/how-to-get-rid-of-earwigs-an-authentic-guide-homeowners">
                Earwig Infestation
              </Link>
            </b>{" "}
            is becoming more common across the U.S. due to ideal conditions created by warm, wet climates. Frequent rainfall and high humidity promote breeding and survival, contributing to rising populations. Without proper control, large infestations can lead to food contamination, soil disruption, and environmental imbalance.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Which Earwigs Are Most Likely to Invade Your Home</h2>
          <p className="text-gray-700 mb-6">
          The main types of earwigs, which are also found in different regions of the United States, are the European earwig, which is the most common of all types and mostly found inside the house, and the red-legged earwig. These are mostly found in Florida and the southern part of the USA. 
          These insects mostly get attracted indoors by the moisture; so, they can be found where the surroundings are cool and damper such as basement, bathrooms and plants or these insects can also come into the house in huge numbers due to hot and dry conditions or heavy rain as it does not suit the outside conditions anymore.
          </p>
        </div>
      </div>
    </>
  );
}
