'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Zap, RefreshCw, Clock, Target, Utensils, Users, Beer, CreditCard, Star } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=600",
]

const PubPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full">Join 1,500+ Pubs & Bars</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-500" />
              PUB & BAR OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Run Your <br />
              <span className="italic font-serif font-light text-zinc-800">Pub & Bar Operations Smarter</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Manage drink orders, tables, and fast-paced service with a system built for pubs and bars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">Shop Now</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[1]} alt="Pint and Burger" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Order Delivery</p>
                  <p className="text-white font-bold text-2xl">85% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Bar Interior" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Sales Efficiency</p>
                  <p className="text-white font-bold text-2xl">30% Up</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">BAR SYSTEMS</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            Built for the <span className="text-red-600">Nightlife</span>.
          </motion.h2>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto">
            Speed is the key during busy shifts. Dine360 handles high volume effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "85%", desc: "Cut ticket times and increase table flips." },
            { label: "Higher Sales Efficiency", value: "30%", desc: "Smart upselling and faster billing." },
            { label: "Payment Processing", value: "100%", desc: "Secure and seamless for staff and guests." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 text-center">
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-zinc-900 font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" /></div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs text-nowrap">FAST-PACED FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Optimized Workflow</h2>
            <ul className="space-y-4">
              {[
                "Fast order entry for drinks and food",
                "Split billing and multiple payment methods (cash, card, digital)",
                "Real-time order tracking from bar/kitchen to table",
                "Monitor table availability and large group reservations"
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
              <Image src={CARD_IMAGES[3]} alt="Bar Service" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] text-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Exclusive Bar Features</h2>
          <p className="text-zinc-400">Streamline your nightlife operations with tools designed for speed and accuracy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Beer, title: "Draft Management", desc: "Track keg levels and reduce beverage waste." },
            { icon: Clock, title: "Happy Hour", desc: "Automate price changes for scheduled promotions." },
            { icon: CreditCard, title: "Pre-Auth Tabs", desc: "Secure payments by pre-authorizing customer cards." },
            { icon: Star, title: "VIP Service", desc: "Recognize and reward your most loyal nightlife patrons." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-red-600 rounded-[3rem] p-10 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Elevate Your <br />Bar Experience</h2>
              <p className="text-red-50 text-lg mb-8 opacity-90">Join the leading pubs using Dine360 to deliver exceptional service and maximize profitability.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-colors">Start Free Trial</Link>
                <Link href="/contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition-colors">Contact Sales</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full h-[300px] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse" />
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-white/20 rounded animate-pulse" />
                    <div className="w-24 h-3 bg-white/10 rounded animate-pulse" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-8 bg-white/10 rounded animate-pulse" />
                  <div className="w-full h-8 bg-white/10 rounded animate-pulse" />
                  <div className="w-3/4 h-8 bg-white/10 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PubPage
