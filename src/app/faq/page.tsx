'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Minus, Search, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Data Structure
const faqCategories = [
  { id: 'general', label: 'General' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'technical', label: 'Technical' },
  { id: 'support', label: 'Support' },
];

const faqData = {
  general: [
    {
      question: "What is Dine360?",
      answer: "Dine360 is an all-in-one restaurant management platform that helps restaurants manage orders, billing, inventory, reservations, kitchen workflows, and analytics from a single system."
    },
    {
      question: "What types of restaurants can use Dine360?",
      answer: "Dine360 is designed for all restaurant formats including fast food outlets, cafés, bakeries, food trucks, ghost kitchens, fine dining restaurants, and multi-branch restaurant chains."
    },
    {
      question: "Is Dine360 suitable for small restaurants?",
      answer: "Yes. Dine360 is built to scale from small cafés and quick-service restaurants to large multi-location restaurant businesses."
    },
    {
      question: "Can Dine360 manage multiple branches?",
      answer: "Yes. Dine360 supports multi-branch restaurants with centralized dashboards, branch-wise reports, and unified operational control."
    }
  ],
  features: [
    {
      question: "What features does Dine360 offer?",
      answer: "Dine360 includes essential restaurant management tools such as POS billing, kitchen display system (KDS), table reservations, inventory management, sales analytics, CRM, purchase management, and delivery integrations."
    },
    {
      question: "Does Dine360 support kitchen display systems (KDS)?",
      answer: "Yes. Dine360 provides a real-time Kitchen Display System that sends orders directly from the POS to the kitchen screen, improving speed and reducing errors."
    },
    {
      question: "Can I manage table reservations with Dine360?",
      answer: "Yes. The table reservation system allows you to track reservations, manage walk-ins, view table availability, and control seating from a visual floor layout."
    },
    {
      question: "Does Dine360 track inventory automatically?",
      answer: "Yes. Inventory levels update automatically as orders are processed, helping you track ingredients and receive low-stock alerts."
    }
  ],
  pricing: [
    {
      question: "How much does Dine360 cost?",
      answer: "Dine360 offers flexible pricing plans designed for restaurants of different sizes. Pricing varies depending on the number of users, branches, and advanced features required."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes. Dine360 offers a free trial so restaurants can explore the platform and test its features before choosing a subscription plan."
    },
    {
      question: "Are there any setup fees?",
      answer: "In most cases, there are no hidden setup costs. Our team assists with onboarding to ensure a smooth implementation."
    }
  ],
  technical: [
    {
      question: "Does Dine360 work on tablets and desktops?",
      answer: "Yes. Dine360 is cloud-based and works on desktops, tablets, and compatible POS devices."
    },
    {
      question: "Does the POS work if the internet goes down?",
      answer: "Yes. Dine360 includes offline functionality so your POS continues running even if the internet connection temporarily drops."
    },
    {
      question: "Is restaurant data secure?",
      answer: "Yes. Dine360 uses secure cloud infrastructure and encrypted data storage to protect restaurant and customer information."
    }
  ],
  support: [
    {
      question: "What kind of support does Dine360 provide?",
      answer: "Dine360 offers dedicated customer support including onboarding assistance, technical help, and system training."
    },
    {
      question: "Is training provided for staff?",
      answer: "Yes. Our onboarding team provides training to ensure your staff can quickly learn and use the system efficiently."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact the Dine360 support team through email, phone, or the support portal available inside the platform."
    },
    {
      question: "Can I request a product demo?",
      answer: "Yes. You can request a live demo to see how Dine360 works and how it can improve your restaurant operations."
    }
  ]
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-75 flex items-center justify-center overflow-hidden bg-zinc-900 pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="FAQ Background"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Find answers to common questions about Dine360’s features, setup, pricing, and support to help you get started quickly.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-10 relative z-20 pb-24">
        
        {/* Category Tabs - Hidden if only one category */}
        {faqCategories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestionIndex(null); 
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md ${
                  activeCategory === category.id
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Accordion Questions */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {(faqData[activeCategory as keyof typeof faqData] || []).map((item, index) => (
                <div 
                  key={index} 
                  className="mb-4 rounded-2xl overflow-hidden bg-white border border-zinc-200 transition-all duration-300 hover:border-zinc-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span 
                      className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                        openQuestionIndex === index ? 'text-rose-600' : 'text-zinc-900 group-hover:text-zinc-700'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div 
                      className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openQuestionIndex === index ? 'bg-rose-600 text-white rotate-180' : 'bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200'
                      }`}
                    >
                       <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openQuestionIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-zinc-600 text-sm md:text-base leading-relaxed border-t border-zinc-100 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-4">Can't find what you're looking for?</p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20">
                Contact Support
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
