'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  ClipboardList,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  ClipboardCheck,
  Bike,
  Zap,
  Smartphone,
  Globe,
  LayoutGrid,
  WifiOff,
  Trash2,
  Users,
  CalendarCheck,
  QrCode,
  Percent,
  Tags,
  Heart,
  Gift,
  Star,  RefreshCw,  UserPlus
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const LoyaltyManagementPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: CUSTOMER RELATIONSHIP MANAGEMENT */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">CUSTOMER RELATIONSHIP MANAGEMENT</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Build stronger relationships with every guest by tracking their preferences, visit history, and dining behavior.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Profiles</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Automatically create detailed customer profiles with order history, preferences, and visit frequency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Guest Insights</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Understand your customers better by analyzing what they order, when they visit, and how often they return.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Loyalty Opportunities</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Identify repeat guests and create personalized experiences that encourage them to come back.
              </p>
            </div>
          </div>

          {/* Lower Split Section */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Users className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <UserPlus className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Star className="w-7 h-7" />
                </div>
                <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-5 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                CRM SYSTEM
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Turn Guests Into <br/> Loyal Customers
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360 CRM helps restaurants build meaningful relationships with their guests by collecting valuable customer insights automatically during every transaction. From order preferences to visit frequency, everything is tracked to help you deliver personalized service.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Automatic customer profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Order history tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Guest preferences insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Contact database management</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: CUSTOMER INSIGHTS (Professional Design) */}
        <section className="bg-zinc-950 text-white py-32 px-6 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/5 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 mb-6 text-red-500">
                  <span className="w-12 h-[2px] bg-red-600"></span>
                  <span className="font-bold uppercase tracking-[0.2em] text-sm">Customer Insights</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight leading-none">
                  Built for <span className="text-red-600">Guest Experience</span>
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  Deliver better service by understanding your guests and their preferences with our advanced behavioral tracking engine.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full border border-red-600/30 bg-red-600/10 flex items-center justify-center text-red-500">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-red-600/50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <TrendingUp className="w-12 h-12 text-red-600" />
                </div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-white mb-6 group-hover:text-red-500 transition-colors">100%</div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">Customer Order Tracking</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Capture every preference and dietary requirement automatically at the point of sale.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative p-10 bg-zinc-900/50 rounded-3xl border border-zinc-800 transition-all duration-500 hover:border-red-600/50 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <RefreshCw className="w-12 h-12 text-red-600" />
                </div>
                <div className="relative z-10">
                  <div className="text-6xl font-black text-white mb-6 group-hover:text-red-500 transition-colors">Real-Time</div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">Profile Updates</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Guest history is synced across all terminal locations instantly for seamless service.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative p-10 bg-red-600 rounded-3xl border border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white mb-6 flex items-center gap-2">
                    SMART <br/> INSIGHTS
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Guest behavior analysis</h3>
                  <p className="text-red-100 text-sm leading-relaxed">
                    Identify your most profitable customers and their visiting patterns with AI-driven analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Everything You Need to Know Your Customers */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 uppercase tracking-tight">Everything You Need to Know Your Customers</h2>
              <p className="text-xl text-zinc-500">
                Our CRM tools give you full visibility into your customer base.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Customer Profiles</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Store guest information automatically with every order.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Order History</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Track previous orders to understand customer preferences.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Visit Tracking</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Monitor how frequently guests visit your restaurant.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Contact Management</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Maintain a centralized database of customer contact details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTEGRATION LIST */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 leading-tight uppercase tracking-tight">
                Works Seamlessly With <br/> <span className="text-red-600">Your Restaurant System</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Dine360 CRM integrates across your entire restaurant platform.
              </p>
              
              <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">POS customer sync</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Reservation system connection</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Sales analytics integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800">Marketing & loyalty tools</span>
                  </div>
              </div>
            </div>

            {/* Abstract Graphic area - keeping structure as-is */}
            <div className="relative h-[400px] bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden flex items-center justify-center order-1 lg:order-2">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-red-50">
                  <Users className="w-16 h-16 text-red-600" />
                </div>
            </div>
        </section>

        {/* QUICK NAV */}
        <FeatureQuickNav />

        {/* CTA SECTION */}
        <section className="bg-zinc-950 py-24 px-6 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 blur-[150px] rounded-full"></div>
           </div>
           
           <div className="max-w-7xl mx-auto text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Ready to Build Guest Loyalty?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to turn casual diners into 
               loyal fans.
             </p>
             <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
               Start Free Trial
             </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LoyaltyManagementPage;