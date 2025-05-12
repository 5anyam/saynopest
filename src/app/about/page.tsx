// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mt-24 lg:mt-0 mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Saynopest, we’re on a mission to help homeowners and businesses across the U.S. find trusted, effective pest control services – no guesswork required.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/images/about1.jpg" alt="Pest control" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Trusted Pest Guide</h2>
          <p className="text-gray-700">
            As a leading pest affiliate marketing platform, we link you with the best pest management providers. With a powerful network of partners and expert-backed recommendations, we make it easy for you to find reliable pest solutions.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Why SayNoPest?</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li><strong>Educational and Comparison Hub:</strong> Your one-stop for rates and services.</li>
          <li><strong>Opinion Hub:</strong> Unbiased and well-researched insights.</li>
          <li><strong>Transparency:</strong> No hidden agendas, just facts.</li>
          <li><strong>Smart Match:</strong> Get connected with experts based on Price, Rating, and Availability.</li>
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted and comprehensive digital hub for pest control solutions across the United States.
          </p>
        </div>
        <div>
          <Image src="/images/about2.jpg" alt="Our Vision" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Lead Generation Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Introduction:</strong> We offer useful content to help users understand pest solutions.</li>
          <li><strong>Understanding:</strong> We gather basic info about your pest issue.</li>
          <li><strong>Delivery:</strong> We match you with trusted pest control companies.</li>
          <li><strong>Monitor:</strong> We track experiences to ensure quality service.</li>
          <li><strong>Evaluation:</strong> Feedback helps us improve and maintain reliable providers.</li>
        </ol>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/images/about3.jpg" alt="Why Choose Us" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700">
            We bring together a team of experts, real experiences, and practical advice so you can confidently pick the best pest control service. With custom matching, we align providers with your budget, location, and needs.
          </p>
        </div>
      </section>

      <section className="text-center bg-green-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Say No to All Kinds of Pests?</h2>
        <p className="text-gray-700 mb-6">Let us help you with trusted pest control companies near you. Just tell us what you need and leave the rest to us!</p>
        <a
          href="/get-started"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          Get Started Now
        </a>
      </section>
    </main>
  );
}
