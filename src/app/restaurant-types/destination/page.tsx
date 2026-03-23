'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, MapPin, Star, Clock, Target, Utensils, Users, Globe } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600",
]

const DestinationPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 85}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full text-nowrap tracking-tight">Choice of 800+ Destination Restaurants</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-[1px] w-6 bg-red-600" />
              DESTINATION DINING
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Scale Your <br />
              <span className="italic font-serif font-light text-red-600">Destination Venue</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Power large-scale dining destinations with a system that handles high guest volume and complex reservations.
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
                <Image src={CARD_IMAGES[2]} alt="Resort Dining" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Guest Volume</p>
                  <p className="text-white font-bold text-2xl">95% Growth</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[0]} alt="Luxury Venue" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Checkout Speed</p>
                  <p className="text-white font-bold text-2xl">90% Faster</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16 text-zinc-900">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs text-nowrap">DESTINATION EXCELLENCE</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Streamlined <span className="text-red-600 font-serif italic">Destination Management</span>.
          </motion.h2>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto">
            Dine360 provides the reliability and features that destination venues need to manage exceptional service at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Guest Processing", value: "90%", desc: "Cut wait times with optimized table management." },
            { label: "Increase Order Volume", value: "95%", desc: "Maximize output per station and server." },
            { label: "Guest Satisfaction", value: "100%", desc: "Deliver seamless service from arrival to checkout." }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100/50 text-center">
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
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
              <div className="h-[2px] w-10 bg-red-600 relative"><div className="absolute -right-1 -top-1 w-2 h-2 bg-red-600 rounded-full" /></div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-xs text-nowrap">PREMIUM FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Exceptional Venue Workflow</h2>
            <ul className="space-y-4">
              {[
                "Modern, easy-to-use POS with lightning-fast order entry for large menus",
                "Advanced customer loyalty and personalized guest tracking",
                "Scalable operations for resorts, parks, and large-scale dining",
                "Offline mode ensures service never stops, even with network issues"
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
              <Image src={CARD_IMAGES[3]} alt="Destination View" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials 
        title="What Venue Managers Say" 
        subtitle="Success Stories" 
        testimonials={[{ quote: "Dine360 has been a game-changer for our resort. The system's scalability and reliability are unmatched in the industry.", author: "Resort Ops Director", role: "Director", image: "https://randomuser.me/api/portraits/men/91.jpg" }]} 
      />
      <FAQ title="Destination Software FAQs" faqs={[{ question: "Can it handle multi-location sync?", answer: "Yes, our cloud infrastructure keeps all your locations in perfect harmony." }, { question: "Is it suitable for remote areas?", answer: "Absolutely, our offline mode ensures zero downtime regardless of connectivity." }]} />
      <Footer />
    </div>
  )
}

export default DestinationPage
