'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Flame, Star, Clock, Target, Utensils, Users, Layout } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1580442151529-343f2f5e3ef2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
]

const TeppanyakiPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-zinc-900 bg-zinc-800 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 44}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-400 text-xs font-medium bg-zinc-900 px-2.5 py-1 rounded-full text-nowrap tracking-tight">Choice of 600+ Teppanyaki Grills</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-600" />
              TEPPANYAKI OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Elevate Your <br />
              <span className="italic font-serif font-light text-red-600">Teppanyaki Performance</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Combine spectacular cooking with precise management. Handle grill-side ordering and high volume with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Shop Now</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center border border-zinc-800">Book A Demo</Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50 to-zinc-50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[0]} alt="Teppanyaki Chef" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Order Delivery</p>
                  <p className="text-white font-bold text-2xl">80% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[2]} alt="Flaming Grill" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Sales Efficiency</p>
                  <p className="text-white font-bold text-2xl">25% Up</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-950 rounded-[3rem] text-white">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs text-nowrap">MASTER THE GRILL</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Streamlined <span className="text-red-600 font-serif italic">Teppanyaki Sales Efficiency</span>.
          </motion.h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Dine360 provides the reliability and features that teppanyaki owners need to manage high seat turnover and spectacular service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "80%", desc: "Communicate with the bar and kitchen instantly." },
            { label: "Increase Table Volume", value: "25%", desc: "Manage short-lived bursts of guest volume effortlessly." },
            { label: "Smooth Checkout", value: "100%", desc: "Fast and secure payment processing for groups." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-800 text-center">
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-white font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-zinc-900">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-600 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-600 rounded-full" /></div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-xs text-nowrap">PERFORMANCE FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">High-Stakes Service Workflow</h2>
            <ul className="space-y-4">
              {[
                "Modern, easy-to-use cloud POS with lightning-fast order entry for multi-option menu",
                "Advanced customer loyalty and digital points for repeat visitors",
                "Table reservations and walk-in waitlist management during rush and group peak",
                "Real-time order tracking and kitchen display systems (KDS) for coordinated service"
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
              <Image src={CARD_IMAGES[3]} alt="Chef and Guests" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials 
        title="What Grill Masters Say" 
        subtitle="Success Stories" 
        testimonials={[{ quote: "Wait times dropped significantly after deploying Dine360 at our grill stations. We handle large groups with zero billing errors now.", author: "Teppanyaki Owner", role: "Proprietor", image: "https://randomuser.me/api/portraits/men/22.jpg" }]} 
      />
      <FAQ title="Teppanyaki Software FAQs" faqs={[{ question: "Can we manage specific grill stations?", answer: "Yes, our system allows you to assign orders to specific tables and grills easily." }, { question: "Does it support seat bundling?", answer: "Absolutely, bundle groups or charge per seat with our flexible POS." }]} />
      <Footer />
    </div>
  )
}

export default TeppanyakiPage
