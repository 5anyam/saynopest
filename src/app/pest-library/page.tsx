import Image from "next/image";
import Link from "next/link";

const pests = [
  {
    title: "Ants",
    image: "/ants.jpg",
    category: "ants",
  },
  {
    title: "Cockroaches",
    image: "/cockroaches.jpg",
    category: "cockroaches",
  },
  {
    title: "Termites",
    image: "/termites.jpg",
    category: "termites",
  },
  {
    title: "Bed Bugs",
    image: "/bugs.jpg",
    category: "bed-bugs",
  },
  {
    title: "Spiders",
    image: "/spiders.jpg",
    category: "spiders",
  },
  {
    title: "Mosquitoes",
    image: "/mosquitoes.jpg",
    category: "mosquitoes",
  },
];

export default function PestLibrary() {
  return (
    <div className="min-h-screen bg-gray-50 mt-20 py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Pest Library
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pests.map((pest, index) => (
          <Link
            key={index}
            href={`https://www.saynopest.com/category/${pest.category}`}
            className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={pest.image}
                alt={pest.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {pest.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
