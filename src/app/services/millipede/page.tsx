import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const millipedeTypes = [
  {
    name: "American Gaint Millipede",
    image: "/types/millipede/american-giant-millipede.jpg",
    link: "https://www.saynopest.com/american-giant-millipede-misunderstood-not-scary/"
  },
  {
    name: "Pink Dragon Millipede",
    image: "/types/millipede/pink-dragon-millipede.jpg",
    link: "https://www.saynopest.com/dragon-millipedes-explore-the-unique-pest-saynopest/"
  }
];

export default function MillipedeTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/millipede" />
        <title>Millipedes - Identification & Control | SayNoPest</title>
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-16">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Millipedes</h1>

          <p className="text-gray-700 mb-6">
            Millipedes are moisture-loving arthropods. They have long, segmented bodies and hundreds of legs. Though harmless, understanding their habits and habitats helps manage the infestations effectively. 
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Description of Millipedes</h2>
          <p className="text-gray-700 mb-6">
            Millipedes are slow-moving arthropods. Their bodies are very long and cylindrical, in other words, they are segmented into many parts, each of which consists of two pairs of legs. In the United States, millipedes are of various sizes, from less than an inch to over four inches long, with the common North American native species (<em>Narceus americanus</em>) being one of the species that is about four inches long. Their bodies are usually black or dark gray, sometimes, however, they can be of red color or with other colored parts along the segments.  
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
          <p className="text-gray-700 mb-6">
            They are often found in and under leaf litter, soil, mulch, logs and other damp areas in woods, gardens and yards. They require a lot of moisture and are commonly found in basements or crawl spaces when the weather changes. They come out at night and are active in search of food until the sun is up and they are back to their safe hideouts. 
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Know What do Millipedes Eat</h2>
          <p className="text-gray-700 mb-6">
            <b className="text-green-500">
    <Link href="https://www.saynopest.com/what-do-millipedes-eat">
    what do millipedes eat?
    </Link></b>{" "}Millipedes are decomposers. They feed on dead and decaying leaves and wood. These pests are important because they offer nutrients to the soil. These pests are important because they help return nutrients to the soil. If the diet available is not sufficient, it is then that they might feed on leaves. At the same time, they do not pose a serious threat to the stability of the environment or the safety of your home. Curled up to form a spiral shape, millipedes have an advanced defense mechanism - their bodies emit a fluid that has a very unpleasant odour and thus are avoided by their enemies. 
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Infestations and Control</h2>
          <p className="text-gray-700 mb-6">
            One of the most significant issues with millipedes in the United States is that the infestations in moist regions increase. This is particularly problematic during the rainy season when many move in search of comfortable living spaces both inside and outside houses thus becoming a nuisance to the occupants. Accordingly, the regulation of millipede populations in the vicinity of houses is an integral part of the prevention process of the pest infestations and maintenance of comfort and hygiene. 
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Millipedes</h2>
          <p className="text-gray-700">
            While generally harmless, different millipede species in the U.S. can become occasional household nuisances. 
          </p>
        </div>

        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {millipedeTypes.map((type, index) => (
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
      </div>
    </>
  );
}
