'use client';
import { useState } from 'react';
import { db } from '@/lib/firebase'; // adjust this import based on your Firebase setup
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Head from 'next/head';

export default function Page() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    pincode: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', pincode: '', address: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>Contact Say No Pest | Professional Pest Control Services</title>
        <meta name="description" content="Get in touch with Say No Pest for professional pest control services. Contact us for quotes, consultations, and expert pest removal solutions." />
        <meta name="keywords" content="contact pest control, pest control services, pest removal quote, professional extermination" />
        <link rel="canonical" href="https://www.saynopest.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Say No Pest | Professional Pest Control Services" />
        <meta property="og:description" content="Get in touch with Say No Pest for professional pest control services." />
        <meta property="og:url" content="https://www.saynopest.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Say No Pest | Professional Pest Control Services" />
        <meta name="twitter:description" content="Get in touch with Say No Pest for professional pest control services." />
      </Head>
   
    <div className="my-20 max-w-6xl mx-auto px-4">
     

      <div className="flex flex-col md:w-full pl-8 pt-4 md:flex-row justify-between mb-6 gap-12">
        {/* Contact Details on the Right Side */}
        <div className="w-full rounded-xl bg-gray-100 p-4 md:w-1/2 space-y-6">
          <div>
          <h2 className="text-3xl text-left font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 text-left text-gray-600">If you’d like to get in touch, please don’t hesitate to reach out to us using the information below.</p>
            <h3 className="text-xl font-medium text-primary mb-2">Address</h3>
            <p className="text-gray-600">16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">Phone</h3>
            <p className="text-gray-600">+121-7773-5600</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">Email</h3>
            <p className="text-gray-600"><a href="mailto:support@saynopest.com" className="text-primary">support@saynopest.com</a></p>
          </div>
        </div>

        {/* Contact Form on the Left Side */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-medium text-primary text-center mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-md hover:bg-green-700 transition-colors md:col-span-2"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && (
              <p className="text-green-600 md:col-span-2 text-center mt-4">Your message has been sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
