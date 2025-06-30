'use client';

import { useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp
} from 'firebase/firestore';

// initialize Firebase (only once)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ...etc
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const db = getFirestore();

export default function BookNowForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Termite Control'
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'bookings'), {
        ...form,
        createdAt: Timestamp.fromDate(new Date())
      });
      setSent(true);
      setForm({ name: '', phone: '', address: '', service: 'Termite Control' });
    } catch (err) {
      console.error(err);
      alert('Submission failed, please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="p-6 bg-green-100 rounded-md text-green-800">
        Thanks for booking! We’ll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Your name"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Your phone number"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Your address"
        />
      </div>

      {/* Service (scrollable 5 items) */}
      <div>
        <label className="block text-sm font-medium">Service</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400
                     max-h-40 overflow-y-auto"
          size={5}
        >
          {[
            'Termite Control',
            'Rodent Removal',
            'General Pest Control',
            'Ants Control',
            'Bed Bugs Control',
            'Earwigs Control',
            'Silver Fish Control',
            'Flies Control',
            'Flea Control',
            'Mosquitoes Control',
            'Wasps Control',
            'Moths Control',
            'Ticks Control'
          ].map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Submitting…' : 'Submit'}
      </button>
    </form>
  );
}
