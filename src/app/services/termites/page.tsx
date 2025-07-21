import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const termiteTypes = [
  {
    name: "Subterranean Termites",
    image: "/types/subterranean-termites.jpg",
    description:
      "These termites build large underground colonies and require moist environments. They commonly enter homes through soil contact or foundation cracks.",
    link: "https://www.saynopest.com/subterranean-termites-the-hidden-threat-beneath-your-home/",
  },
  {
    name: "Formosan Termites",
    image: "/types/formosan-termites.jpg",
    description:
      "Highly aggressive and destructive, Formosan termites can build nests underground or in walls and attics if moisture is available.",
    link: "https://www.saynopest.com/formosan-termites",
  },
  {
    name: "Drywood Termites",
    image: "/types/drywood-termites.jpg",
    description:
      "These termites live in dry wood and don't require contact with soil. They infest wooden furniture, walls, and framing above ground.",
    link: "https://www.saynopest.com/drywood-termites-identification-eggs-elimination/",
  },
  {
    name: "Dampwood Termites",
    image: "/types/dampwood-termites.jpg",
    description:
      "Larger in size, dampwood termites prefer moist, decaying wood and are commonly found in areas with high humidity or water damage.",
    link: "https://www.saynopest.com/dampwood-termite",
  },
];

export default function TermiteTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/termites" />
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">Termites</h1>

          <p className="text-gray-700 mb-6">
            Termites are silent but destructive pests that can cause serious structural damage to homes. Identifying the type of termite is key to controlling infestations effectively.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">The silent destroyers: How termites damage homes across U.S</h2>
          <p className="text-gray-700 mb-6">
            Termites are relatively small, soft-bodied insects ranging from approximately 1/8 to 1 inch long, depending on caste and species. Their appearance ranges from white or naturally pale cream (particularly worker termites) to off-white, to light brown, dark brown and even black with the reproductive <b className="text-green-500">
    <Link href="https://www.saynopest.com/termite-swarm-in-usa">
    termite swarm
    </Link></b>. Termites are equipped with straight, beaded antennae, a straight waist (different from the pinched waist of ants) and, in the swarm stage, two equal pairs of wings.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Termite Habitat & Behavior</h2>
          <p className="text-gray-700 mb-6">
            His habitat does not change depending on the <b className="text-green-500">
    <Link href="https://www.saynopest.com/what-does-a-termite-look-like-a-complete-guide-2025">
    types of termites
    </Link></b> : Subterranean termites construct large colonies in the soil and need a moist environment; they usually enter the house through soil and foundation cracks, dry wood termites reside in dry wood above ground, and Formosan termites can also nest underground or in walls attics if they can find moist environments. In respect of behaviour, termites are social insects that dwell in large colonies and each has a specialised role, and they feed largely on cellulose materials including wood, papers and plant debris but remain hidden and cause damage only after being detected.
          </p>

          <p className="text-gray-700 mb-6">
            In the U.S. More than 600,000 homes are damaged annually by termites, and a huge amount is spent on repair and control measures. Responsible for the term “silent destroyers”, these termites can make a quiet meal of wood, paper, and even wallpaper without being noticed until the woodwork is falling apart.
          </p>

          <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Termites</h2>
          <p className="text-gray-700 mb-4">
            Not all termites are the same—some live underground, others in dry wood or damp places, and knowing the difference helps protect your home better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {termiteTypes.map((type, index) => (
            <Link href={type.link} key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={type.image}
                  alt={type.name}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-2 text-center">
                  <h2 className="text-xl font-semibold text-primary mb-2">{type.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
