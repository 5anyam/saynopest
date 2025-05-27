'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase'; // adjust this import based on your Firebase setup
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
    <div className="my-20 max-w-4xl mx-auto px-4">
      <h2 className="text-xl mb-4">Contact Us</h2>
      <p className="mb-6">If you&rsquo;d like to get in touch, please don&rsquo;t hesitate to reach out to us using the information below.</p>

      <div className="flex flex-col md:flex-row justify-center mb-6 gap-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2">Address</h2>
          <p>16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2">Phone</h2>
          <p>+121-7773-5600</p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2">Email</h2>
          <p><a href="mailto:example@example.com">support@saynopest.com</a></p>
        </div>
      </div>

      <h3 className="text-lg text-center mb-2 mt-10">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="border rounded p-2 md:col-span-2"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded hover:bg-green-600 transition md:col-span-2"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {success && (
          <p className="text-primary md:col-span-2">Your message has been sent successfully!</p>
        )}
      </form>
    </div>
  );
}
