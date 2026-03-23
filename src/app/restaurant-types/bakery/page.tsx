'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Star, Zap, Clock, Target, Utensils, Users, Layout, ShoppingBag, Cake, ClipboardList, Store } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
]

const BakeryPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/women/${i + 10}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full tracking-tight">Choice of 2,460+ Bakeries</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-600" />
              BAKERY OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Scale Your <br />
              <span className="italic font-serif font-light text-red-600">Bakery Performance</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Dine360 helps you handle counter sales, custom cake orders, and operations from one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Start Today</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50 to-zinc-50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[0]} alt="Fresh Pastries" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Counter Speed</p>
                  <p className="text-white font-bold text-2xl">85% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[2]} alt="Custom Cakes" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Order Accuracy</p>
                  <p className="text-white font-bold text-2xl">30% Error Reduction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* POS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative h-[450px] w-full bg-zinc-50 rounded-[2.5rem] overflow-hidden">
             <Image src={CARD_IMAGES[1]} alt="Bakery POS" fill className="object-cover" />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute bottom-10 left-10 text-white z-10">
               <h3 className="text-3xl font-bold mb-2">POS Built for Bakery Counters</h3>
               <p className="text-zinc-100 max-w-sm">Handle counter sales quickly and efficiently.</p>
             </div>
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">POS SECTION</span>
               <h2 className="text-4xl font-bold">POS SYSTEM</h2>
             </div>
             <div className="grid gap-6">
                {[
                  "Fast billing for walk-in customers",
                  "Accept multiple payment methods",
                  "Real-time sales tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Check className="w-5 h-5" /></div>
                    <p className="font-semibold text-zinc-700 text-lg">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="inline-flex bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all w-fit uppercase text-sm tracking-wider">Get Started</Link>
           </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950 rounded-[3rem] text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-500 font-bold uppercase tracking-widest text-xs">ORDER MANAGEMENT SECTION</span>
               <h2 className="text-4xl font-bold">ORDER MANAGEMENT</h2>
               <h3 className="text-2xl text-zinc-400">Manage Custom & Bulk Orders</h3>
               <p className="text-zinc-500 italic max-w-md">Keep track of all bakery orders with ease.</p>
             </div>
             <div className="grid gap-4">
                {[
                  "Track custom cake orders",
                  "Manage advance bookings",
                  "Monitor order status"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-6 w-6 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 font-bold"></div>
                    <p className="text-zinc-300 font-medium">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all w-fit">Get Started</Link>
           </div>
           <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-600/5">
             <Image src={CARD_IMAGES[2]} alt="Cake Orders" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Counter / Service Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">COUNTER / SERVICE SECTION</span>
          <h2 className="text-4xl font-bold mt-2">SERVICE MANAGEMENT</h2>
          <p className="text-zinc-500 mt-4 text-xl italic max-w-2xl mx-auto">Handle High Customer Flow: Ensure smooth service during peak hours.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Queue Control", desc: "Manage customer queues", icon: Users },
             { title: "Takeaway Sync", desc: "Track takeaway orders", icon: ShoppingBag },
             { title: "Service Tempo", desc: "Improve service speed", icon: Zap }
           ].map((feature, i) => (
             <div key={i} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all">
               <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-600 mb-6 font-bold"><feature.icon className="w-7 h-7" /></div>
               <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
               <p className="text-zinc-500 mb-6">{feature.desc}</p>
               <Link href="/contact" className="text-red-600 font-bold hover:underline">Get Started </Link>
             </div>
           ))}
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50 rounded-[3rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden">
             <Image src={CARD_IMAGES[3]} alt="Bakery Display" fill className="object-cover" />
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">DIGITAL MENU SECTION</span>
               <h2 className="text-4xl font-bold">QR MENU</h2>
               <h3 className="text-2xl text-zinc-600 font-medium">Showcase Your Bakery Menu</h3>
               <p className="text-zinc-500 italic max-w-md">Let customers explore your offerings easily.</p>
             </div>
             <div className="grid gap-6">
                {[
                  "QR code menu access",
                  "Highlight cakes, pastries, and combos",
                  "Update menu instantly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-red-600 border border-zinc-100"><Check className="w-5 h-5" /></div>
                    <p className="font-bold text-zinc-700">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition-all text-center">Get Started</Link>
           </div>
        </div>
      </section>

      {/* Multi-Branch Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">MULTI-BRANCH SECTION</span>
          <h2 className="text-4xl md:text-5xl font-bold">MULTI LOCATION BAKERIES</h2>
          <h3 className="text-2xl text-zinc-500 font-light">Expand Your Bakery Business</h3>
          <p className="text-zinc-400 italic max-w-2xl">Manage multiple bakery outlets with centralized control.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Sales Sync", val: "Centralized Control", desc: "Monitor sales across locations" },
            { label: "Menu Master", val: "Global Updates", desc: "Manage menus centrally" },
            { label: "Data Insights", val: "Performance Hub", desc: "Track performance and analytics" }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-100 border border-zinc-100 text-center">
              <div className="h-16 w-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6"><Store className="w-8 h-8" /></div>
              <h4 className="text-xl font-bold mb-2">{stat.val}</h4>
              <p className="text-zinc-500 mb-6">{stat.desc}</p>
              <Link href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-700 transition-all">Get Started</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default BakeryPage
