'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Zap, RefreshCw, Clock, Target, Utensils, Users, Coffee } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600",
]

const CoffeeHousePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-100 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 40}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-50 px-2.5 py-1 rounded-full text-nowrap">Powering 2,000+ Coffee Houses</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-500" />
              COFFEE HOUSE OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Power Your <br />
              <span className="italic font-serif font-light text-zinc-800">Coffee House Smarter</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Efficient ordering and guest management built specifically for the needs of coffee shops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Shop Now</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-zinc-50/50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[1]} alt="Latte Art" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Order Delivery</p>
                  <p className="text-white font-bold text-2xl">80% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Coffee Beans" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Sales Efficiency</p>
                  <p className="text-white font-bold text-2xl">25% Up</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6 text-nowrap">
            <div className="h-[1px] w-8 bg-red-400" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">BREW BETTER BUSINESS</span>
            <div className="h-[1px] w-8 bg-red-400" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            Elevate Your <span className="text-red-700 font-serif italic text-nowrap">Coffee Shop Experience</span>.
          </motion.h2>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto">
            Our platform allows you to manage orders, inventory, and staff effortlessly during peak morning rushes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "80%", desc: "Cut queue times and keep the lines moving." },
            { label: "Higher Sales Efficiency", value: "25%", desc: "Upsell with smart loyalty and pastry pairings." },
            { label: "Reliable Performance", value: "100%", desc: "Smooth transactions for peak high-volume shifts." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 text-center">
              <p className="text-red-700 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-zinc-900 font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-zinc-900">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-600 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-600 rounded-full text-nowrap" /></div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-xs text-nowrap">CAFFEINE CENTERED FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Specialized Coffee Workflow</h2>
            <ul className="space-y-4">
              {[
                "Lightning-fast POS for high-speed morning transactions",
                "Advanced customer loyalty program with digital points and rewards",
                "Self-service ordering via mobile or kiosk to reduce queue wait times",
                "Manage complex beverage modifications and inventory for fresh beans"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-700 group-hover:bg-red-600 group-hover:text-white transition-colors"><Check className="w-3.5 h-3.5" /></div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] w-full order-1 lg:order-2">
            <motion.div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Image src={CARD_IMAGES[2]} alt="Barista at Work" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-red-600/10 to-transparent opacity-50" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Brewing Success with Modern Tech</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Coffee, title: "Custom Orders", desc: "Manage milk types, syrups, and temperatures effortlessly." },
                { icon: Zap, title: "Speed Mode", desc: "One-tap ordering for your most popular brews." },
                { icon: Clock, title: "Peak Analytics", desc: "Identify your busiest hours and staff accordingly." },
                { icon: Target, title: "Loyalty Integration", desc: "Keep customers coming back with digital punch cards." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-red-600 p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-3xl font-bold mb-6">Ready to scale your coffee business?</h3>
              <p className="text-red-100 mb-8 max-w-md">Join hundreds of roasteries and cafes that have streamlined their operations with Dine360.</p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="bg-white text-red-600 py-4 rounded-2xl font-bold text-center hover:bg-zinc-100 transition-colors">Start Your Free Trial</Link>
                <Link href="/contact" className="bg-black text-white py-4 rounded-2xl font-bold text-center hover:bg-zinc-900 transition-colors">Book a Live Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default CoffeeHousePage
