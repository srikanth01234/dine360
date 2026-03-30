'use client';

import { 
  ArrowRight, 
  Megaphone,
  CheckCircle,
  TicketPercent,
  Clock,
  LineChart,
  Zap,
  Target,
  BarChart3,
  Users,
  LayoutDashboard,
  Gift,
  MousePointer2,
  Calendar,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PromotionsPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: PROMOTIONS MANAGEMENT */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">PROMOTIONS MANAGEMENT</span>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Smart Promotions & Offers System</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Boost customer engagement and increase sales with powerful promotion tools that let you create, manage, and track offers effortlessly.
            </p>
          </div>

          {/* Card Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Create Targeted Offers</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Design discounts, combo deals, and special promotions tailored to your customers and business goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Campaigns</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Schedule and run promotions automatically based on time, events, or customer behavior.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Track Performance</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Monitor how your offers perform in real time and optimize campaigns to maximize revenue.
              </p>
            </div>
          </div>

          {/* SECTION 2: PROMOTION ENGINE */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Megaphone className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <TicketPercent className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <MousePointer2 className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7" />
                </div>
                <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-5 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                PROMOTION ENGINE
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Turn Every Offer Into a <br/> Growth Opportunity
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360’s promotions system helps restaurants attract more customers and increase repeat visits with smart, data-driven campaigns. Create offers that drive sales without adding operational complexity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Discount and combo offer creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Time and event-based promotions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Customer-targeted campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Integration with POS and CRM</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: REAL-TIME PERFORMANCE (Dark) */}
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-red-500 font-bold uppercase tracking-widest text-sm"
              >
                REAL-TIME PERFORMANCE
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mt-3 mb-6"
              >
                Built to Maximize Revenue Impact
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 max-w-2xl mx-auto text-lg"
              >
                Track how your promotions perform and make smarter decisions using real-time insights. Understand what works best and continuously improve your campaigns.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "30%+", label: "Increase in Repeat Customers", icon: Users },
                { value: "Real-Time", label: "Offer Performance Tracking", icon: BarChart3 },
                { value: "Data-Driven", label: "Campaign Optimization", icon: Sparkles }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-2xl text-center group hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-red-500/30">
                    <stat.icon className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">{stat.value}</h3>
                  <p className="text-zinc-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SMART MARKETING TOOLS (Cards) */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                SMART MARKETING TOOLS
              </span>
              <h2 className="text-3xl font-bold text-zinc-950 mb-4">Launch and Manage Promotions with Ease</h2>
              <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Create impactful promotions that attract customers, increase order value, and drive long-term loyalty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <TicketPercent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Discount Management</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Create percentage or fixed discounts for specific items, categories, or orders.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Combo & Bundle Offers</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Design combo deals and meal bundles to increase average order value.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Scheduled Campaigns</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Run promotions automatically during peak hours, weekends, or special events.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Customer Targeting</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Offer personalized promotions based on customer behavior and purchase history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTEGRATION LIST */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950">
                Works Seamlessly With <br/> <span className="text-red-600">Your Restaurant System</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Dine360 Promotions integrates with your entire platform to ensure every campaign runs smoothly and delivers results.
              </p>
              
              <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">POS Billing & Discounts Sync</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">CRM Customer Data Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Sales Analytics Tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Loyalty & Rewards Programs</span>
                  </div>
              </div>
            </div>

            {/* Abstract Graphic for Integrations */}
            <div className="relative h-[400px] bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden flex items-center justify-center order-1 lg:order-2">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Central Hub */}
                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-red-50">
                   <div className="text-2xl font-black text-red-600">OFFER</div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute w-64 h-64 border border-red-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-80 h-80 border border-zinc-200 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                
                {/* Connection Points */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-xl shadow-lg border border-zinc-100 flex items-center justify-center text-red-600 z-20">
                   <TicketPercent className="w-6 h-6" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white rounded-xl shadow-lg border border-zinc-100 flex items-center justify-center text-orange-600 z-20">
                   <Gift className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-xl shadow-lg border border-zinc-100 flex items-center justify-center text-blue-600 z-20">
                   <Users className="w-6 h-6" />
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PromotionsPage;
