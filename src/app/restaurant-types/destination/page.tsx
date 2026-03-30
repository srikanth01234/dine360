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
import { Zap, RefreshCw } from "lucide-react";

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600",
]

const DestinationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image
                    src={`https://randomuser.me/api/portraits/thumb/men/${40 + i}.jpg`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full">
                Join 2,460+ Restaurants
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-px w-6 bg-red-500" />
              Elevate Your
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Destination Restaurant <br />
              <span className="italic font-serif font-light text-zinc-800">Experience</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Deliver unforgettable dining experiences while managing operations seamlessly with a system built for high-end destination restaurants. Dine360 helps you manage reservations, service flow, and guest experiences — all from one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95"
              >
                Start Today
              </Link>
              <Link
                href="/contact"
                className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
              >
                Book A Demo
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-4 flex flex-col gap-2">
               <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Trusted by Industry Leaders</span>
              <div className="flex items-center gap-6 grayscale opacity-60">
                <span className="text-sm font-bold text-zinc-400">UberEats</span>
                <span className="text-sm font-bold text-zinc-400">DoorDash</span>
                <span className="text-sm font-bold text-zinc-400">GrubHub</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative h-125 w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right shrink-0"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Destination Atmosphere" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Guest Experience</p>
                    <p className="text-white font-bold text-2xl">90%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20 shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={CARD_IMAGES[1]} alt="Premium Dining" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Reservations</p>
                    <p className="text-white font-bold text-2xl">35%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 right-0 md:right-2 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-left shrink-0"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image src={CARD_IMAGES[2]} alt="Exquisite Service" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Scalability</p>
                    <p className="text-white font-bold text-2xl">100%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">BUILT FOR DESTINATION DINING</span>
            <div className="h-px w-8 bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Transform Your Destination Restaurant <br className="hidden md:block" />
            <span className="text-red-600">With Dine360 Restaurant Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Destination restaurants are about more than just food — they offer a complete experience that draws customers from afar. Managing reservations, guest flow, and service quality is critical. Dine360 helps you deliver exceptional service while maintaining full operational control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Enhanced Guest Experience", value: "90%", desc: "Deliver smooth, premium dining service." },
            { label: "Improved Reservation Efficiency", value: "35%", desc: "Manage bookings and seating effortlessly." },
            { label: "Secure & Scalable Platform", value: "100%", desc: "Reliable operations for high-end dining." }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 text-center"
            >
              <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
              <h4 className="text-zinc-900 font-bold text-lg mb-2">{stat.label}</h4>
              <p className="text-zinc-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
            DESTINATION DINING PERFORMANCE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The Premium Experience Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-2xl mx-auto text-sm">
            Destination restaurants require precision, planning, and flawless execution. Dine360 ensures every part of your service runs smoothly.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-10 border-l-10 border-b-10 border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-2xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[3]} alt="Advanced Reservation" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Zap className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Advanced Reservation Management</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Handle bookings and guest flow efficiently.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-10 border-b-10 border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-2xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[1]} alt="Seamless Order Coordination" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Seamless Order Coordination</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Ensure smooth communication between service staff and kitchen.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-10 border-b-10 border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-2xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[0]} alt="Elevated Guest Experience" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Clock className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Elevated Guest Experience</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Deliver consistent, high-quality service without delays.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
             <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-10 border-b-10 border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-2xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[4]} alt="Accurate Billing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Target className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Accurate Billing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Provide a smooth and professional checkout experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-4xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                POS SYSTEM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Premium POS for Fine Dining Experiences
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Deliver fast and accurate billing while maintaining a premium experience.
            </p>
            <ul className="space-y-4">
              {[
                "Quick and accurate order entry",
                "Multiple payment options",
                "Real-time sales tracking"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative h-100 w-full order-1 lg:order-2">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="Premium POS" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-105 w-full">
             <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=800" alt="Order Management" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">ORDER MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage Every Order with Precision
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Ensure every order is handled perfectly from table to kitchen.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time order tracking",
                "Easy modifications",
                "Smooth order flow"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-black hover:bg-zinc-900 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-4xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-red-600/10 to-transparent" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-400 font-bold tracking-wider uppercase text-xs">TABLE MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Optimize Seating & Reservations
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Deliver a seamless guest experience with smart table management.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {[
                { title: "Reservation scheduling", desc: "Handle bookings and guest flow efficiently." },
                { title: "Table allocation optimization", desc: "Maximize dining room potential." },
                { title: "Manage VIP seating", desc: "Personalize experience for priority guests." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all w-fit mt-4 active:scale-95 shadow-xl shadow-red-600/20">
              Get Started
            </Link>
          </div>
          <div className="relative h-100">
             <div className="relative h-full bg-zinc-800 p-2 rounded-3xl shadow-2xl border border-zinc-700 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Table Selection" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-105 order-2 lg:order-1">
            <div className="absolute inset-0 bg-red-200/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-white p-4 rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Premium QR Menu" fill className="object-cover rounded-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">QR MENU</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Modern Menu for Premium Guests
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Offer a seamless and elegant menu experience.
            </p>
            <ul className="space-y-4">
              {[
                "QR-based digital menu",
                "Highlight signature dishes and specials",
                "Instant menu updates"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-black hover:bg-zinc-900 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Branch Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-4xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">MULTI LOCATION RESTAURANTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Expand Your Destination Brand
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Manage multiple high-end locations with centralized control.
            </p>
            <ul className="space-y-4">
              {[
                "Monitor performance across locations",
                "Maintain consistent service quality",
                "Centralized reporting and analytics"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-black hover:bg-zinc-900 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative h-105">
            <div className="absolute inset-0 bg-red-200/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-white p-4 rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" alt="Destination Scale" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      <Footer />
    </div>
  )
}

export default DestinationPage
