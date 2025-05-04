"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Logo and Menu */}
        <div className="w-full flex items-center justify-between lg:justify-start lg:w-auto">
          {/* Logo */}
          <Link href="/">
            <Image src="/SayNoPest-logo.svg" alt="Logo" width={220} height={120} />
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
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

        {/* Nav Links + Search + Socials */}
        <div className={`w-full lg:flex lg:items-center lg:justify-between ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-gray-600 mt-4 lg:mt-0">
            <Link href="#" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Services</Link>
            <Link href="#" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Compare</Link>
            <Link href="#" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Blogs</Link>
            <Link href="#" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Support</Link>
            {/* Search */}
            <div className="relative mt-4 lg:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
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
                placeholder="Search"
                className="w-full lg:w-56 py-1 pl-10 pr-4 border-b border-gray-400 bg-white text-gray-700 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6 lg:mt-0">
            <a href="https://reddit.com" target="_blank" aria-label="Reddit" className="text-gray-500 hover:text-red-500 dark:text-gray-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48..." />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 dark:text-gray-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10..." />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-black dark:text-gray-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
