'use client';

import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, collection, addDoc } from 'firebase/firestore';

export default function EstimateModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', zip: '', address: '',
    phone1: '', phone2: '', phone3: '',
    service: '', comments: '',
  });

  // Auto-show modal logic with sessionStorage to prevent duplicates
  useEffect(() => {
    // Early return if not in browser
    if (typeof window === 'undefined') return;
    
    const hasSeenModal = localStorage.getItem('hasSeenEstimateModal');
    const isProcessingModal = sessionStorage.getItem('isProcessingModal');
    
    // Only proceed if user hasn't seen modal and we're not already processing
    if (!hasSeenModal && !isProcessingModal) {
      // Mark as processing immediately to prevent duplicate execution
      sessionStorage.setItem('isProcessingModal', 'true');
      
      const timer = setTimeout(() => {
        // Double check before showing (in case multiple useEffects fire)
        const stillProcessing = sessionStorage.getItem('isProcessingModal');
        if (stillProcessing) {
          setShowModal(true);
          localStorage.setItem('hasSeenEstimateModal', 'true');
          sessionStorage.removeItem('isProcessingModal');
        }
      }, 5000); // 5 seconds

      // Cleanup function
      return () => {
        clearTimeout(timer);
        // Only remove processing flag if timer was cleared before execution
        if (sessionStorage.getItem('isProcessingModal')) {
          sessionStorage.removeItem('isProcessingModal');
        }
      };
    }
  }, []); // Empty dependency array

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const phone = `${formData.phone1}-${formData.phone2}-${formData.phone3}`;
    const selectedService = formData.name.trim();

    if (!selectedService) {
      alert('Name is required to submit the form.');
      return;
    }

    try {
      const userDocRef = doc(db, "Bookings", selectedService);
      await addDoc(collection(userDocRef, "submissions"), {
        name: formData.name,
        email: formData.email,
        zip: formData.zip,
        address: formData.address,
        phone,
        service: formData.service,
        comments: formData.comments,
        timestamp: new Date()
      });

      alert('Submitted successfully!');
      setShowModal(false);
      setFormData({ name: '', email: '', zip: '', address: '', phone1: '', phone2: '', phone3: '', service: '', comments: '' });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to submit.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-green-700"
      >
        Book Now
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative">
            <button 
              onClick={closeModal} 
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center mb-6 text-green-600">READY TO GET STARTED?</h2>
            <p className="text-center text-sm text-gray-600 mb-4">Fill out the form below or call (217) 773-5600 for a free, no-obligation estimate.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="name" 
                required 
                onChange={handleChange} 
                value={formData.name} 
                placeholder="Name *" 
                className="text-gray-400 border p-2 w-full" 
              />
              <input 
                name="email" 
                required 
                onChange={handleChange} 
                value={formData.email} 
                placeholder="Email *" 
                className="text-gray-400 border p-2 w-full" 
              />
              <input 
                name="zip" 
                required 
                onChange={handleChange} 
                value={formData.zip} 
                placeholder="Zip Code *" 
                className="text-gray-400 border p-2 w-full" 
              />
              <input 
                name="address" 
                required 
                onChange={handleChange} 
                value={formData.address} 
                placeholder="Address *" 
                className="text-gray-400 border p-2 w-full" 
              />
              <div className="flex gap-2">
                <input 
                  name="phone1" 
                  onChange={handleChange} 
                  value={formData.phone1} 
                  placeholder="217" 
                  className="border p-2 w-1/3" 
                />
                <input 
                  name="phone2" 
                  onChange={handleChange} 
                  value={formData.phone2} 
                  placeholder="773" 
                  className="border p-2 w-1/3" 
                />
                <input 
                  name="phone3" 
                  onChange={handleChange} 
                  value={formData.phone3} 
                  placeholder="5600" 
                  className="border p-2 w-1/3" 
                />
              </div>

              <select 
                name="service" 
                required 
                onChange={handleChange} 
                value={formData.service} 
                className="border text-gray-400 p-2 w-full col-span-full"
              >
                <option value="">What Can We Help You With? *</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Ants Control">Ants Control</option>
                <option value="Bed Bugs Control">Bed Bugs Control</option>
                <option value="Earwigs Control">Earwigs Control</option>
                <option value="Silver Fish Control">Silver Fish Control</option>
                <option value="Flies Control">Flies Control</option>
                <option value="Flea Control">Flea Control</option>
                <option value="Mosquitoes Control">Mosquitoes Control</option>
                <option value="Wasps Control">Wasps Control</option>
                <option value="Moths Control">Moths Control</option>
                <option value="Ticks Control">Ticks Control</option>
              </select>

              <textarea 
                name="comments" 
                onChange={handleChange} 
                value={formData.comments} 
                placeholder="Questions or Comments" 
                className="border p-2 w-full col-span-full" 
              />
            </div>

            <div className="text-center mt-4">
              <button 
                onClick={handleSubmit} 
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </div>

            <p className="text-xs text-center mt-4 text-gray-500">
              This site is protected by reCAPTCHA and the Google&nbsp;
              <a href="https://www.saynopest.com/privacy-policy" className="underline">Privacy Policy</a> and <a href="https://www.saynopest.com/terms-and-conditions" className="underline">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
