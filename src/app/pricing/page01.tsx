"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PricingPageVersionTwo = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-black selection:bg-red-600 selection:text-white pt-24">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-16 text-center relative overflow-hidden">
        {/* Decorative Background Text "PRICING" */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 select-none pointer-events-none opacity-[0.03] text-[20vw] font-black whitespace-nowrap tracking-tighter uppercase italic">
          PRICING
        </div>

        {/* Section Header */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-8 bg-brand-red"></div>
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">Transparent Pricing</span>
            <div className="h-[2px] w-8 bg-brand-red"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
            Simple Plans for<br />
            <span className="text-brand-red italic underline decoration-brand-red/20 underline-offset-8">Every Restaurant</span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Affordable, scalable restaurant management tools designed to grow with your business — whether you run one outlet or many.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-left relative"
          >
            <div className="mb-10">
              <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4 block">Starter</span>
              <h2 className="text-4xl font-serif font-bold mb-3">Single Outlet</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                Perfect for independent restaurants getting started with smart POS.
              </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-10"></div>

            <div className="mb-10">
              <span className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[10px] mb-4 block">Starting at</span>
              <div className="flex items-start">
                <span className="text-3xl font-serif font-bold mt-1">$</span>
                <span className="text-8xl font-serif font-black tracking-tighter leading-none">200</span>
              </div>
              <p className="text-gray-500 font-medium text-sm mt-4">
                per month · flat fee
              </p>
            </div>

            <ul className="space-y-5 mb-12">
              {[
                "Unlimited tablets — no extra charge",
                "Unlimited staff accounts",
                "Use your own hardware",
                "Core POS & order management"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-[#FFF1F1] p-1 rounded-full">
                    <Check size={14} className="text-brand-red stroke-[3]" />
                  </div>
                  <span className="text-gray-700 font-medium text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white border-2 border-black text-black font-bold py-6 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Feature List Bottom */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {[
            "No hardware costs",
            "No per-tablet fees",
            "No per-user charges",
            "Cancel anytime"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform"></div>
              <span className="text-gray-500 font-bold text-sm tracking-tight">{item}</span>
              {idx < 3 && <div className="hidden lg:block w-px h-10 bg-gray-200 ml-8"></div>}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPageVersionTwo;
