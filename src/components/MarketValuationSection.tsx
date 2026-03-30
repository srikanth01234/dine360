'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart3, Globe2 } from 'lucide-react';

const MarketValuationSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-rose-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-rose-600"></span>
                MARKET VALUATION SECTION
              </h2>
              <h3 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-none mb-8">
                DATA DRIVEN INSIGHTS
              </h3>
              <p className="text-zinc-800 text-lg leading-relaxed max-w-2xl">
                The restaurant industry is rapidly evolving with the adoption of digital tools and automation. 
                Restaurants worldwide are investing in smart management systems to improve efficiency, 
                reduce operational complexity, and deliver better customer experiences.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Globe2 className="text-rose-600 w-5 h-5" />
              <span className="font-bold text-xl text-zinc-900">2026 OUTLOOK</span>
            </div>
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest font-bold">Industry Evolution</p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-10 rounded-3xl bg-white border-2 border-zinc-200 hover:border-rose-400 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-rose-600 transition-colors">
              <TrendingUp className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-4">Market Growth</h4>
            <p className="text-zinc-800 leading-relaxed text-sm">
              Dine360 is positioned at the center of this transformation — providing modern restaurant management solutions designed for the next generation of dining businesses.
            </p>
          </motion.div>

          {/* Item 2 - Featured */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-zinc-900 text-white shadow-2xl border-2 border-rose-500/30 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart3 className="w-24 h-24" />
             </div>
            <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mb-8">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-4">Adaptation</h4>
            <p className="text-zinc-100 leading-relaxed text-sm">
              Our platform helps restaurants adapt to changing customer expectations while maintaining operational control and scalability.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-10 rounded-3xl bg-white border-2 border-zinc-200 hover:border-rose-400 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-rose-600 transition-colors">
              <Target className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-4">Scalability</h4>
            <p className="text-zinc-800 leading-relaxed text-sm">
              Maintain full control over your operations as you scale, using data-driven insights to optimize every aspect of your restaurant.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MarketValuationSection;
