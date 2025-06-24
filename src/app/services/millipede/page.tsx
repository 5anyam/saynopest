import Head from "next/head";
import Image from "next/image";

const millipedeTypes = [
  {
    name: "Green House",
    image: "/types/millipede/greenhouse-millipede.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime."
  },
  {
    name: "Apheloria Virginiensis",
    image: "/types/millipede/apheloria-virginiensis-millipede.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika."
  },
  {
    name: "North American",
    image: "/types/millipede/north-american-millipede.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  },{
    name: "Pink Dragon",
    image: "/types/millipede/pink-dragon-millipede.jpg",
  }
];

export default function MillipedeTypesPage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.saynopest.com/services/millipede" />
    </Head>
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto mb-16">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">Millipedes</h1>

<p className="text-gray-700 mb-6">
  Millipedes are moisture-loving arthropods with long, segmented bodies and dozens of legs. While harmless, understanding their behavior and habitat can help in managing infestations effectively.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Description of Millipedes</h2>
<p className="text-gray-700 mb-6">
  Millipedes are slow-moving and cylindrical, with their bodies segmented into many parts—each segment bearing two pairs of legs. They range in size from less than an inch to over four inches long. The most common North American species, <em>Narceus americanus</em>, can grow up to four inches. Millipedes are typically dark gray or black, but some may have red or other colored markings along their segments.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
<p className="text-gray-700 mb-6">
  Millipedes thrive in damp environments such as leaf litter, mulch, soil, and decaying logs. They are commonly found in gardens, wooded areas, and sometimes indoors—especially in basements and crawl spaces—during weather changes. Nocturnal by nature, they search for food at night and retreat to safe, moist hiding places during the day.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">What Do Millipedes Eat?</h2>
<p className="text-gray-700 mb-6">
  Millipedes are decomposers, feeding primarily on dead leaves and decaying wood. This plays an important ecological role by returning nutrients to the soil. When food is scarce, they may consume live plant material. Despite their intimidating appearance, they are not dangerous. As a defense mechanism, they can curl into a spiral and release a foul-smelling fluid to deter predators.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Infestations and Control</h2>
<p className="text-gray-700 mb-6">
  Millipede infestations tend to rise in moist regions and during rainy seasons, as they seek drier, sheltered areas—sometimes invading homes. Although not harmful, their presence can be a nuisance. Managing moisture levels around the home and reducing damp hiding spots is key to keeping millipede populations under control and maintaining indoor comfort and cleanliness.
</p>

<h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Millipedes</h2>
<p className="text-gray-700">
  While millipedes are generally harmless, several species in the U.S. may occasionally become household nuisances when environmental conditions push them indoors.
</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {millipedeTypes.map((type, index) => (
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
      </>
  );
}
