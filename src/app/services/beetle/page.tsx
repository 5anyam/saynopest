import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const beetleTypes = [
  {
    name: "Asian Longhorned Beetle",
    image: "/types/beetles/asian-longhorned-beetle.jpg",
    link: "https://www.saynopest.com/asian-longhorned-beetle"
  },
  {
    name: "Emerald Ash Borer",
    image: "/types/beetles/emerald-ash-borer.jpg",
    link: "https://www.saynopest.com/emerald-ash-borer"
  },
  {
    name: "Mountain Pine Beetle",
    image: "/types/beetles/mountain-pine-beetle.jpg",
    link: "https://www.saynopest.com/mountain-pine-beetle"
  },
  {
    name: "Colorado Potato Beetle",
    image: "/types/beetles/colorado-potato-beetle.jpg",
    link: "https://www.saynopest.com/colorado-potato-beetle"
  },
  {
    name: "Japanese Beetle",
    image: "/types/beetles/japanese-beetle.jpg",
    link: "https://www.saynopest.com/japanese-beetle-saynopest"
  }
];

export default function BeetleTypesPage() {
  return (
    <>
      <Head>
      <link rel="canonical" href="https://www.saynopest.com/services/beetle"/>
        <title>Types of Beetles in the U.S. | SayNoPest</title>
      </Head>

      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Beetles</h1>

          <p className="text-gray-700 mb-6">
            Beetles are bugs with tough shells that you can find crawling around almost anywhere, from woods to your own backyard.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Different Types of Beetles</h2>
          <p className="text-gray-700 mb-6">
            There are over 30,000 different types of beetles in the United States, which makes them the most common pest in the United States. As you can easily find them. Their hard forewings cover their delicate hind wings with a straight tire shape and are recognised by the black elytra. There are beetles with sizes running from tiny to enormous; the smallest may be only a few millimetres, and the extra large ones are more than six inches long. They have bodies that are shaped like ovals or elongated flat shapes and may be dull brown, black or jazzed up with shining green or red colours. Beetles seem to have six legs from a distance because each antenna makes it look that way, and together with their strong biting jaws, they can manage their eating.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat and Distribution</h2>
          <p className="text-gray-700 mb-6">
            The U.S.A. shoulders nearly all the habitats for innumerable beetles which roam the forest, grassland, wetland, desert, urban park, and indoor areas of the country. Some of them are the inhabitants of soil, under logs, or fallen leaves, while others are those we spot on plants, in stored food products, or even in wooden structures. Many beetles are plant eaters, living on leaves, stems, roots, and seeds. Some organisms are decomposers and feed mainly on decaying plants and animals, fungi, animal hair, etc., and lastly, there are also a few species that are predators.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Life Cycle and Seasonal Activity</h2>
          <p className="text-gray-700 mb-6">
            While a few different types of beetles are lone, others live in groups, and for most of them, growth and eating happen primarily during their larval life before moving on to other stages. While a lot of beetles are active in the summer, some others, including <b className="text-green-500">
    <Link href="https://www.saynopest.com/carpet-beetle-bites-what-every-american-needs-to-know">
    carpet beetles 
    </Link>
  </b> and Asian ladybugs, move into houses when it’s cold. Their flexibility and ability to recover from adversities are reasons why they can succeed in a lot of places, and at the same time, why they become so difficult to handle when they are in homes or crops or when they are destroying structures.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Beetle Infestation</h2>
          <p className="text-gray-700 mb-6">
            At the time of this writing, the United States is one of the most beetle-infested countries in the world due to its variety of climatic zones, extensive farmland, and the transition of green areas into developed ones. The rise in the temperature of the earth, the increase in the sand drought, and the darkness of the forest have become so from beetles to an increase their wood-boring and crop-damaging beetles. However, human beings need to understand <b className="text-green-500">
    <Link href="https://www.saynopest.com/how-to-get-rid-of-carpet-beetles-signs-solutions-and-prevention">
    how to get rid of carpet beetles  
    </Link>
  </b> urgently because these are the creatures that can cause damage to the homes by infesting wood and fabrics and contaminate the food sources, as a result, the farmers lose their earnings in the process of repairs and the homeowners have to pay for the losses of the crops and trees.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Beetles</h2>
          <p className="text-gray-700 mb-6">
            Beetles show up in all kinds of shapes, sizes, and colours, and you’ll spot them just about everywhere across the U.S.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {beetleTypes.map((type, index) => (
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
