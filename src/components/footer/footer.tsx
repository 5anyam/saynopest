
export function Footer() {
  return (
    <div className="bg-primary text-white">
    <div className="container px-6 py-6 mx-auto">
        
        <hr className="border-gray-200"/>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
                <p className="font-semibold text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact Us</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blogs</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Termites</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Mosquitoes</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Ants</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Spiders</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Services</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Privacy Policy</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Terms and conditions</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Disclaimer</a>
                    <a href="https://saynopest.com/sitemap.xml" className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Sitemap</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Contact Us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Digimach 10 LLC</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+121-7773-5600</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">support@saynopest.com</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
                <img className="w-auto h-12" src="SayNoPest-logo.svg" alt="logo"/>
            </a>

            <p className="mt-4 text-sm text-gray-800 sm:mt-0">© Copyright 2025. All Rights Reserved.</p>
        </div>
    </div>
</div>
  )
}