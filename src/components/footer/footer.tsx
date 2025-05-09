
import { GrInstagram } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
import Link from "next/link";

export function Footer() {
    return (
      <div className="bg-primary rounded-xl text-white">
      <div className="container px-8 py-6">
          
  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                  <p className="font-semibold text-xl text-white">Quick Link</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Home</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Contact Us</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">About Us</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Blogs</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white">Services</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Termites</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Mosquitoes</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Ants</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Spiders</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white dark:text-white">Useful Links</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link href="https://www.saynopest.com/privacy-policy"><a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Privacy Policy</a></Link>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Terms and conditions</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Disclaimer</a>
                      <a href="https://saynopest.com/sitemap.xml" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Sitemap</a>
                  </div>
              </div>
  
              <div className="mb-5">
                  <p className="font-semibold text-xl text-white dark:text-white">Contact Us</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                  <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">Digimach 10 LLC</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">+121-7773-5600</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:text-blue-500">support@saynopest.com</a>
                     <div className="flex flex-row items-center">
                     <Link href="https://www.facebook.com/people/Saynopest/61575434679519/"><RiFacebookBoxLine className="text-white text-3xl" /></Link>
                    <Link href="https://www.instagram.com/saynopest/"><GrInstagram className="text-white mx-2 text-2xl"/></Link>
                    <Link href="https://www.linkedin.com/company/saynopest/"><TbBrandLinkedin className="text-white text-3xl"/></Link>
                        </div> 
                  </div>
              </div>
          </div>
          
          <hr className="border-gray-200 dark:border-gray-700"/>
          
          <div className="flex flex-col items-center py-2 w-full rounded-xl mt-5 bg-white justify-between sm:flex-row">
              <a href="#">
                  <img className="ml-2 w-auto h-12" src="SayNoPest-logo.svg" alt="logo"/>
              </a>
  
              <p className="mt-4 text-sm text-center text-gray-800 text-xs lg:text-left lg:text-sm sm:mt-0">©Copyright Saynopest 2025. <br className="block lg:hidden"/> All Rights Reserved.</p>
          </div>
      </div>
  </div>
    )
  }