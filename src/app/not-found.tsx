import Link from "next/link";

export default async function Page() {

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-8">
      <h1 className="text-6xl font-bold text-amber-700">404</h1>
      <p className="mt-4 text-2xl text-gray-800">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link href="https://www.saynopest.com/"><h1 className="mt-6 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-700 transition">
        Go back home
      </h1></Link>
    </div>
  );
}