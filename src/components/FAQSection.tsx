'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Get answers to common questions." 
}: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-center mb-8">
          {subtitle}
        </p>
      )}
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}
