'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Dot, Layout, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target, Store, Users } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1543353071-097072382f14?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1520699912061-0d3a54d5801c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1502301103665-0b95cc738def?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
]

const DinerPage = () => {
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
                    src={`https://randomuser.me/api/portraits/thumb/men/${50 + i}.jpg`}
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
              <div className="h-[1px] w-6 bg-red-500" />
              Power Your
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Diner Operations <br />
              <span className="italic font-serif font-light text-zinc-800">Fast-Paced, All-Day Dining</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Serve customers quickly, manage tables efficiently, and keep your diner running smoothly with a system built for fast-paced, all-day dining. Dine360 helps diners handle orders, billing, and table service from one powerful platform.
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
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end" style={{ perspective: '1000px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-red-50/50 to-orange-50/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-full h-full max-w-md mx-auto lg:mr-0">
              <motion.div
                className="absolute top-20 left-0 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-right"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src={CARD_IMAGES[3]} alt="Diner Service" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Efficiency</p>
                    <p className="text-white font-bold text-2xl">85%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={CARD_IMAGES[4]} alt="Pancake Breakfast" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Turnover</p>
                    <p className="text-white font-bold text-2xl">30%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 right-0 md:right-2 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-left"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image src={CARD_IMAGES[0]} alt="Classic Diner Booth" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Secure</p>
                    <p className="text-white font-bold text-2xl">100%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">EFFORTLESS SERVICE, BIGGER RESULTS</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Transform Your Diner Operations With <br className="hidden md:block" />
            <span className="text-red-600">Dine360 Restaurant Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Diners operate all day with a mix of breakfast rush, lunch crowds, and late-night service. Managing orders, tables, and billing efficiently is key to keeping service smooth. Dine360 helps diners streamline operations, reduce delays, and improve customer experience — all from one centralized system.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "85%", desc: "Serve customers quickly during peak hours." },
            { label: "Improved Table Turnover", value: "30%", desc: "Keep tables moving efficiently throughout the day." },
            { label: "Secure Payment System", value: "100%", desc: "Reliable billing with multiple payment options." }
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
            DINER PERFORMANCE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The All-Day Service Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-2xl mx-auto text-sm">
            Diners require consistent service throughout the day. Dine360 ensures smooth order flow from tables to the kitchen and back.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[3]} alt="Quick Order Taking" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Zap className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Quick Order Taking</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Take orders instantly during breakfast, lunch, and dinner rush.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[4]} alt="Kitchen Coordination" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Efficient Kitchen Coordination</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Orders are sent directly to the kitchen for faster preparation.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[0]} alt="Table Service" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Clock className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Faster Table Service</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Serve customers quickly and reduce waiting times.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[1]} alt="Accurate Billing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Target className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Accurate Billing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Automated billing reduces errors and improves efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">POS SYSTEM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Built for All-Day Service</h2>
            <p className="text-base text-zinc-600 leading-relaxed">Handle continuous orders efficiently with a POS system designed for diners.</p>
            <ul className="space-y-4">
              {[
                "Fast order entry",
                "Accept multiple payment methods",
                "Real-time sales tracking"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed font-bold">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full order-1 lg:order-2">
            <motion.div
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="POS System" fill className="object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] w-full">
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
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">ORDER MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Manage Orders Seamlessly</h2>
            <p className="text-base text-zinc-600 leading-relaxed">Keep track of every order from placement to delivery.</p>
            <ul className="space-y-4">
              {[
                "Monitor order status in real time",
                "Modify orders instantly",
                "Manage dine-in and takeaway orders"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-zinc-700 font-bold">{item}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent" />
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-400 font-bold tracking-wider uppercase text-xs">TABLE MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Organize Tables Efficiently</h2>
            <p className="text-base text-zinc-400 leading-relaxed">Manage seating and improve table turnover throughout the day.</p>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {[
                { title: "Track table availability", desc: "Real-time updates for high seating demand." },
                { title: "Handle walk-ins", desc: "Manage queues and regular customers effortlessly." },
                { title: "Improve service flow", desc: "Optimize seating during the all-day rush." }
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
          <div className="relative h-[400px]">
             <div className="relative h-full bg-zinc-800 p-2 rounded-[2rem] shadow-2xl border border-zinc-700 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Seating Management" fill className="object-cover rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-red-200/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-white p-4 rounded-[2rem] shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="QR Menu" fill className="object-cover rounded-[1.5rem]" />
            </div>
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">QR CODE MENU</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Digital Menu for Faster Ordering</h2>
            <p className="text-base text-zinc-600 leading-relaxed">Allow customers to browse your diner menu instantly using QR codes.</p>
            <ul className="space-y-4">
              {[
                "QR code menu access",
                "Highlight daily specials",
                "Update menu items anytime"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed font-bold">{point}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50/50 rounded-[3rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">MULTI BRANCH RESTAURANT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Manage Multiple Diner Locations</h2>
            <p className="text-base text-zinc-600 leading-relaxed">Expand your diner business while maintaining full control.</p>
            <ul className="space-y-4">
              {[
                "Monitor sales across locations",
                "Manage menus centrally",
                "Track branch performance"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed font-bold">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center bg-black hover:bg-zinc-900 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative h-[420px]">
            <div className="absolute inset-0 bg-red-200/20 blur-3xl rounded-full" />
            <div className="relative h-full bg-white p-4 rounded-[2rem] shadow-2xl border border-zinc-100 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" alt="Multi Branch" fill className="object-cover rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Answers To Common Questions"
        questions={[
          {
            question: "Is Dine360 suitable for diners?",
            answer: "Yes. Dine360 is designed for restaurants that operate throughout the day with continuous service."
          },
          {
            question: "Can it handle breakfast, lunch, and dinner orders?",
            answer: "Yes. The system supports all-day operations with real-time order tracking."
          },
          {
            question: "Does it support takeaway orders?",
            answer: "Yes. Dine360 supports dine-in, takeaway, and delivery."
          },
          {
            question: "Can I track daily sales performance?",
            answer: "Yes. The platform provides detailed real-time reports and analytics."
          }
        ]}
      />

      <Footer />
    </div>
  )
}

export default DinerPage

