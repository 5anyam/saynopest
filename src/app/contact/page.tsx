export default async function Page() {
  return (
    <div className="mt-20">
      <h2 className="text-xl mb-4">Contact Us</h2>
      <p className="mb-6">If you&rsquo;d like to get in touch, please don&rsquo;t hesitate to reach out to us using the information below.</p>

      <div className="flex flex-col md:flex-row justify-center  mb-6">
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Address</h2>
          <p>16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Phone</h2>
          <p>+121-7773-5600</p>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Email</h2>
          <p><a href="mailto:example@example.com">support433@saynopest.com</a></p>
        </div>
      </div>
    </div>
  );
}