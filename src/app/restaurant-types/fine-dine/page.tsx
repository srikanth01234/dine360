'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Star, Zap, Clock, Target, Utensils, Users, Layout, Smartphone, Calendar, Menu, AreaChart, Award } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
]

const FineDiningPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center text-nowrap">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative border border-zinc-100">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-[10px] font-bold bg-zinc-100 px-3 py-1.5 rounded-full tracking-tighter border border-zinc-200 uppercase">PREMIUM CHOICE OF 850+ ESTABLISHMENTS</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-[0.3em] uppercase text-[10px]">
              <div className="h-[1px] w-8 bg-red-600" />
              FINE DINING ELEVATION
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[0.95]">
              ELEVATE YOUR <br />
              <span className="italic font-serif font-light text-red-600">GUEST EXPERIENCE</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-lg leading-relaxed text-wrap font-medium">
              Dine360 provides the precision and sophistication required for high-end dining, from flawless reservations to elite table service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 group/btn">
              <Link href="/contact" className="bg-red-600 hover:bg-black text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-red-600/10 active:scale-95 text-nowrap text-center">Start Today</Link>
              <Link href="/contact" className="border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 px-10 py-[14px] rounded-xl font-bold text-sm uppercase tracking-widest transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1200px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-50/50 to-transparent rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0 flex items-center justify-center">
              <motion.div className="w-80 h-[500px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white z-20 relative" initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1 }}>
                <Image src={CARD_IMAGES[2]} alt="Fine Dining" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end text-white text-nowrap">
                   <Award className="w-10 h-10 text-red-500 mb-4" />
                   <p className="text-[10px] text-red-500 font-bold tracking-[0.2em] mb-1">MEMBER STATUS</p>
                   <p className="text-2xl font-bold">Platinum Tier</p>
                </div>
              </motion.div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 h-[400px] w-64 bg-zinc-100 rounded-[2.5rem] -z-10 opacity-50 border border-zinc-200" />
            </div>
          </div>
        </div>
      </main>

      {/* POS Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative h-[550px] w-full bg-zinc-50 rounded-[3rem] overflow-hidden">
             <Image src={CARD_IMAGES[0]} alt="Luxe POS" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end text-white text-nowrap">
               <Smartphone className="w-10 h-10 text-red-500 mb-6" />
               <h3 className="text-4xl font-bold mb-4">Precision and Luxury in Every Order</h3>
               <p className="text-zinc-300 max-w-sm text-wrap text-lg leading-relaxed">Tailored for fine dining, our POS ensures a sophisticated ordering experience without compromising on speed or accuracy.</p>
             </div>
           </div>
           <div className="flex flex-col gap-10">
             <div className="space-y-4">
               <span className="text-red-600 font-extrabold uppercase tracking-widest text-[10px] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">POS SECTION</span>
               <h2 className="text-5xl font-bold uppercase tracking-tight">POS System</h2>
             </div>
             <div className="grid gap-8">
                {[
                  "Process high-end orders seamlessly",
                  "Support for complex menu modifiers",
                  "Monitor table status from any system"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="h-12 w-12 rounded-2xl bg-zinc-950 flex items-center justify-center text-white group-hover:bg-red-600 transition-all shadow-lg"><Check className="w-6 h-6" /></div>
                    <p className="font-bold text-zinc-900 text-xl tracking-tight">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="inline-flex bg-zinc-950 text-white px-12 py-4 rounded-xl font-bold hover:bg-red-600 transition-all w-fit uppercase text-xs tracking-[0.2em] shadow-xl">Inquire Now</Link>
           </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950 rounded-[4rem] text-white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="flex flex-col gap-10">
             <div className="space-y-4">
               <span className="text-red-500 font-bold uppercase tracking-widest text-xs">ORDER MANAGEMENT SECTION</span>
               <h2 className="text-5xl font-bold uppercase">Order Clarity</h2>
               <h3 className="text-3xl text-zinc-400 font-light tracking-tight italic">Deliver Every Dish Perfectly</h3>
               <p className="text-zinc-500 max-w-md leading-relaxed">Maintain elite standards by tracking every detail of the guest journey from kitchen preparation to final presentation.</p>
             </div>
             <div className="grid gap-6">
                {[
                  "Custom dish modifications for premium clients",
                  "Track VIP orders in real time",
                  "Coordinate with the kitchen effortlessly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 border-l-2 border-red-600/30 pl-6 py-2 hover:border-red-600 transition-all">
                    <p className="text-zinc-200 font-bold text-lg tracking-tight whitespace-nowrap">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all w-fit uppercase text-xs tracking-widest">Connect With Us</Link>
           </div>
           <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border-8 border-zinc-900 shadow-2xl">
             <Image src={CARD_IMAGES[3]} alt="Elite Order Tech" fill className="object-cover" />
           </div>
        </div>
      </section>

      {/* Table Management Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20 text-nowrap">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs tracking-tighter bg-red-50 px-4 py-2 rounded-full">TABLE & RESERVATION SECTION</span>
          <h2 className="text-5xl font-bold mt-6 uppercase tracking-tighter">Sophisticated Seating</h2>
          <p className="text-zinc-500 mt-6 text-xl max-w-2xl mx-auto text-wrap font-medium">Coordinate elite reservations and maintain exclusive guest experiences with visual floor management.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 text-nowrap">
           {[
             { title: "Floor Mastery", desc: "Interactive, high-res layouts", icon: Layout },
             { title: "Guest Profiling", desc: "Track preferences and VIP history", icon: Users },
             { title: "Smart Scheduling", desc: "Automate complex seating logic", icon: Calendar }
           ].map((feature, i) => (
             <div key={i} className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100 hover:border-red-100 transition-all flex flex-col items-center">
               <div className="h-20 w-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-red-600 mb-8"><feature.icon className="w-10 h-10" /></div>
               <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
               <p className="text-zinc-500 mb-10 text-wrap text-center font-medium leading-relaxed">{feature.desc}</p>
               <Link href="/contact" className="text-red-600 font-extrabold text-sm uppercase tracking-widest hover:tracking-[0.3em] transition-all">Learn More</Link>
             </div>
           ))}
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative h-[650px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white group">
             <Image src={CARD_IMAGES[1]} alt="Luxury Digital Menu" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-x-8 bottom-8 p-10 bg-black/80 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-white">
                <p className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-2">DYNAMIC PRESENTATION</p>
                <h4 className="text-2xl font-bold mb-2">Interactive Wine Lists</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Showcase your curated selection with high-resolution imagery and tasting notes.</p>
             </div>
           </div>
           <div className="flex flex-col gap-10">
             <div className="space-y-4">
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs border-b border-red-600">QR CODE MENU SECTION</span>
               <h2 className="text-5xl font-bold uppercase tracking-tighter leading-none">THE QR EXPERIENCE</h2>
               <h3 className="text-2xl text-zinc-500 italic">Elegance in Digital Form</h3>
               <p className="text-zinc-600 max-w-sm leading-relaxed font-medium">Allow discerning guests to explore your culinary artistry on their terms with our high-end digital menus.</p>
             </div>
             <div className="grid gap-6">
                {[
                  "Bespoke digital menu designs",
                  "Manage premium specials instantly",
                  "Offer detailed culinary storytelling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-zinc-50 rounded-3xl border border-zinc-100 hover:bg-white hover:shadow-xl transition-all">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold"><Check className="w-5 h-5" /></div>
                    <p className="font-bold text-zinc-700 tracking-tight text-lg">{item}</p>
                  </div>
                ))}
             </div>
             <Link href="/contact" className="bg-zinc-950 text-white px-12 py-5 rounded-2xl font-bold hover:bg-red-600 transition-all text-center uppercase tracking-widest text-xs">Transform Your Menu</Link>
           </div>
        </div>
      </section>

      {/* Multi-Brand Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full border border-red-100">MULTI BRAND SECTION</span>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter">Excellence Scaled</h2>
          <h3 className="text-3xl text-zinc-400 font-extralight max-w-2xl leading-none">Intelligence for Fine Dining Groups</h3>
          <p className="text-zinc-500 max-w-2xl px-4 text-xl font-medium mt-4">Gain a unified view of your elite portfolio with centralized analytics and performance tracking across every location.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { tag: "ANALYTICS", val: "Portfolio Insights", desc: "Consolidated performance data", icon: AreaChart },
            { tag: "DESIGN", val: "Brand Cohesion", desc: "Manage menu standards globally", icon: Menu },
            { tag: "KPI", val: "Elite Performance", desc: "High-level goal tracking", icon: Target }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -12 }} className="bg-white p-14 rounded-[4rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 text-center flex flex-col items-center group">
              <div className="h-24 w-24 bg-zinc-50 rounded-[2rem] flex items-center justify-center text-zinc-900 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl shadow-zinc-100 mb-8"><stat.icon className="w-10 h-10" /></div>
              <p className="text-red-600 font-bold uppercase text-[10px] mb-4 tracking-[0.3em]">{stat.tag}</p>
              <h4 className="text-2xl font-bold mb-4">{stat.val}</h4>
              <p className="text-zinc-500 mb-10 font-medium">{stat.desc}</p>
              <Link href="/contact" className="mt-auto bg-zinc-950 text-white px-10 py-3 rounded-xl font-bold hover:bg-red-600 transition-all text-xs tracking-widest uppercase shadow-lg group-hover:shadow-red-600/20">Executive View</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials 
        title="What Elite Hoteliers Say" 
        subtitle="Global Excellence" 
        testimonials={[{ quote: "Dine360 has redefined how we manage guest expectations at our flagship restaurants. It's the gold standard.", author: "Executive Chef", role: "Michelin-Star Venue", image: "https://randomuser.me/api/portraits/men/32.jpg" }]} 
      />
      <FAQ title="Fine Dining Product FAQs" faqs={[{ question: "Is Dine360 built for multi-course dining?", answer: "Absolutely. Our POS handles complex course timing and specialized modifiers required for fine dining." }, { question: "Can we track guest preferences?", answer: "Yes. Our CRM allows you to store detailed guest history, allergies, and favorite tables." }]} faqs2={[{ question: "Does it support pre-payment/deposits?", answer: "Yes. We offer secure prepayment options for reservations and exclusive events." }, { question: "Is the interface customizable?", answer: "We provide high-end configuration options to match your brand's aesthetic standards." }]} />
      <Footer />
    </div>
  )
}

export default FineDiningPage
