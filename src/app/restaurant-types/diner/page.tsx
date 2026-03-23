'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Zap, RefreshCw, Clock, Target, Utensils, Users, Layout } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1543353071-097072382f14?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1520699912061-0d3a54d5801c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1502301103665-0b95cc738def?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
]

const DinerPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-950">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 50}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-50 px-2.5 py-1 rounded-full text-nowrap">Serving 1,200+ American Diners</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-500" />
              DINER MANAGEMENT
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
              Modern Efficiency <br />
              <span className="italic font-serif font-light text-zinc-800">For Your Diner</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Handle breakfast rushes, 24/7 service, and complex orders with a robust, reliable system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Shop Now</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[1]} alt="Pancake Breakfast" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-200 font-medium tracking-wide uppercase mb-0.5">Kitchen Speed</p>
                  <p className="text-white font-bold text-2xl">85% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Classic Diner Booth" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-200 font-medium tracking-wide uppercase mb-0.5">Daily Volume</p>
                  <p className="text-white font-bold text-2xl">30% Growth</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/30 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16 text-zinc-950">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs text-nowrap">CLASSIC TASTE, MODERN TECH</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The <span className="text-red-600 font-serif italic">Perfect Partner</span> for Your Diner.
          </motion.h2>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto">
            Dine360 provides the reliability and features that diner owners need to manage high seat turnover and 24/7 service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "85%", desc: "Synchronize kitchen and floor staff instantly." },
            { label: "Higher Guest Volume", value: "30%", desc: "Manage high seat turnover without the stress." },
            { label: "Always Available", value: "100%", desc: "Cloud backup and offline mode for 24/7 uptime." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 text-center">
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-zinc-950 font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-600 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-zinc-950">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-600 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-600 rounded-full" /></div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-xs text-nowrap">DINER-SPECIFIC FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Fast Service and Ease of Use</h2>
            <ul className="space-y-4">
              {[
                "Highly intuitive POS for multi-option menu (breakfast, lunch, dinner)",
                "Support for split billing and fast payment methods",
                "Table reservations and walk-in waitlist management",
                "Advanced inventory tracking for fresh ingredients and diverse menus"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors"><Check className="w-3.5 h-3.5" /></div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] w-full order-1 lg:order-2">
            <motion.div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Image src={CARD_IMAGES[3]} alt="Waitress and Diner Counter" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mb-32 -mr-32 blur-3xl group-hover:bg-red-600/20 transition-colors duration-700" />
            <h3 className="text-3xl font-bold mb-6">Built for 24/7 Operations</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">Our system is engineered for maximum uptime, ensuring your diner never misses a beat, even in the middle of the night.</p>
            <ul className="space-y-4 mb-10">
              {["Offline Mode Support", "Automatic Cloud Backups", "24/7 Priority Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center text-red-500"><Check className="w-3 h-3" /></div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all">
              Learn about reliability <Zap className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-red-600 rounded-[3rem] p-12 text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Modernize?</h3>
            <p className="text-red-100 mb-10 max-w-sm">Join the next generation of American diners choosing Dine360 for their operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Link href="/contact" className="flex-1 bg-white text-red-600 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-colors">Get Started</Link>
              <Link href="/contact" className="flex-1 bg-black text-white py-4 rounded-2xl font-bold hover:bg-zinc-900 transition-colors">Book Demo</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default DinerPage
