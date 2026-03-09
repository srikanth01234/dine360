'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Store, 
  Bike, 
  Laptop, 
  FireExtinguisher as Fire, 
  CheckCircle, 
  Wifi, 
  Tablet, 
  Smartphone, 
  Monitor,
  Code2 as CodeBranch,
  LineChart,
  Cloud,
  ClipboardList,
  Fingerprint,
  Copy,
  MapPinned,
  UserCircle,
  Clock,
  Map,
  MapPin,
  Receipt,
  RotateCcw,
  Rocket,
  Layout,
  TicketPercent,
  Globe,
  UtensilsCrossed,
  Calendar,
  Grid3X3,
  Percent,
  Layers,
  ShieldCheck,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  Truck,
  FileText,
  MessageSquare
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FeaturesPage = () => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0)

  const statusFlow = [
    { name: 'preparing', step: 0, bgColor: 'bg-red-700' },
    { name: 'cooking', step: 1, bgColor: 'bg-red-900' },
    { name: 'ready', step: 2, bgColor: 'bg-red-700' },
    { name: 'out for delivery', step: 3, bgColor: 'bg-zinc-950' }
  ]

  const cycleStatus = () => {
    setCurrentStatusIndex((prev) => (prev + 1) % statusFlow.length)
  }

  const currentStatus = statusFlow[currentStatusIndex]

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* HERO SECTION TOPIC */}
        <section className="px-6 pt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Features
          </div>
        </section>

        {/* HERO Section */}
        <section className="max-w-7xl mx-auto px-6 py-6 lg:py-10 grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
              Transform Your Counter <br /> into a{' '}
              <span className="text-red-600 border-b-6 border-red-600/10 inline-block leading-[0.9]">Revenue Powerhouse</span>.
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Dine360’s intelligent POS system simplifies every front-of-house operation — from order taking to live kitchen coordination — so your team moves faster and your customers leave happier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/features/pos-management">
                <button className="group bg-red-600 text-white px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/20 active:scale-95">
                  Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full font-bold text-base border border-zinc-200 hover:bg-zinc-50 transition-all active:scale-95">
                  Book a Demo
                </button>
              </Link>
            </div>
            <div className="flex gap-10 pt-1">
              <div>
                <div className="text-2xl font-extrabold text-red-800">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Restaurants Powered</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-red-800">15K+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Orders Processed Daily</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-red-800">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">System Uptime</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/10 transition-colors"></div>
            <div className="relative space-y-6">
              <div className="flex justify-between items-center pb-6 border-b-2 border-zinc-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <Wifi className="w-5 h-5 text-zinc-400" />
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-zinc-800">Branch #12</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Fire className="w-3 h-3" /> prep
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Bike className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-zinc-800">Delivery #421</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" /> ready
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-zinc-400" />
                    <span className="font-bold text-zinc-800">takeaway #88</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider">
                    new
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4 text-zinc-400 pt-4 items-center">
                <Tablet className="w-4 h-4" />
                <Laptop className="w-4 h-4" />
                <Smartphone className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-widest ml-1">any device</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES Section */}
        <section className="bg-white py-6 lg:py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] tracking-widest uppercase mb-3">
              <Monitor className="w-4 h-4" />
              ALL-IN-ONE COUNTER
            </div>
            <h2 className="text-3xl font-bold text-zinc-950 max-w-xl mb-2">
              Everything You Need to Run the Front of House
            </h2>
            <p className="text-sm text-zinc-500 mb-8 max-w-lg">
              From billing to order tracking, Dine360 connects your counter, kitchen, and customers in one seamless workflow.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Branch-wise Control",
                  desc: "Manage each outlet independently while maintaining centralized oversight. Customize menus, pricing, taxes, and workflows based on location — perfect for growing multi-branch operations.",
                  icon: CodeBranch
                },
                {
                  title: "Live Order Flow",
                  desc: "Track every order in real time — from prep to ready to served. Update statuses instantly and keep your kitchen and counter perfectly in sync. No confusion. No missed tickets.",
                  icon: LineChart
                },
                {
                  title: "Works on Any Device",
                  desc: "Run Dine360 on desktops, laptops, or tablets. Whether at the billing counter or on the floor, your team has access to everything they need — anytime, anywhere.",
                  icon: Cloud
                }
              ].map((f) => (
                <div key={f.title} className="p-8 rounded-[28px] border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:border-red-600/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <f.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-950">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORDER MANAGEMENT section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-800/10 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <ClipboardList className="w-4 h-4" />
                ORDER MANAGEMENT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Manage Orders <br /> Like a Pro
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Track, update, and complete every order with precision — from dine-in to delivery — without delays or confusion.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Access full order details instantly.", icon: Fingerprint },
                  { text: "Edit, duplicate, or modify orders in seconds.", icon: Copy },
                  { text: "Monitor live delivery progress with real-time ETA.", icon: MapPinned }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/order-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Explore Order Flow <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-zinc-100">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Bike className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Ongoing Delivery</div>
                    <div className="text-lg font-bold text-zinc-950">#421 · Alex Chen</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-red-100 flex items-center justify-center p-1">
                      <UserCircle className="w-full h-full text-zinc-200" />
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">ETA 8 min</div>
                      <div className="text-zinc-500 text-[11px]">2.3 km away</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 8:42 PM
                  </div>
                </div>

                <div className="aspect-[16/5] bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center gap-1 text-zinc-400 hover:border-red-200 hover:text-red-400 transition-colors cursor-pointer group">
                  <Map className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[10px] tracking-widest uppercase">Live tracking enabled</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-medium px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  Last update: just now
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE & RESERVATIONS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            {/* Visual Box - Left */}
            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-[40px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'T1', status: 'Occupied', color: 'bg-red-500' },
                    { id: 'T2', status: 'Available', color: 'bg-emerald-500' },
                    { id: 'T3', status: 'Reserved', color: 'bg-amber-500' },
                    { id: 'T4', status: 'Available', color: 'bg-emerald-500' },
                    { id: 'T5', status: 'Occupied', color: 'bg-red-500' },
                    { id: 'T6', status: 'Available', color: 'bg-emerald-500' }
                  ].map((table) => (
                    <div key={table.id} className="aspect-square bg-zinc-50 border border-zinc-100 rounded-2xl flex flex-col items-center justify-center gap-1 group cursor-pointer hover:border-red-200 transition-all">
                      <span className="text-[10px] font-black text-zinc-400">{table.id}</span>
                      <div className={`w-2 h-2 rounded-full ${table.color} shadow-sm group-hover:scale-125 transition-transform`}></div>
                      <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-tighter">{table.status}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-black text-zinc-400 uppercase">Available: 3</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span className="text-[9px] font-black text-zinc-400 uppercase">Busy: 2</span>
                    </div>
                  </div>
                  <Layout className="w-4 h-4 text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Calendar className="w-4 h-4" />
                TABLE & RESERVATIONS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Master Your Seating in Seconds
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Visualize your entire restaurant layout and manage reservations effortlessly — even during peak hours.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Real-time table availability tracking.", icon: Layout },
                  { text: "Manage walk-ins and pre-bookings easily.", icon: Grid3X3 },
                  { text: "Optimize table turnover for higher revenue.", icon: Clock }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/table-reservation">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  View Seating Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* PROMOTIONS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>

            {/* Content - Left */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Percent className="w-4 h-4" />
                Promotions
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Drive Sales with <br /> Impactful Promotions
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Simplify your marketing efforts and watch your sales grow with our easy-to-use effective promotional features.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Increase order volumes with compelling Buy One Get One deals.", icon: TicketPercent },
                  { text: "Schedule time-based discounts to drive sales during slow hours.", icon: Clock },
                  { text: "Create exclusive coupon codes for targeted promotions.", icon: Fingerprint }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/promotion-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Visual Box - Right */}
            <div className="relative z-10">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="bg-red-600 rounded-2xl p-5 text-white relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Flash Deal</div>
                    <div className="text-2xl font-black mb-1">BOGO OFFER</div>
                    <div className="text-xs font-medium opacity-90">Buy 1 Get 1 on All Pizzas</div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-red-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                    Active
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-dashed border-zinc-200 bg-zinc-50">
                    <div className="flex items-center gap-3">
                      <TicketPercent className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-bold text-zinc-800">COUPON: PIZZA25</span>
                    </div>
                    <span className="text-emerald-600 text-[10px] font-black">25% OFF</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-100">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-bold">Happy Hour</span>
                    </div>
                    <span className="text-zinc-300 text-[10px] font-black">4PM - 7PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            {/* Background elements moved to align with visual box side */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-800/10 blur-[80px] rounded-full"></div>
            
            {/* Visual Box - Left on desktop, bottom on mobile */}
            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-zinc-100">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Store className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Active Branch</div>
                    <div className="text-lg font-bold text-zinc-950">Downtown · South Hub</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { type: 'Dine-In', count: 12, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { type: 'Delivery', count: 8, color: 'text-red-600', bg: 'bg-red-50' },
                    { type: 'Takeaway', count: 5, color: 'text-blue-600', bg: 'bg-blue-50' }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 border border-zinc-100 italic transition-all hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${stat.color === 'text-red-600' ? 'bg-red-600' : stat.color === 'text-amber-600' ? 'bg-amber-600' : 'bg-blue-600'}`}></div>
                        <span className="text-sm font-bold text-zinc-800">{stat.type}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-lg ${stat.bg} ${stat.color} text-[10px] font-black`}>
                        {stat.count} Orders
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <span>System: Online</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Right on desktop, top on mobile */}
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Monitor className="w-4 h-4" />
                POINT OF SALE (POS)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Lightning-Fast Billing Without Errors
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Simplify billing with an intuitive POS built for speed, accuracy, and seamless front-desk operations.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Dine-in, takeaway & delivery billing in one screen.", icon: MapPinned },
                  { text: "Split bills & multi-payment support.", icon: LineChart },
                  { text: "Automatic tax calculation & receipt generation.", icon: Cloud }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                See POS in Action <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* PURCHASE MANAGEMENT section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <ShoppingCart className="w-4 h-4" />
                PURCHASE MANAGEMENT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Simplify Vendor & Stock Procurement
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Streamline purchasing with structured vendor management and purchase order tracking.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Create & track purchase orders easily.", icon: ShoppingCart },
                  { text: "Maintain supplier records centrally.", icon: Users },
                  { text: "Automatic stock updates on receipt.", icon: Package }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/inventory-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Control Purchases <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                   <div className="text-[10px] font-black uppercase text-zinc-400">Recent PO</div>
                   <div className="px-2 py-1 rounded bg-red-50 text-red-600 text-[10px] font-black">PENDING</div>
                </div>
                <div className="space-y-4">
                   {[
                     { supplier: 'Fresh Veggies Co.', amount: '$420.00', date: 'Today' },
                     { supplier: 'Dairy Best Inc.', amount: '$150.00', date: 'Yesterday' }
                   ].map((po, idx) => (
                     <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100 italic transition-all hover:translate-x-1">
                        <div className="flex flex-col">
                           <span className="text-sm font-bold text-zinc-900">{po.supplier}</span>
                           <span className="text-[10px] text-zinc-500">{po.date}</span>
                        </div>
                        <span className="text-sm font-black text-red-600">{po.amount}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SALES & REPORTS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <BarChart3 className="w-4 h-4" />
                SALES & REPORTS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Turn Daily Sales into Smart Decisions
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Access real-time insights that help you understand revenue trends, peak hours, and best-selling items.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Daily, weekly & monthly revenue reports.", icon: BarChart3 },
                  { text: "Identify top-performing menu items.", icon: UtensilsCrossed },
                  { text: "Analyze peak business hours.", icon: Clock }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/pos-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  View Sales Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100">
                 <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black uppercase text-zinc-400">Revenue Growth</span>
                    <div className="flex items-center gap-1 text-emerald-500 font-bold text-xs">
                       <ArrowRight className="w-3 h-3 -rotate-45" /> +12%
                    </div>
                 </div>
                 <div className="flex items-end gap-2 h-32 mb-4">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-zinc-100 rounded-t-lg relative group transition-all hover:bg-red-600">
                         <div style={{ height: `${h}%` }} className="absolute bottom-0 left-0 right-0 bg-red-600/20 rounded-t-lg group-hover:bg-red-600"></div>
                      </div>
                    ))}
                 </div>
                 <div className="flex justify-between text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                    <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER MANAGEMENT (CRM) section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Users className="w-4 h-4" />
                CUSTOMER MANAGEMENT (CRM)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Build Stronger Customer Relationships
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Track customer history, preferences, and repeat visits to improve loyalty and retention.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Complete order history tracking.", icon: FileText },
                  { text: "Customer contact database.", icon: Users },
                  { text: "Insights into repeat & high-value customers.", icon: LineChart }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Explore CRM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-5">
                 {[
                   { name: 'Alex Johnson', visits: 12, spent: '$840', initial: 'AJ' },
                   { name: 'Sarah Miller', visits: 8, spent: '$520', initial: 'SM' }
                 ].map((c, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all hover:border-red-500/20 group">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">{c.initial}</div>
                         <div className="flex flex-col">
                            <span className="text-sm font-bold text-zinc-900">{c.name}</span>
                            <span className="text-[10px] text-zinc-500 uppercase font-black">{c.visits} Visits</span>
                         </div>
                      </div>
                      <span className="text-sm font-black text-red-600">{c.spent}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* WEBSITE & ONLINE ORDERING section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Globe className="w-4 h-4" />
                WEBSITE & ONLINE ORDERING
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Take Your Restaurant Online
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Launch a professional restaurant website with direct online ordering — fully integrated with Dine360.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Digital menu management.", icon: Layout },
                  { text: "Direct online orders synced with POS.", icon: RotateCcw },
                  { text: "No third-party commission dependency.", icon: Smartphone }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/restaurant-website">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Launch Your Website <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-4xl p-2 shadow-3xl border border-zinc-100 overflow-hidden group">
                 <div className="bg-zinc-100 rounded-t-3xl p-3 flex gap-1.5 px-6">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                 </div>
                 <div className="p-8 bg-white rounded-b-3xl">
                    <div className="flex items-center justify-between mb-6">
                       <div className="h-4 w-24 bg-zinc-100 rounded"></div>
                       <div className="h-8 w-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-zinc-400" />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="aspect-square bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:border-red-600/20 transition-all"></div>
                       <div className="aspect-square bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:border-red-600/20 transition-all"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY INTEGRATIONS section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <Truck className="w-4 h-4" />
                DELIVERY INTEGRATIONS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                All Delivery Platforms. One Dashboard.
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Integrate third-party delivery services and manage all incoming orders from a single system.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Centralized order tracking.", icon: MapPin },
                  { text: "Unified reporting across platforms.", icon: BarChart3 },
                  { text: "Reduce operational confusion.", icon: RotateCcw }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/multi-menu-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Connect Integrations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-4">
                 {[
                   { platform: 'Uber Eats', status: 'Connected', color: 'text-emerald-500' },
                   { platform: 'DoorDash', status: 'Syncing', color: 'text-amber-500' },
                   { platform: 'Zomato', status: 'Connected', color: 'text-emerald-500' }
                 ].map((p, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 italic">
                      <span className="text-sm font-bold text-zinc-900">{p.platform}</span>
                      <div className="flex items-center gap-2">
                         <span className={`text-[10px] font-black uppercase ${p.color}`}>{p.status}</span>
                         <div className={`w-1.5 h-1.5 rounded-full ${p.color.replace('text', 'bg')}`}></div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS DASHBOARD section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <LineChart className="w-4 h-4" />
                BUSINESS DASHBOARD
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Your Restaurant at a Glance
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Monitor your entire operation in real time with a centralized performance dashboard.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Live revenue tracking.", icon: LineChart },
                  { text: "Branch-wise performance comparison.", icon: Globe },
                  { text: "Instant business health overview.", icon: Fingerprint }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/pos-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  View Insights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 grid grid-cols-2 gap-4">
                 {[
                   { label: 'Today Rev', val: '$2,480', sub: '+14%' },
                   { label: 'Avg Order', val: '$28', sub: '+3%' },
                   { label: 'Guests', val: '124', sub: '+8%' },
                   { label: 'Wastage', val: '$12', sub: '-12%' }
                 ].map((s, i) => (
                   <div key={i} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col gap-1 italic transition-all hover:scale-105">
                      <span className="text-[8px] font-black uppercase text-zinc-400 tracking-widest">{s.label}</span>
                      <span className="text-xl font-black text-zinc-950">{s.val}</span>
                      <span className={`text-[8px] font-black ${s.sub.startsWith('+') ? 'text-emerald-500' : 'text-red-600'}`}>{s.sub} vs ly</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* INVOICING section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-800/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <FileText className="w-4 h-4" />
                INVOICING
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Automated, Accurate & Compliant Billing
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Generate professional invoices with tax compliance and payment tracking built in.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Auto-generated invoices.", icon: FileText },
                  { text: "Tax configuration support.", icon: Layout },
                  { text: "Payment status tracking.", icon: Clock }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/pos-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Manage Invoices <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-5">
                 <div className="h-10 w-full bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-4 justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-600"></div>
                       <span className="text-[10px] font-black text-zinc-900 uppercase">INV-2024-001</span>
                    </div>
                    <span className="text-[10px] font-black text-zinc-400">PDF EXIT</span>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-zinc-500">
                       <span>Item</span><span>Total</span>
                    </div>
                    <div className="h-0.5 w-full bg-zinc-100"></div>
                    <div className="flex justify-between text-sm font-bold text-zinc-950 italic">
                       <span>Cheese Pizza x2</span><span>$32.00</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-zinc-950 italic">
                       <span>Garlic Bread</span><span>$8.00</span>
                    </div>
                    <div className="h-0.5 w-full bg-zinc-100"></div>
                    <div className="flex justify-between text-lg font-black text-red-600">
                       <span>TOTAL</span><span>$40.00</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* MULTI-BRANCH MANAGEMENT section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <CodeBranch className="w-4 h-4" />
                MULTI-BRANCH MANAGEMENT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Scale Without Losing Control
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Manage multiple outlets from one centralized dashboard with branch-specific customization.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Centralized reporting.", icon: BarChart3 },
                  { text: "Branch-specific menus & pricing.", icon: Layout },
                  { text: "Performance comparison tools.", icon: LineChart }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/features/multi-menu-management">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  Manage Branches <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-4">
                 {[
                   { name: 'Downtown Hub', sales: '$12.4k', growth: '+8%' },
                   { name: 'Westside Outlet', sales: '$9.2k', growth: '+12%' },
                   { name: 'Airport Express', sales: '$15.8k', growth: '+15%' }
                 ].map((b, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-red-50 group">
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors uppercase italic">{b.name}</span>
                         <span className="text-[10px] text-zinc-500 font-bold">{b.sales} Sales</span>
                      </div>
                      <span className="text-xs font-black text-emerald-500">{b.growth}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM COMMUNICATION section */}
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 lg:order-2 order-1">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <MessageSquare className="w-4 h-4" />
                TEAM COMMUNICATION
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Keep Your Team Aligned
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Improve coordination with built-in internal messaging and operational updates.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { text: "Real-time team discussions.", icon: MessageSquare },
                  { text: "Order-related communication.", icon: Receipt },
                  { text: "Reduce operational miscommunication.", icon: Fingerprint }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-zinc-300">
                    <div className="mt-0.5 p-1 rounded-md bg-red-600/20 text-red-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="group bg-red-600 text-white px-7 py-3.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/40">
                  See Team Collaboration <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="relative z-10 lg:order-1 order-2">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 space-y-4 text-xs italic">
                 <div className="p-3 bg-red-50 text-red-600 rounded-2xl rounded-bl-none max-w-[80%] self-start font-bold">
                    Order #2483 is ready for pickup!
                 </div>
                 <div className="p-3 bg-zinc-100 text-zinc-900 rounded-2xl rounded-br-none max-w-[80%] ml-auto font-bold">
                    Got it, delivering to Table 7 now.
                 </div>
                 <div className="pt-2 flex items-center gap-2 text-[10px] text-zinc-400 font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Team Online (4)
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <div className="bg-zinc-950 rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] tracking-widest uppercase mb-5">
                <RotateCcw className="w-4 h-4" />
                LIVE STATUS FLOW
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                From prep to 'ready' <br /> in one tap.
              </h2>
              <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-sm">
                Update statuses as orders move. See how the progress bar responds – just like our POS.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-red-600/20 text-red-500 text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> realtime sync
                </span>
                <span className="px-4 py-2 rounded-full bg-red-600/20 text-red-500 text-xs font-bold flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" /> push updates
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-3xl border border-zinc-100 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-900 font-bold text-xs flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5" /> ORDER #2483
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-600/20 transition-all duration-300 ${currentStatus.bgColor}`}>
                    {currentStatus.name}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 relative">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-100 -z-10 mx-6"></div>
                  {[
                    { label: "Prep", icon: ClipboardList },
                    { label: "Cooking", icon: Fire },
                    { label: "Ready", icon: CheckCircle },
                    { label: "Delivery", icon: Bike }
                  ].map((step, idx) => {
                    const isActive = idx <= currentStatusIndex
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-red-600 text-white scale-105 shadow-md shadow-red-600/30' : 'bg-zinc-100 text-zinc-400'
                        }`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-xs pt-4 border-t border-zinc-100">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-bold text-zinc-800">Table 7</span> · 2 items
                </div>

                <button 
                  onClick={cycleStatus}
                  className="w-full py-3 rounded-xl border-2 border-red-600 text-red-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all active:scale-[0.98]"
                >
                  <RotateCcw className="w-5 h-5" /> Update status
                </button>
                <p className="text-zinc-400 text-[10px] text-center font-medium">Click to simulate order progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <div className="bg-zinc-950 rounded-[40px] p-10 lg:p-14 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.1),transparent)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(183,28,28,0.15),transparent)] transition-all"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
                Turn Your Counter Into a <br /> <span className="text-red-600 italic">Command Center</span>.
              </h2>
              <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Join 500+ growing restaurants using Dine360 to streamline dine-in, delivery, reservations, and multi-branch operations — all from one powerful system.
              </p>
              <div className="flex flex-col items-center gap-6 pt-2">
                <button className="group bg-red-600 text-white px-10 py-4 rounded-full font-extrabold text-lg flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 shadow-2xl shadow-red-600/40">
                   Start Your Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5"><Tablet className="w-3.5 h-3.5" /> Works on Any Device</span>
                  <span className="h-1 w-1 bg-zinc-700 rounded-full"></span>
                  <span>No Setup Hassle</span>
                  <span className="h-1 w-1 bg-zinc-700 rounded-full"></span>
                  <span className="text-red-500/80">Free 14-Day Trial</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FeaturesPage