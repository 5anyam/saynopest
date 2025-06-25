"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RiFacebookBoxLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
import EstimateModal from "../bookingModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow">
      <div className="container mx-auto px-2 py-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and Hamburger */}
        <div className="w-full flex items-center justify-between lg:justify-start lg:w-auto">
          <Link href="/">
            <Image
              className="hidden lg:block pr-8"
              src="/SayNoPest-logo.svg"
              alt="Logo"
              width={220}
              height={120}
            />
            <Image
              className="block lg:hidden"
              src="/SayNoPest-logo.svg"
              alt="Logo"
              width={160}
              height={80}
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav links + Search + Socials */}
        <div className={`w-full lg:flex lg:items-center lg:justify-between ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-gray-600 mt-4 lg:mt-0">
            <Link href="/" className="mt-2 lg:mt-0 hover:text-gray-900">Home</Link>
            <Link href="/pest-library" className="mt-2 lg:mt-0 hover:text-gray-900">Pest Library</Link>
            <div className="relative mt-2 lg:mt-0">
  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="hover:text-gray-900 flex items-center focus:outline-none"
  >
    Services
    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
    </svg>
  </button>
  {isServicesOpen && (
    <div
      onMouseLeave={() => setIsServicesOpen(false)}
      className="absolute z-50 bg-white shadow-lg rounded-xl mt-2 w-44"
    >
      <Link
        href="https://www.saynopest.com/services/termites"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Termites
      </Link>
      <Link
        href="https://www.saynopest.com/services/ants"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Ants
      </Link>
      <Link
        href="https://www.saynopest.com/services/spiders"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Spiders
      </Link>
      <Link
        href="https://www.saynopest.com/services/cockroaches"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Cockroaches
      </Link>
      <Link
        href="https://www.saynopest.com/services/bed-bugs"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Bed Bugs
      </Link>
      <Link
        href="https://www.saynopest.com/services/wasps"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Wasps
      </Link>

      <Link
        href="https://www.saynopest.com/services/flies"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Flies
      </Link>
      <Link
        href="https://www.saynopest.com/services/flea"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Flea
      </Link>
      <Link
        href="https://www.saynopest.com/services/centipede"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Centipede
      </Link>
      <Link
        href="https://www.saynopest.com/services/millipede"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Millipede
      </Link>
      <Link
        href="https://www.saynopest.com/services/rodent"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Rodent
      </Link>
      <Link
        href="https://www.saynopest.com/services/silver-fish"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Silver Fish
      </Link>
      <Link
        href="https://www.saynopest.com/services/earwigs"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setIsServicesOpen(false)}
      >
        Earwigs
      </Link>
    </div>
  )}
</div>
            <Link href="/blog" className="mt-2 lg:mt-0 hover:text-gray-900">Blogs</Link>
            <Link href="/about" className="mt-2 lg:mt-0 hover:text-gray-900">About Us</Link>
            <Link href="/contact" className="mt-2 lg:mt-0 hover:text-gray-900">Contact Us</Link>

            {/* Search Form */}
            <div className="relative mt-4 lg:mt-0">
              <form onSubmit={handleSearch}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full lg:w-64 py-2 pl-10 pr-4 border-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none focus:border-green-600 transition duration-300 rounded-md"
                />
              </form>
            </div>
          </div>

          {/* Social Icons and CTA */}
          <div className="flex justify-center items-center space-x-2 mt-6 lg:mt-0">
            <Link href="https://www.facebook.com/people/Saynopest/61575434679519/">
              <RiFacebookBoxLine className="text-black text-3xl" />
            </Link>
            <Link href="https://www.instagram.com/saynopest/">
              <GrInstagram className="text-black text-2xl" />
            </Link>
            <Link href="https://www.linkedin.com/company/saynopest/">
              <TbBrandLinkedin className="text-black text-3xl" />
            </Link>
            <EstimateModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
