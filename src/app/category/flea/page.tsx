import Image from "next/image";

const fleaTypes = [
  {
    name: "Aedes Mosquitoes",
    image: "/types/mosquitoes/aedes-mosquitoes.jpg",
    description:
      "Recognized by white markings on its legs and a marking in the form of a lyre on the upper thorax. It spreads diseases like Zika, dengue, and yellow fever. Mostly active during the daytime."
  },
  {
    name: "Anopheles Mosquito",
    image: "/types/mosquitoes/anopheles-mosquito.jpg",
    description:
      "Black with distinct white stripes on the legs and a white stripe down the center of its back. Known for aggressive daytime biting and spreading viruses like chikungunya, dengue, and Zika."
  },
  {
    name: "Culex Mosquitoes",
    image: "/types/mosquitoes/culex-mosquitoes.jpg",
    description:
      "Brownish in color and common in the northern U.S. They are carriers of West Nile virus and breed in stagnant water sources like birdbaths and storm drains."
  }
];

export default function FleaTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
      <div className="max-w-full mx-auto mb-16">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">Flea</h1>

<p className="text-gray-700 mb-6">
  Fleas are small, blood-sucking insects that live on pets and can also bite humans, causing itchiness and irritation. They sometimes spread diseases, making regular pet care and hygiene essential.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance</h2>
<p className="text-gray-700 mb-6">
  Fleas are tiny, wingless insects measuring about 1/8 of an inch long. Their flat, oval shape allows them to move easily through animal fur. Fleas have six legs, with strong hind legs that enable them to jump distances over 100 times their own body length to find a host. They are commonly found in humid places like grassy areas, carpets, and pet beds.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Habitat</h2>
<p className="text-gray-700 mb-6">
  Fleas thrive on warm-blooded animals such as dogs, cats, and rodents, and will bite humans when needed. While they are more active in warm seasons, they can survive year-round indoors due to consistent heating and cozy conditions. In the U.S., flea infestations are most severe in warm and humid regions such as the Southeast, Gulf Coast, and parts of the West Coast. Infestations peak in spring and fall, particularly persisting year-round in places like Florida and Texas.
</p>

<h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks and Prevention</h2>
<p className="text-gray-700 mb-6">
  Flea bites can cause discomfort, allergic reactions, and transmit diseases such as murine typhus, plague, and cat scratch disease. They can also carry tapeworms that pose health risks to both pets and humans. Regular flea treatment for pets, maintaining cleanliness, and controlling humidity indoors are essential steps to prevent infestations and protect family members.
</p>

<h2 className="text-xl font-semibold text-primary text-center mb-2">Types of Fleas</h2>
<p className="text-gray-700">
  Despite their size, fleas are a diverse group of parasites, each adapted with impressive survival tactics for living on different hosts and in varying environments.
</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fleaTypes.map((type, index) => (
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
