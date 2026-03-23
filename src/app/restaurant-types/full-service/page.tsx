'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Star, Zap, Clock, Target, Utensils, Users, Layout, Smartphone, Calendar, Menu, AreaChart } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550966841-3ee7adac1668?auto=format&fit=crop&q=80&w=600",
]

const FullServicePage = () => {
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
                  <Image src={`https://randomuser.me/api/portraits/thumb/women/${i + 30}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full tracking-tight">Choice of 2,460+ Full-Service Dining</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-600" />
              FULL-SERVICE RESTAURANTS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Scale Your <br />
              <span className="italic font-serif font-light text-red-600 text-nowrap">Service Performance</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed text-wrap">
              Dine360 unifies your table service, reservations, and kitchen operations to deliver a premium dining experience.
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
                <Image src={CARD_IMAGES[1]} alt="Elegant Service" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Guest Experience</p>
                  <p className="text-white font-bold text-2xl">90% Satisfaction</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Dine-in Floor" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white text-nowrap">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Turnover Speed</p>
                  <p className="text-white font-bold text-2xl">30% Improvement</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* POS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative h-[450px] w-full bg-zinc-50 rounded-[2.5rem] overflow-hidden shadow-2xl group">
             <Image src={CARD_IMAGES[3]} alt="Service POS" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end text-white">
               <Smartphone className="w-12 h-12 text-red-500 mb-6" />
               <h3 className="text-3xl font-bold mb-4">POS Built for Seamless Dining</h3>
               <p className="text-zinc-200 max-w-sm">Manage tables and counter sales efficiently.</p>
             </div>
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">POS SECTION</span>
               <h2 className="text-4xl font-bold uppercase">POS System</h2>
             </div>
             <div className="grid gap-6">
                {[
                  "Handle table and counter orders quickly",
                  "Accept multiple payment methods",
                  "Real-time sales tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Check className="w-5 h-5" /></div>
                    <p className="font-semibold text-zinc-700 text-lg tracking-tight">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="inline-flex bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all w-fit uppercase text-sm tracking-wider">Get Started</Link>
           </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-red-600/5 blur-[120px]" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-500 font-bold uppercase tracking-widest text-xs">ORDER MANAGEMENT SECTION</span>
               <h2 className="text-4xl font-bold uppercase">Order Management</h2>
               <h3 className="text-2xl text-zinc-400 font-medium tracking-tight">Track Every Dine-In Order</h3>
               <p className="text-zinc-500 italic max-w-sm">Keep service smooth from table to kitchen.</p>
             </div>
             <div className="grid gap-4">
                {[
                  "Monitor table status in real time",
                  "Handle multiple order types seamlessly",
                  "Reduce errors and improve kitchen flow"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-6 w-6 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-sm"></div>
                    <p className="text-zinc-300 font-medium">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all w-fit">Get Started</Link>
           </div>
           <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
             <Image src={CARD_IMAGES[2]} alt="Table Logic" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Table Management Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs tracking-tighter">TABLE / SERVICE SECTION</span>
          <h2 className="text-4xl font-bold mt-2 uppercase">Table Seating & Reservation</h2>
          <p className="text-zinc-500 mt-4 text-xl font-medium italic max-w-2xl mx-auto">Master Your Floor Management: Organize reservations and walk-ins effortlessly.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center text-nowrap">
           {[
             { title: "Floor Mastery", desc: "Manage table availability and seating flow", icon: Calendar },
             { title: "Waitlist Sync", desc: "Track reservations and walk-ins easily", icon: Users },
             { title: "Turnover Control", desc: "Increase efficiency and seating turnover", icon: Zap }
           ].map((feature, i) => (
             <div key={i} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all">
               <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-red-600 mx-auto mb-6"><feature.icon className="w-7 h-7" /></div>
               <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
               <p className="text-zinc-500 mb-6 text-wrap">{feature.desc}</p>
               <Link href="/contact" className="text-red-600 font-bold hover:underline">Get Started </Link>
             </div>
           ))}
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-zinc-100 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden border-2 border-zinc-100 group shadow-2xl">
             <Image src={CARD_IMAGES[1]} alt="Digital Menu" fill className="object-cover group-hover:scale-105 transition-all duration-1000" />
           </div>
           <div className="flex flex-col gap-8">
             <div className="space-y-2">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs">DIGITAL MENU SECTION</span>
               <h2 className="text-4xl font-bold">QR MENU</h2>
               <h3 className="text-2xl text-zinc-600">Elevate Your Dining Experience</h3>
               <p className="text-zinc-500 italic max-w-sm">Offer a modern digital menu built for full-service dining.</p>
             </div>
             <div className="grid gap-6">
                {[
                  "QR code menu access for diners",
                  "Highlight signature dishes and pairings",
                  "Instant menu updates across platforms"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-50 p-5 rounded-2xl border border-zinc-100 hover:border-red-100 transition-all">
                    <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>
                    <p className="font-bold text-zinc-700 tracking-tight">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition-all text-center">Get Started</Link>
           </div>
        </div>
      </section>

      {/* Multi-Branch Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-[3.5rem] bg-zinc-50">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">MULTI-BRANCH SECTION</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase">Scale Your Service Brand</h2>
          <h3 className="text-2xl text-zinc-600 font-light max-w-xl">Manage Multiple Locations with Centralized Control</h3>
          <p className="text-zinc-500 italic max-w-2xl px-4 text-wrap">Monitor sales across locations and handle menus centrally. Track performance and insights from one dashboard.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { tag: "Revenue", val: "Global Reporting", desc: "Monitor sales across locations", icon: AreaChart },
            { tag: "Operation", val: "Centralized Menus", desc: "Manage menus centrally", icon: Menu },
            { tag: "Synergy", val: "Brand Analytics", desc: "Track performance and insights", icon: Target }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -8 }} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 text-center flex flex-col items-center">
              <div className="h-16 w-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6"><stat.icon className="w-8 h-8" /></div>
              <p className="text-red-600 font-bold uppercase text-[10px] mb-2 tracking-[0.2em]">{stat.tag}</p>
              <h4 className="text-xl font-bold mb-2">{stat.val}</h4>
              <p className="text-zinc-500 mb-8 text-sm">{stat.desc}</p>
              <Link href="/contact" className="mt-auto bg-red-600 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-black transition-all">Get Started</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials 
        title="What Restaurant Owners Say" 
        subtitle="Success Stories" 
        testimonials={[{ quote: "Dine360 helped us manage our dining floor and service seamlessly. Our guests notice the difference in speed and organization.", author: "Full-Service Owner", role: "MD", image: "https://randomuser.me/api/portraits/men/45.jpg" }]} 
      />
      <FAQ title="Full-Service Restaurant Software FAQs" faqs={[{ question: "Is Dine360 suitable for full-service restaurants?", answer: "Yes. It is designed to handle reservation management, table seating, and complex orders." }, { question: "Can it handle reservations and table mapping?", answer: "Yes. Dine360 provides a complete floor layout and waitlist management system." }]} faqs2={[{ question: "Does it support inventory tracking?", answer: "Yes. You can manage ingredients and stock levels in real time." }, { question: "Can I monitor global performance?", answer: "Yes. Multi-location reporting is built-in." }]} />
      <Footer />
    </div>
  )
}

export default FullServicePage
