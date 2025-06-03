import Image from "next/image";

const bedBugTypes = [
  {
    name: "Common Bed Bug (Cimex lectularius)",
    image: "/types/common-bed-bug.jpg",
    description: "The most widespread species in the U.S., these bed bugs thrive in human dwellings and are difficult to eliminate due to their resistance to many treatments."
  },
  {
    name: "Tropical Bed Bug (Cimex hemipterus)",
    image: "/types/tropical-bed-bug.jpg",
    description: "More prevalent in tropical and subtropical regions, they are similar to common bed bugs but prefer warmer climates and are increasingly found in southern U.S. states."
  },
  {
    name: "Bat Bug (Cimex adjunctus)",
    image: "/types/bat-bug.jpg",
    description: "These bugs primarily feed on bats but may move into homes, especially attics, if bat populations are nearby. They closely resemble bed bugs but prefer bat blood."
  },
  {
    name: "Barn Swallow Bug",
    image: "/types/water-bug.jpg",
    description: "Typically found in bird nests, especially barn swallows, these bugs may enter homes when birds migrate, posing a nuisance if their hosts disappear."
  }
];

export default function BedBugTypesPage() {
  return (
    <div className="min-h-screen mt-20 p-6">
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
  <h1 className="text-3xl text-center font-bold text-primary mb-4">Bed Bugs</h1>

  <p className="text-gray-700 mb-6">
    Bed bugs are the kind of pests that feed on blood. They hide close to where people sleep, causing itchy bites and distress. Understanding their appearance, habits, and risks is key to effective control and prevention.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">What do bed bugs look like?</h2>
  <p className="text-gray-700 mb-6">
    Bed bugs are nasty and persistent insects that are often found in human dwellings. <b>Adult bed bugs</b> are red-brown, and do not have wings and are roughly the size of an apple seed. Their bodies become more elongated and bloated after they have the blood meal. <b>Nymphs</b> are the younger bed bugs that are way lighter. They are almost transparent in color, except when they have fed, and thus are hard to see. The eggs of bed bugs are minute (about 1mm), and pearly white.
  </p>

  <p className="text-gray-700 mb-6">
    Most of the time, bed bugs can be found within 8 feet from where people sleep. They tend to live in such places as mattress seams, box springs, bed frames, closets, drawers, where furniture parts join, under wallpaper, and in other places that are hard to access.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Feeding Habits</h2>
  <p className="text-gray-700 mb-6">
    Bed bugs are most active between 12:00 to 5:00 am and very particularly in the midnight period when you are in your deepest sleep. Bed bugs are fearless in the choice of their only food - blood. They are fond of human blood and make them their favourite hosts for feeding. They feed for less than 15 minutes and during this time they use their mouthparts to inject saliva into the skin containing an anesthetic and an anticoagulant to avoid humans noticing and stop the feeding.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Bed Bug Infestation</h2>
  <p className="text-gray-700 mb-6">
    The other reason for this pest issue is that the old methods of getting rid of these pests is no longer effective. Bed bugs certainly can spread quite easily from hotels to residential sites; this is due to the ongoing trend of the global travel industry. As you travel, bed bugs easily hitchhike on the luggage, clothes, and personal belongings, and spread from one place to another.
  </p>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks Caused By Bed Bugs</h2>
  <p className="text-gray-700 mb-6">
    Although bed bugs have the reputation of being disease carriers, the reality says otherwise. But do not take them seriously, the bites not only lead to skin rashes, but they can also cause allergic reactions and psychological distress. Practically speaking, the affected people can suffer from itchy skin, blisters, and hives caused by the bed bugs saliva. Since these pests are incredibly hard to find and can live for a long time without food, the quick and successful method of dealing with these universal insects is to use professional help.
  </p>

  <h2 className="text-3xl text-center font-bold text-primary mb-4">Types of Bed Bugs</h2>
  <p className="text-gray-700">
    From homes to hotels, these bed bug species are the most encountered across the country. Here are the primary types of bed bugs found in the United States, each with distinct habitats and characteristics.
  </p>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {bedBugTypes.map((type, index) => (
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
