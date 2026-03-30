'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Zap, Clock, Target, Smartphone, RefreshCw } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1574091417483-376043477164?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&q=80&w=600",
]

const ConcessionPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10">
            <div className="flex -space-x-2 overflow-hidden items-center mb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200 overflow-hidden relative">
                  <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="User" fill className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-zinc-600 text-xs font-medium bg-zinc-100 px-2.5 py-1 rounded-full tracking-tight">Join 2,460+ Restaurants</span>
            </div>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-xs">
              <div className="h-px w-6 bg-red-600" />
              CONCESSION OPERATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Power Your <br />
              <span className="italic font-serif font-light text-red-600">Concession Stand Operations</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Serve customers faster and manage high-volume snack sales with a system built for concession stands. Dine360 helps you handle quick orders, fast billing, and peak-hour rush - all from one simple platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95 text-nowrap text-center">Start Today</Link>
              <Link href="/contact" className="bg-black hover:bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95 text-nowrap text-center">Book A Demo</Link>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-linear-to-tr from-red-50 to-zinc-50 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right" initial={{ opacity: 0, x: -50, rotate: -20 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <Image src={CARD_IMAGES[0]} alt="Concession Service" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Crowd Speed</p>
                  <p className="text-white font-bold text-2xl">95% Faster</p>
                </div>
              </motion.div>
              <motion.div className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Image src={CARD_IMAGES[1]} alt="Snack Billing" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <p className="text-[10px] text-red-400 font-medium tracking-wide uppercase mb-0.5">Queue Efficiency</p>
                  <p className="text-white font-bold text-2xl">40% Less</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Intro Section - Stats Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">BUILT FOR QUICK SERVICE</span>
            <div className="h-px w-8 bg-red-500" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            Transform Your Concession Stand <br className="hidden md:block" />
            <span className="text-red-600">With Dine360 Restaurant Software</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-base text-zinc-600 max-w-2xl mx-auto">
            Concession stands operate in high-pressure environments like stadiums, cinemas, and events where speed is everything. Dine360 helps you process orders quickly, reduce queues, and manage sales efficiently - ensuring customers get served fast without delays.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {[
              { label: "Faster Billing Speed", value: "95%", desc: "Handle large crowds quickly during peak times." },
              { label: "Reduced Queue Time", value: "40%", desc: "Keep lines moving smoothly." },
              { label: "Reliable Payment Processing", value: "100%", desc: "Accept payments securely and instantly." }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
                <p className="text-red-600 font-bold text-4xl mb-2">{stat.value}</p>
                <h4 className="text-zinc-900 font-bold text-lg mb-2">{stat.label}</h4>
                <p className="text-zinc-500 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Performance Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
            QUICK SERVICE PERFORMANCE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The High-Speed Service Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-2xl mx-auto text-sm">
            Concession stands rely on speed and efficiency. Dine360 ensures orders are processed instantly, helping you serve more customers in less time.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[0]} alt="Rapid Order" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Zap className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Rapid Order Processing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Take and complete orders within seconds.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[1]} alt="Smooth Service" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Smooth Service Flow</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Keep operations running smoothly during peak crowds.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[2]} alt="Short Lines" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Clock className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Shorter Customer Lines</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Efficient systems reduce waiting time.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-2.5">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[3]} alt="Accurate Billing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Target className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Accurate Billing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Ensure every order is processed correctly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">POS SYSTEM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Ultra-Fast POS for <br /> Concession Stands
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Handle high-speed transactions with a POS system built for quick service.
            </p>
            <ul className="space-y-4">
              {[
                "Lightning-fast billing",
                "Multiple payment methods",
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
            <motion.div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="flex flex-col h-full relative">
                 <Image src={CARD_IMAGES[4]} alt="POS System" fill className="object-cover rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-105 w-full">
             <motion.div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src={CARD_IMAGES[3]} alt="Order Management" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">ORDER MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage High Volume Orders
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Keep track of all orders even during busy events.
            </p>
            <ul className="space-y-4">
              {[
                "Track order queues",
                "Monitor order status",
                "Ensure quick delivery"
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

      {/* Service Flow Section (Service Management) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-red-600/10 to-transparent" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-400 font-bold tracking-wider uppercase text-xs">SERVICE MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Handle Peak Crowds with Ease
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Maintain smooth service during high-traffic events.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {[
                { title: "Queues", desc: "Manage long queues" },
                { title: "Timelines", desc: "Track preparation time" },
                { title: "Speed", desc: "Improve service speed" }
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
             <div className="relative h-full bg-zinc-800 p-2 rounded-4xl shadow-2xl border border-zinc-700 overflow-hidden">
               <Image src={CARD_IMAGES[2]} alt="Service Management" fill className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-105 order-2 lg:order-1">
            <div className="absolute inset-0 bg-red-200/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-white p-4 rounded-4xl shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src={CARD_IMAGES[1]} alt="QR Menu" fill className="object-cover rounded-3xl" />
            </div>
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">QR MENU</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Digital Menu for Faster Ordering
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Allow customers to browse your menu instantly.
            </p>
            <ul className="space-y-4">
              {[
                "QR code menu access",
                "Highlight combos and offers",
                "Update menu anytime"
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

      {/* Multi-Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[3rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">MULTI LOCATION STANDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage Multiple Concession Points
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Operate multiple stands across venues with centralized control.
            </p>
            <ul className="space-y-4">
              {[
                "Monitor sales across locations",
                "Manage menus centrally",
                "Track performance in real time"
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
            <div className="relative h-full bg-white p-4 rounded-4xl shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" alt="Multi-Location Management" fill className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
      <Footer />
    </div>
  )
}

export default ConcessionPage
