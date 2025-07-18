import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const tickTypes = [
  {
    name: "Blacklegged Tick (Deer Tick)",
    image: "/blacklegged-tick.jpg",
    description:
      "Commonly found in the Northeast and Upper Midwest, these ticks are the primary vectors of Lyme disease. They are small, dark-colored, and feed on both animals and humans.",
      link:"https://www.saynopest.com/life-cycle-of-blacklegged-deer-tick-a-2-year-process-saynopest/"
  },
  {
    name: "Lone Star Tick",
    image: "/lone-star-tick.jpg",
    description:
      "Easily recognized by the single white dot on the female's back, this tick is aggressive and known to transmit ehrlichiosis and Southern tick-associated rash illness (STARI).",
      link:"https://www.saynopest.com/the-lone-star-tick/"
  },
  {
    name: "American Dog Tick",
    image: "/american-dog-tick.jpg",
    description:
      "Often seen around sidewalks and driveways, pavement ants can enter buildings in search of food, especially sugary substances and grease.",
    link:"https://www.saynopest.com/is-american-dog-tick-dangerous/"
  },
];

export default function TickTypesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.saynopest.com/services/ticks" />
      </Head>
      <div className="min-h-screen mt-20 p-6">
        <div className="max-w-full mx-auto mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-primary mb-4 text-center">TICKS</h1>

          <p className="text-gray-700 mb-6">
            Different <b className="text-green-500">
    <Link href="https://www.saynopest.com/tick-types-most-common-in-america-saynopest">
    types of termites
    </Link></b> live in grass and woods and feed on blood. It can be your pet&absop;s blood or your own. Although they’re small, their bites can spread serious diseases. Therefore, it becomes important to be careful and check for them after being outside.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Physical Appearance and Behaviour of Ticks </h2>
          <p className="text-gray-700 mb-6">
            Ticks are the most dangerous blood-feeding arachnids in the United States of America. An adult tick is between the size of a sesame seed, which is 1/8 of an inch and an apple seed, which is 1/4 of an inch, based on their species and life phase. They have an oval, flattened body together with eight legs and a well-headed part with the necessary tool for piercing the human skin and then feeding the suckers on blood.
            <br /><br />
            The normal places where ticks are found are the woods, tall grasses, and shrubbery, where they are sitting on vegetation waiting for a host to pass by and latch on whether it is a human, a pet, or wildlife. Envision them feasting only on blood as their food, which, is eaten by them while going through the development stage (larva, nymph, adult). Ticks are very good at sustaining life for months even though there is no food. The trick is to hibernate in the shade and rely on the environment to be full of humidity throughout their tough dry times.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Risks Caused by Different Types of Ticks</h2>
          <p className="text-gray-700 mb-6">
            Ticks create a significant threat in the United States. There are states where high numbers of Lyme disease cases have been reported. In some states of the U.S.A. ticks have a perfect living condition to thrive and increase which, of course, has naturally led to a higher rate of the population getting diseases like Lyme, Rocky Mountain spotted fever, and anaplasmosis.
            <br /><br />
            Ticks are capable of transmitting pathogens within the first 24 to 48 hours of being attached to the host.
          </p>

          <h2 className="text-2xl font-semibold text-primary text-center mb-2">Types Of Ticks</h2>
          <p className="text-gray-700 mb-4">
            Ticks may be small, but the variety of species reveal a world of hidden dangers and clever survival strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {tickTypes.map((type, index) => (
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
