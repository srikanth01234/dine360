"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Hardware Cost",
      dine360: "$0",
      dine360Sub: "(Use your own)",
      others: "$2,000 – $5,000",
      othersSub: ""
    },
    {
      feature: "Monthly License",
      dine360: "1 Flat Fee",
      dine360Sub: "",
      others: "$150+ / mo",
      othersSub: ""
    },
    {
      feature: "Extra Tablet Fee",
      dine360: "$0",
      dine360Sub: "",
      others: "$50 / mo per tablet",
      othersSub: ""
    },
    {
      feature: "Employee Fee",
      dine360: "$0",
      dine360Sub: "",
      others: "$20 / mo per user",
      othersSub: ""
    }
  ];

  return (
    <section id="comparison" className="py-12 md:py-16 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-brand-red"></div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs">Dine 360 vs. Legacy POS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Why <span className="text-brand-red italic">Dine 360</span> wins<br className="hidden sm:block" />
            every single time.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            No hidden fees. No hardware trap. Just one flat price that makes luxury POS vendors very uncomfortable.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-[#1A1A1A] rounded-2xl md:rounded-[24px] overflow-hidden shadow-xl border border-white/5">
          <div className="grid grid-cols-12 relative">
            
            {/* Table Header */}
            <div className="col-span-4 p-4 md:p-6 flex items-center bg-[#e2dede]">
              <span className="text-gray-900  font-bold uppercase tracking-widest text-[10px] md:text-xs">Feature</span>
            </div>
            <div className="col-span-4 p-4 md:p-6 flex items-center justify-center bg-brand-red text-center">
              <span className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm">Dine 360</span>
            </div>
            <div className="col-span-4 p-4 md:p-6 flex items-center justify-center bg-[#1A1A1A] text-center border-l border-white/5">
              <span className="text-gray-100 font-bold uppercase tracking-widest text-[10px] md:text-sm">Others</span>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Feature Name */}
                <div className="col-span-4 p-4 md:p-6 flex items-center bg-white border-b border-gray-100">
                  <span className="text-gray-800 font-bold text-sm md:text-base">{item.feature}</span>
                </div>
                
                {/* Dine 360 Value */}
                <div className="col-span-4 p-4 md:p-6 flex flex-col items-center justify-center bg-[#FFF1F1] border-b border-brand-red/10 relative">
                  <div className="bg-brand-red text-white font-bold py-1.5 px-4 rounded-full shadow-md text-sm md:text-base">
                    {item.dine360}
                  </div>
                  {item.dine360Sub && (
                    <span className="text-brand-red font-semibold text-[10px] mt-1 uppercase tracking-tight hidden md:block">{item.dine360Sub}</span>
                  )}
                </div>

                {/* Others Value */}
                <div className="col-span-4 p-4 md:p-6 flex items-center justify-center bg-white border-b border-gray-100 border-l border-gray-100 text-center">
                  <div className="bg-red-50 text-brand-red/70 font-bold py-1.5 px-4 rounded-full border border-brand-red/10 text-sm md:text-base">
                    {item.others}
                  </div>
                </div>
              </React.Fragment>
            ))}

            {/* Always Included Row */}
            <div className="col-span-4 p-4 md:p-6 flex items-center bg-[#e2dede]">
              <span className="text-gray-900 font-medium text-[10px] md:text-sm">Use your own hardware</span>
            </div>
            <div className="col-span-4 p-4 md:p-6 flex items-center justify-center bg-brand-red text-center">
              <div className="flex items-center gap-2 text-white font-bold">
                <Check size={18} className="stroke-[3]" />
                <span className="uppercase text-[10px] md:text-xs hidden sm:inline">Always included</span>
              </div>
            </div>
            <div className="col-span-4 p-4 md:p-6 flex items-center justify-center bg-[#1A1A1A] text-center border-l border-white/5">
              <div className="flex items-center gap-2 text-gray-100 font-bold">
                <X size={18} className="stroke-[3]" />
                <span className="uppercase text-[10px] md:text-xs hidden sm:inline">Not available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text & CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-base font-medium">
                <span className="font-bold text-black uppercase">Stop overpaying.</span> Switch to Dine 360 and <br className="hidden md:block" />
                keep every dollar where it belongs.
            </p>
            <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-3 bg-brand-red text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-red/90 transition-all shadow-lg overflow-hidden"
            >
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </div>
    </section>
  );
  
};

export default ComparisonSection;
