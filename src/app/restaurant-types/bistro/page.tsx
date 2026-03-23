'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Zap, RefreshCw, Clock, Target, Utensils, Users, Layout, Sparkles } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1550966841-3ee5ad0110c3?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
]

const BistroPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-red-100 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/women/${i + 80}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-red-900 text-xs font-medium bg-red-50 px-2.5 py-1 rounded-full text-nowrap tracking-tight">Choice of 1,500+ Local Bistros</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-500" />
              BISTRO MANAGEMENT
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Refine Your <br />
              <span className="italic font-serif font-light text-red-800">Bistro Hospitality</span>
            </h1>
            <p className="text-lg text-zinc-800/70 max-w-lg leading-relaxed">
              Combine classic hospitality with modern tech for seamless bistro service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Shop Now</Link>
              <Link href="/contact" className="bg-zinc-900 hover:bg-black text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-zinc-50/50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[3]} alt="Bistro Interior" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-red-950/90 via-red-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-red-200 font-medium tracking-wide uppercase mb-0.5">Guest Order Processing</p>
                  <p className="text-white font-bold text-2xl">80% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Fresh Bistro Food" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-red-950/90 via-red-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-red-200 font-medium tracking-wide uppercase mb-0.5">Daily Volume</p>
                  <p className="text-white font-bold text-2xl">25% Growth</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-red-50/30 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16 text-zinc-900">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs text-nowrap">BISTRO EFFICIENCY</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            Streamlined <span className="text-red-600 font-serif italic">Bistro Sales Efficiency</span>.
          </motion.h2>
          <p className="text-base text-red-800/70 max-w-2xl mx-auto text-center">
            Dine360 provides the reliability and features that bistro owners need to manage high seat turnover and impeccable service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "80%", desc: "Communicate with the kitchen instantly." },
            { label: "Increase Table Volume", value: "25%", desc: "Manage short-lived bursts of guest volume effortlessly." },
            { label: "Reliable Experience", value: "100%", desc: "High-speed and reliable transaction processing." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-red-100/50 text-center">
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-zinc-900 font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-800/60 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-zinc-900">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-600 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-600 rounded-full" /></div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-xs text-nowrap text-center">UNIQUE BISTRO FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Fast Service and Ease of Use</h2>
            <ul className="space-y-4">
              {[
                "Highly intuitive POS with lightning-fast order entry for diverse menus",
                "Advanced customer loyalty and digital points with email/SMS integration",
                "Table reservations and walk-in waitlist management during rush hours",
                "Real-time order tracking and kitchen display systems (KDS)"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors"><Check className="w-3.5 h-3.5" /></div>
                  <span className="text-zinc-950/70 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] w-full order-1 lg:order-2">
            <motion.div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-red-100 p-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Image src={CARD_IMAGES[2]} alt="Bistro Dining Area" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600/10 -skew-x-12 -translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
                <Image src={CARD_IMAGES[4]} alt="Bistro Detail" width={600} height={400} className="w-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-red-600 p-8 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-white font-bold text-3xl mb-1">100%</p>
                <p className="text-red-100 text-xs font-medium uppercase tracking-wider">Cloud Reliable</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-xs mb-6">
                <div className="h-[1px] w-6 bg-red-500" />
                CLASSIC MEETS DIGITAL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Modern Tools for <br />
                <span className="text-red-500">Charming Bistros</span>
              </h2>
              <div className="grid gap-6">
                {[
                  { icon: Layout, title: "Menu Agility", desc: "Update your chalkboard specials across all digital menus in seconds." },
                  { icon: Users, title: "Table Management", desc: "Optimize floor space and seating for maximum comfort and turnover." },
                  { icon: RefreshCw, title: "Auto Inventory", desc: "Track ingredients and stock levels automatically as orders are placed." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500 flex-shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">{feature.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BistroPage
