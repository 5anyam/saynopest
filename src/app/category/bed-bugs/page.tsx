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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Types of Bed Bugs
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 mb-10">
          Bed bugs are notorious for their stealth and persistence in human environments. Learning about their types and behaviors helps ensure more effective treatment and prevention.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-14">
          <h2 className="text-2xl font-semibold text-primary mb-4">Understanding Bed Bugs</h2>
          <p className="text-gray-700 leading-relaxed">
            Bed bugs are small, reddish-brown insects, approximately the size of an apple seed. Their bodies swell and darken after feeding on blood. Nymphs (young bed bugs) are nearly transparent until they feed, while their eggs are tiny and pearly white.
            <br /><br />
            These pests usually stay within 8 feet of sleeping areas, hiding in mattress seams, box springs, bed frames, and crevices. They are most active from midnight to early morning and feed solely on blood, using anesthetic saliva to avoid detection.
            <br /><br />
            Increased travel has made bed bugs more common, as they easily hitchhike on luggage and clothing. Although they aren’t known to spread disease, their bites can cause skin irritation, allergic reactions, and anxiety. Professional treatment is often required due to their ability to hide and survive without feeding for long periods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
