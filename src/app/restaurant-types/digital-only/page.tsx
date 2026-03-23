'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Star, Zap, Clock, Target, Utensils, Users, Layout, Smartphone, Globe, BarChart3, Layers } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1615892715664-d8480396000e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=600",
]

const DigitalOnlyPage = () => {
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
                  <Image src={`https://randomuser.me/api/portraits/thumb/women/${i + 40}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full tracking-tight">Choice of 300+ Digital Brands</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-600" />
              DIGITAL-ONLY OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Scale Your <br />
              <span className="italic font-serif font-light text-red-600">Digital Performance</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Dine360 unifies all your online channels into one powerful command center for seamless digital-only restaurant management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Shop Now</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50 to-zinc-50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[0]} alt="Online Orders" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Online Growth</p>
                  <p className="text-white font-bold text-2xl">95% Increase</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[1]} alt="Digital Command" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Response Time</p>
                  <p className="text-white font-bold text-2xl">90% Faster</p>
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
             <Image src={CARD_IMAGES[3]} alt="Digital POS" fill className="object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-12 text-white">
               <Smartphone className="w-12 h-12 text-red-500 mb-6" />
               <h3 className="text-3xl font-bold mb-4">Manage Orders Without a Counter</h3>
               <p className="text-zinc-200 max-w-sm mb-8">Handle all online and delivery orders from one POS system.</p>
               <Link href="/contact" className="inline-flex bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold w-fit">Get Started</Link>
             </div>
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">POS SECTION</span>
               <h2 className="text-4xl font-bold">DIGITAL POS</h2>
             </div>
             <div className="grid gap-6">
                {[
                  "Manage orders from multiple platforms",
                  "Real-time order tracking",
                  "Secure online payments"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Check className="w-5 h-5" /></div>
                    <p className="font-semibold text-zinc-700 text-lg">{item}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-500 font-bold uppercase tracking-widest text-xs">ORDER MANAGEMENT SECTION</span>
               <h2 className="text-4xl font-bold">ORDER MANAGEMENT</h2>
               <h3 className="text-2xl text-zinc-400">Control Every Online Order</h3>
               <p className="text-zinc-500 max-w-md italic">Track and manage orders from all channels efficiently.</p>
             </div>
             <div className="grid gap-4">
                {[
                  "Monitor order status in real time",
                  "Manage high order volumes",
                  "Reduce order errors"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-6 w-6 rounded-full bg-red-600/20 flex items-center justify-center text-red-500"><Check className="w-4 h-4" /></div>
                    <p className="text-zinc-300 font-medium">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all w-fit">Get Started</Link>
           </div>
           <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800">
             <Image src={CARD_IMAGES[1]} alt="Order Control" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">SERVICE FLOW SECTION</span>
          <h2 className="text-4xl font-bold mt-2">DELIVERY MANAGEMENT</h2>
          <p className="text-zinc-500 mt-4 text-xl">Optimize Delivery Operations</p>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-2 italic">Ensure smooth delivery flow and faster order processing.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Track Logistics", desc: "Track incoming delivery orders", icon: Globe },
             { title: "Prep Timelines", desc: "Manage preparation timelines", icon: Clock },
             { title: "Efficiency Boost", desc: "Improve delivery efficiency", icon: Zap }
           ].map((feature, i) => (
             <div key={i} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all text-center">
               <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-600 mx-auto mb-6"><feature.icon className="w-7 h-7" /></div>
               <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
               <p className="text-zinc-500 mb-6">{feature.desc}</p>
               <Link href="/contact" className="text-red-600 font-bold hover:underline">Get Started </Link>
             </div>
           ))}
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-zinc-100 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
             <Image src={CARD_IMAGES[2]} alt="Digital Menu" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">DIGITAL MENU SECTION</span>
               <h2 className="text-4xl font-bold">DIGITAL MENU</h2>
               <h3 className="text-2xl text-zinc-600">Manage Your Online Menu Easily</h3>
               <p className="text-zinc-500 italic">Control your menu across all platforms from one place.</p>
             </div>
             <div className="grid gap-6">
                {[
                  "Update menu items instantly",
                  "Sync menus across platforms",
                  "Highlight offers and combos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                    <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>
                    <p className="font-bold text-zinc-800">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition-all text-center">Get Started</Link>
           </div>
        </div>
      </section>

      {/* Multi-Brand Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-white to-red-50/30">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="flex items-center gap-3">
             <div className="h-[2px] w-12 bg-red-600" />
             <span className="text-red-600 font-bold uppercase tracking-widest text-xs">MULTI-BRAND / MULTI-LOCATION SECTION</span>
             <div className="h-[2px] w-12 bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">MULTI BRAND OPERATIONS</h2>
          <h3 className="text-2xl font-light text-zinc-600">Run Multiple Brands from One System</h3>
          <p className="text-zinc-500 max-w-2xl italic">Operate multiple virtual brands or kitchens with centralized control.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ease of Use", desc: "Manage multiple brands easily", icon: Layers },
            { title: "Performance Sync", desc: "Track performance of each brand", icon: BarChart3 },
            { title: "Revenue Flow", desc: "Monitor revenue and analytics", icon: BarChart3 }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col items-center">
              <div className="h-16 w-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6"><stat.icon className="w-8 h-8" /></div>
              <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
              <p className="text-zinc-500 text-center mb-6">{stat.desc}</p>
              <Link href="/contact" className="mt-auto bg-red-600 text-white px-6 py-2 rounded-xl font-bold">Get Started</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials 
        title="What Digital Restaurant Owners Say" 
        subtitle="Success Stories" 
        testimonials={[{ quote: "Dine360 helped us manage multiple online brands from one kitchen. Everything is organized, and order processing is much faster.", author: "Cloud Kitchen Owner", role: "Founder", image: "https://randomuser.me/api/portraits/women/62.jpg" }]} 
      />
      <FAQ title="Digital-Only Software FAQs" faqs={[{ question: "Is Dine360 suitable for digital-only restaurants?", answer: "Yes. Dine360 is designed for delivery-first and online-only restaurant operations." }, { question: "Can it manage multiple delivery platforms?", answer: "Yes. Orders from multiple platforms can be handled in one dashboard." }]} />
      <Footer />
    </div>
  )
}

export default DigitalOnlyPage
