import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const silverfishTypes = [
  {
    name: "Common Silverfish",
    image: "/types/common-silverfish.jpg",
    description: "Recognized by their silvery, carrot-shaped bodies and fast movements. They are frequently found in damp and dark household areas.",
    link: "https://www.saynopest.com/common-silverfish-saynopest",
  },
];

export default function SilverfishTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/silver-fish" />
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Silverfish</h1>

          <p className="text-gray-700 mb-6">
            Silverfish get their name from being small, having no wings and moving so quickly you might think they’re swimming. The dampness and dark of your house can make these insects hide and quietly ruin your property.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">What are Silverfish?</h2>
          <p className="text-gray-700 mb-6">
            Silverfish are very small, without wings, and they look and move like fish—earning their name from being silver and gray. Their bodies typically measure 1/2 to 3/4 inches, are slender, flat, and shaped like a carrot or tiny fish. They have long antennae at the front and three tail-like extensions at the back. Their metallic scales make them easily recognizable. Silverfish are nocturnal pests that prefer dark areas and typically hide in damp places such as bathrooms, basements, attics, kitchens, and laundry rooms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">What Do Silverfish Eat?</h2>
          <p className="text-gray-700 mb-6">
            Being herbivores,{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/where-do-silverfish-come-from-understanding-them">silverfish diet</Link>
            </b>{" "}
            includes starchy materials like paper, books, wallpaper, cardboard, glue, textiles, and even dried foods such as flour, cereal, and pasta. They can also feed on synthetic fabrics and, occasionally, dead insects. While silverfish don’t bite or transmit disease, they can cause significant damage to books, important documents, clothes, and food supplies.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Silverfish Infestation</h2>
          <p className="text-gray-700 mb-6">
            Many American households, especially in the Southeast, Midwest, and coastal regions, are vulnerable to{" "}
            <b className="text-green-500">
              <Link href="https://www.saynopest.com/where-do-silverfish-come-from-understanding-them">silverfish infestation</Link>
            </b>{" "}
            due to high humidity and ample food sources. Although silverfish aren’t harmful to people or pets, they can contaminate food, destroy valuables, and trigger allergies through their shed scales and droppings.
          </p>

          <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Silverfish</h2>
          <p className="text-gray-700">
            There are various types of silverfish, each with distinct appearances and habits. Identifying the specific type can make removal more efficient and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {silverfishTypes.map((type, index) => (
            <Link href={type.link} key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
