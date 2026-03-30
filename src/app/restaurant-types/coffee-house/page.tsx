'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { Check, Dot, Layout, TrendingUp, Smartphone, Zap, RefreshCw, Clock, Target, Coffee, Utensils, Users, Store } from 'lucide-react'

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=600",
]

const CoffeeHousePage = () => {
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
              <div className="h-[1px] w-6 bg-red-500" />
              COFFEE HOUSE OPERATIONS
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Power Your <br />
              <span className="italic font-serif font-light text-zinc-800">Coffee House Operations</span>
            </h1>

            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Serve great coffee faster while managing orders, tables, and daily operations effortlessly with a system built for coffee houses.
              Dine360 helps coffee houses streamline billing, manage orders, and deliver smooth customer service from one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-1">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-600/20 active:scale-95"
              >
                Start Today
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
                <Image src={CARD_IMAGES[0]} alt="Coffee House" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Order Delivery</p>
                    <p className="text-white font-bold text-2xl">85% Faster</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-10 left-12 md:left-20 w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={CARD_IMAGES[1]} alt="Coffee Service" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="relative z-10">
                    <p className="text-[10px] text-zinc-300 font-medium tracking-wide uppercase mb-0.5">Turnover</p>
                    <p className="text-white font-bold text-2xl">+30%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 right-0 md:right-2 w-56 h-72 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white transform origin-bottom-left"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image src={CARD_IMAGES[2]} alt="Coffee Counter" fill className="object-cover" />
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

      {/* Intro Section / Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-zinc-50/50 rounded-[3rem]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-500" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">BUILT FOR COFFEE HOUSES</span>
            <div className="h-[1px] w-8 bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight"
          >
            Transform Your Coffee House Operations <br className="hidden md:block" />
            With <span className="text-red-600">Dine360 Restaurant Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-600 max-w-2xl mx-auto"
          >
            Coffee houses experience busy mornings, steady daytime traffic, and customers looking for quick service and comfortable seating.
            Dine360 helps coffee houses manage orders, seating, billing, and operations efficiently — allowing staff to focus on serving great coffee and creating a welcoming atmosphere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Faster Order Processing", value: "85%", desc: "Serve customers quickly during morning rush hours." },
            { label: "Higher Customer Turnover", value: "30%", desc: "Reduce wait times and increase service efficiency." },
            { label: "Secure Payment System", value: "100%", desc: "Fast and reliable billing for every order." }
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
            COFFEE HOUSE PERFORMANCE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The Smooth Coffee Service Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 max-w-2xl mx-auto text-sm">
            Coffee houses require fast service and organized operations.
            Dine360 ensures orders move quickly from counter to preparation, improving customer satisfaction.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-t-[10px] border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[3]} alt="Quick Coffee Orders" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Zap className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Quick Coffee Orders</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Take and process coffee orders instantly during busy periods.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[4]} alt="Efficient Preparation" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Efficient Preparation Workflow</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Orders reach the barista station immediately for faster preparation.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative md:-mt-[10px]">
            <div className="hidden md:block absolute left-0 top-0 w-[55%] h-full border-l-[10px] border-b-[10px] border-zinc-800 rounded-l-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pl-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-l-[80px] md:rounded-r-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[1]} alt="Reduced Wait Time" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Clock className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Reduced Customer Wait Time</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Efficient order management keeps service smooth.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center relative md:-mt-[10px]">
             <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full border-r-[10px] border-b-[10px] border-zinc-800 rounded-r-[100px] z-0"></div>
            <div className="w-full md:w-1/2 p-6 md:pr-10 md:py-8 relative z-10">
              <div className="relative h-36 w-full rounded-3xl md:rounded-r-[80px] md:rounded-l-2xl overflow-hidden shadow-lg">
                <Image src={CARD_IMAGES[2]} alt="Accurate Billing" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:px-12 relative z-10">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4"><Target className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Accurate Billing</h3>
              <p className="text-zinc-800 text-sm leading-relaxed font-medium">Automated billing ensures every order is processed correctly.</p>
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
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs flex items-center gap-2">
                POS SYSTEM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Fast POS for Coffee Service
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Process coffee and snack orders quickly with an intuitive POS system.
            </p>
            <ul className="space-y-4">
              {[
                "Quick billing for coffee and snacks",
                "Accept multiple payment methods",
                "Real-time sales tracking"
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-center">
                Get Started
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src={CARD_IMAGES[0]} alt="POS System" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-red-50 rounded-[2.5rem] rotate-3" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src={CARD_IMAGES[1]} alt="Order Management" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">ORDER MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Manage Every Order Efficiently
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Keep track of orders and preparation status in real time.
            </p>
            <ul className="space-y-4">
              {[
                "Monitor order progress",
                "Modify orders instantly",
                "Manage takeaway and dine-in orders"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-zinc-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
             <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table Management Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-red-600/10 to-transparent opacity-50" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">TABLE MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Organize Seating for Guests</h2>
            <p className="text-zinc-400 text-lg">Manage seating and table availability smoothly.</p>
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {[
                { icon: Layout, title: "Track table availability", desc: "Real-time floor plan updates." },
                { icon: Users, title: "Manage dine-in customers", desc: "Efficient queue and seating flow." },
                { icon: TrendingUp, title: "Improve seating flow", desc: "Maximize your coffee shop's capacity." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
             <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-center">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
             <div className="absolute w-[120%] h-[120%] bg-red-600/20 rounded-full blur-3xl -z-10" />
             <div className="relative h-[450px] w-full max-w-sm rounded-[3rem] overflow-hidden border-8 border-zinc-800 shadow-2xl">
                <Image src={CARD_IMAGES[2]} alt="Table Management" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Digital Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] w-full flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-red-100 rounded-full blur-3xl" />
            <motion.div 
              className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden p-2"
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
            >
               <div className="w-full h-full bg-white rounded-[2.5rem] p-4 flex flex-col items-center">
                  <div className="w-12 h-1 bg-zinc-200 rounded-full mb-8 mt-2" />
                  <div className="w-full aspect-square bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
                     <Smartphone className="w-12 h-12 text-red-600" />
                  </div>
                  <div className="w-full space-y-3">
                    <div className="h-4 bg-zinc-100 rounded-full w-3/4 mx-auto" />
                    <div className="h-3 bg-zinc-100 rounded-full w-1/2 mx-auto" />
                    <div className="h-40 bg-zinc-50 rounded-2xl w-full" />
                  </div>
               </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">QR MENU</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">Digital Menu for Easy Ordering</h2>
            <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
              Allow customers to browse your coffee menu instantly using QR codes.
            </p>
            <div className="space-y-4 mt-2">
              {[
                { title: "Quick menu access", icon: Check },
                { title: "Highlight coffee specials and combos", icon: Check },
                { title: "Update menu items easily", icon: Check }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-zinc-800 font-bold">{item.title}</span>
                </div>
              ))}
            </div>
             <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Branch Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-50 rounded-[3rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <div className="h-[2px] w-10 bg-red-500 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold tracking-wider uppercase text-xs">MULTI LOCATION COFFEE HOUSES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">Manage Multiple Coffee Shop Locations</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              Expand your coffee house brand while maintaining centralized control.
            </p>
            <div className="grid gap-4 mt-4">
               {[
                "Monitor sales across locations",
                "Manage menus centrally",
                "Track branch performance"
               ].map((point, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-zinc-100">
                    <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white">
                       <Store className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-900 font-bold">{point}</span>
                 </div>
               ))}
            </div>
             <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 text-center">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
             <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white translate-y-8">
               <Image src={CARD_IMAGES[3]} alt="Branch 1" fill className="object-cover" />
             </div>
             <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
               <Image src={CARD_IMAGES[4]} alt="Branch 2" fill className="object-cover" />
             </div>
             <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white translate-y-8">
               <Image src={CARD_IMAGES[0]} alt="Branch 3" fill className="object-cover" />
             </div>
             <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
               <Image src={CARD_IMAGES[1]} alt="Branch 4" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials 
        title="What Coffee House Owners Say About Dine360"
        subtitle="Testimonials"
      />

      {/* FAQ Sección */}
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Answers To Common Questions"
        questions={[
          {
            question: "Is Dine360 suitable for coffee houses?",
            answer: "Yes. Dine360 is designed for fast service environments like coffee houses and cafés."
          },
          {
            question: "Can the POS handle takeaway orders?",
            answer: "Yes. The system supports takeaway, dine-in, and delivery orders."
          },
          {
            question: "Does Dine360 work on tablets and POS devices?",
            answer: "Yes. The platform works on POS terminals, tablets, and desktops."
          },
          {
            question: "Can I track sales and daily reports?",
            answer: "Yes. Dine360 provides real-time sales analytics and performance reports."
          }
        ]}
      />

      <Footer />
    </div>
  )
}

export default CoffeeHousePage

