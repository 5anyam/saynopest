
export function Hero() {
  return (
     <section className="bg-white mt-20 lg:mt-2">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">We dig the best. You ditch the pest!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Your go to best pest control companies across US.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 mb-2 text-sm lg:text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-green-800 focus:ring-4 focus:ring-primary-300">
                Get A Callback
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-sm lg:text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Contact Us
            </a> 
        </div>
        <div className="hidden ml-20 lg:mt-0 h-96 lg:col-span-5 lg:flex">
            <img src="pest-service.jpg" alt="pest-control"/>
        </div>                
    </div>
      <h2 className="text-center text-3xl py-6 text-primary font-black">Get Your Free Quote Now</h2>
      <div className="w-full max-w-4xl mx-auto p-4">
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Full Name */}
      <div className="flex items-center bg-gray-100 rounded border border-gray-300 p-3">
        <svg className="w-5 h-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
        </svg>
        <input type="text" placeholder="Full Name" className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500" />
      </div>

      {/* Pincode */}
      <div className="flex items-center bg-gray-100 rounded border border-gray-300 p-3">
        <svg className="w-5 h-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"/>
        </svg>
        <input type="text" placeholder="Pincode" className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500" />
      </div>

      {/* Address */}
      <div className="flex items-center bg-gray-100 rounded border border-gray-300 p-3">
        <svg className="w-5 h-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
        </svg>
        <input type="text" placeholder="Address" className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500" />
      </div>

      {/* Phone Number */}
      <div className="flex items-center bg-gray-100 rounded border border-gray-300 p-3">
        <svg className="w-5 h-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"/>
        </svg>
        <input type="text" placeholder="Phone Number" className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500" />
      </div>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center pt-4">
      <button type="submit" className="px-6 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition">
        Get Quotation Now
      </button>
    </div>
  </form>
</div>

    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full" src="home-img2.jpg" alt="dashboard image"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What we do at SayNoPest</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Our goal is simple – we are here to help you connect with good pest control service providers across the United States (both nationwide and locally). At SayNoPest, we compare rates, services, pest products, features, and customer reviews so that you can make the right decision. Our primary concern is to give you the best fit for your household and businesses. You can count on  SayNoPest- your go-to provider of the best pest control companies across the U.S.</p>
            <a href="#" className="inline-flex items-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  )
}