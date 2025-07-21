import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const fliesTypes = [
  {
    name: "Black Fly",
    image: "/types/flies/black-fly.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime.",
      link:"https://www.saynopest.com/black-flies-saynopest/"
  },
  {
    name: "Horse Fly",
    image: "/types/flies/blow-fly.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika.",
      link:"https://www.saynopest.com/horse-fly-bites-saynopest/"
  },
  {
    name: "Cluster Fly",
    image: "/types/flies/bottle-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains.",
      link:"https://www.saynopest.com/cluster-flies-in-house-know-what-to-do/"
  },
  {
    name: "House Fly",
    image: "/types/flies/cluster-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains.",
      link:"https://www.saynopest.com/house-flies-understand-and-control-these-common-house-pests/"
  },
  {
    name: "Drain Fly",
    image: "/types/flies/crane-fly.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains.",
      link:"https://www.saynopest.com/how-do-i-get-rid-of-drain-flies-overnight-saynopest/"
  },
];

export default function FliesTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/flies" />
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-14 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-primary text-center mb-4">Flies</h1>

          <p className="text-gray-700 mb-6">
            Flies attack places where there is leftover food or trash. You will mostly find different <b className="text-green-500">
    <Link href="https://www.saynopest.com/7-common-types-of-flies-how-to-stop-them-saynopest">
    types of flies
    </Link></b> near dirty places. They don’t bite, but they do carry and spread diseases. It becomes essential to keep things clean as it helps keep flies away from your home.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance of Flies</h2>
          <p className="text-gray-700 mb-6">
            Of all the numerous species of pests, it is the flies that are the most common in the United States. Flies are small to the middle in size; they are normally 1/8 to 1/4 inches long with Gray or black bodies which are occasionally striped. Flies are a kind of pests that are hairy, have a pair of transparent wings, and large eyes that are red in color.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat and Population Growth</h2>
          <p className="text-gray-700 mb-6">
            As their habitats are very adaptable, flies can remain and multiply anywhere, from urban to rural areas, and are especially attracted to hotspots where organic matter is in plenty. Flies, by using their specialized mouthparts to either dip the liquid or to dissolve the solid food by the regurgitation of their digestive fluids, can consume a variety of foodstuff such as rotting food, garbage, animal waste, and even sugary liquids.
          </p>
          <p className="text-gray-700 mb-6">
            Fly populations in the United States has increased due to the weather (heat and humidity), an increase in food waste, and there is a growth in the number of places where flies may lay their eggs – both in homes and in the localities of the business.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Importance of Control</h2>
          <p className="text-gray-700 mb-6">
            Getting rid of flies such as<b className="text-green-500">
    <Link href="https://www.saynopest.com/how-do-i-get-rid-of-drain-flies-overnight-saynopest">
    drain flies
    </Link></b> is of primary concern to the American population due to the presence of an ideal climate for such flies, and the availability of many spots where the reproduction process of these pests can take place. Getting rid of flies in your home is essential as they are not just a botheration but have been found to be carriers of disease. They can pass several diseases to people by contaminating food and surfaces with germs of their sources of origin.
          </p>

          <h2 className="text-xl font-semibold text-primary text-center mb-2">Types of flies</h2>
          <p className="text-gray-700">
            From household pests to agricultural threats, each fly species contributes in different ways to its ecosystem and have different human impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {fliesTypes.map((type, index) => (
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
