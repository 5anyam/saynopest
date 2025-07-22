"use client"
import { GrInstagram } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
import Link from "next/link";

export function Footer() {
    return (
      <footer className="bg-primary text-white mt-auto w-full">
        <div className="px-8 py-6">
  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                  <p className="font-semibold text-xl text-white">Quick Link</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="https://www.saynopest.com/" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Home</a>
                      <a href="https://www.saynopest.com/contact" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Contact Us</a>
                      <Link href="https://www.saynopest.com/about" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">About Us</Link>
                      <a href="https://www.saynopest.com/blog" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Blogs</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white">Services</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="https://www.saynopest.com/category/termites" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Termites</a>
                      <a href="https://www.saynopest.com/category/mosquitoes" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Mosquitoes</a>
                      <a href="https://www.saynopest.com/category/ants" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Ants</a>
                      <a href="https://www.saynopest.com/category/spiders" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Spiders</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white">Useful Links</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <Link href="https://www.saynopest.com/privacy-policy" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Privacy Policy</Link>
                      <a href="https://www.saynopest.com/terms-and-conditions" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Terms and conditions</a>
                      <a href="https://www.saynopest.com/disclaimer" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Disclaimer</a>
                      <a href="https://saynopest.com/sitemap.xml" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Sitemap</a>
                  </div>
              </div>
  
              <div className="mb-5">
                  <p className="font-semibold text-xl text-white">Contact Us</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <span className="text-white">Digimach 10 LLC</span>
                      <span className="text-white">16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</span>
                      <a href="tel:+1217773560" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">+121-7773-5600</a>
                      <a href="mailto:support@saynopest.com" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">support@saynopest.com</a>
                     <div className="flex flex-row items-center gap-2 mt-3">
                        <Link href="https://www.facebook.com/people/Saynopest/61575434679519/" aria-label="Facebook" className="text-white hover:text-blue-400 transition-colors duration-300">
                            <RiFacebookBoxLine className="text-3xl" />
                        </Link>
                        <Link href="https://www.instagram.com/saynopest/" aria-label="Instagram" className="text-white hover:text-pink-400 transition-colors duration-300">
                            <GrInstagram className="text-2xl"/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/saynopest/" aria-label="LinkedIn" className="text-white hover:text-blue-500 transition-colors duration-300">
                            <TbBrandLinkedin className="text-3xl"/>
                        </Link>
                     </div> 
                  </div>
              </div>
          </div>
          
          <hr className="border-gray-200 dark:border-gray-700 my-6"/>
          
          <div className="flex flex-col items-center py-4 w-full rounded-xl bg-white justify-between px-4 sm:flex-row">
              <Link href="https://www.saynopest.com/">
                  <img className="w-auto h-12" src="SayNoPest-logo.svg" alt="SayNoPest Logo"/>
              </Link>
  
              <p className="mt-4 text-center text-gray-800 text-xs lg:text-left lg:text-sm sm:mt-0">
                ©Copyright Saynopest 2025. <br className="block lg:hidden"/> All Rights Reserved.
              </p>
          </div>
        </div>
      </footer>
    )
}