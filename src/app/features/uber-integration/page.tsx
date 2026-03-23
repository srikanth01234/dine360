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
  Navigation,
  MapPin,
  Car,
  PackageCheck,
  MonitorPlay,
  Receipt,
  Headphones,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const UberIntegrationPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: DELIVERY INTEGRATION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">DELIVERY INTEGRATION</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Connect your restaurant with delivery platforms and manage all incoming orders from one centralized system.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Unified Order Dashboard</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                View and manage all delivery orders directly within Dine360 without switching between apps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automatic Order Sync</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Delivery orders appear instantly in the POS and kitchen display, ensuring faster preparation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Delivery Performance Tracking</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Monitor delivery order volumes, revenue, and performance from one dashboard.
              </p>
            </div>
          </div>

          {/* SECTION 2: DELIVERY PLATFORM INTEGRATION */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Globe className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Bike className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-5 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                DELIVERY PLATFORM INTEGRATION
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Manage All Delivery <br/> Orders in One Place.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360 integrates with delivery platforms like Uber to bring every online order directly into your restaurant system. This eliminates manual order entry and ensures the kitchen receives orders instantly.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Uber order integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Automatic order synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Delivery order tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Unified reporting dashboard</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: DELIVERY OPERATIONS */}
        <section className="bg-zinc-950 py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase">OPTIMIZE YOUR DELIVERY OPERATIONS</h2>
                <div className="w-20 h-1.5 bg-red-600 mb-8"></div>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Dine360 provides the tools you need to streamline delivery workflows and improve order accuracy. Take full control of your online business with features designed for high-volume delivery operations.
                </p>
                <div className="space-y-6">
                  {[
                    "Faster order preparation and dispatch",
                    "Reduced manual errors and missing tickets",
                    "Seamless coordination with delivery partners",
                    "Real-time updates for kitchen and staff"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/10 blur-[120px] rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-6">
                  {/* Stat Card 1 */}
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">100%</div>
                    <div className="text-zinc-400 text-sm font-medium">Auto-sync accuracy</div>
                  </div>
                  {/* Stat Card 2 */}
                  <div className="p-8 mt-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">5min</div>
                    <div className="text-zinc-400 text-sm font-medium">Faster prep time</div>
                  </div>
                  {/* Stat Card 3 */}
                  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">30%</div>
                    <div className="text-zinc-400 text-sm font-medium">Revenue growth</div>
                  </div>
                  {/* Stat Card 4 */}
                  <div className="p-8 mt-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">0</div>
                    <div className="text-zinc-400 text-sm font-medium">Missed orders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EVERYTHING YOU NEED FOR ONLINE DELIVERY */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Everything You Need for Online Delivery</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our delivery integration tools help restaurants manage online orders without operational confusion.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { 
                title: "Order Synchronization", 
                desc: "Delivery platform orders sync instantly with POS and kitchen.", 
                icon: RefreshCw
              },
              { 
                title: "Centralized Dashboard", 
                desc: "Monitor all delivery orders from one screen.", 
                icon: MonitorPlay 
              },
              { 
                title: "Performance Insights", 
                desc: "Analyze delivery sales trends and revenue growth.", 
                icon: BarChart3 
              },
              { 
                title: "Kitchen Coordination", 
                desc: "Send delivery orders directly to the kitchen display system.", 
                icon: LayoutGrid 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 group text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WORKS SEAMLESSLY WITH YOUR RESTAURANT SYSTEM */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 text-center mb-6 leading-tight">
              Works Seamlessly With <br/> Your Restaurant System
            </h2>
            <p className="text-gray-500 text-lg md:text-xl text-center mb-12 max-w-3xl leading-relaxed">
              Dine360 delivery integration connects with the rest of your platform to ensure smooth order handling.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "POS order synchronization",
                "Kitchen display system routing",
                "Sales analytics reporting",
                "Customer order history tracking"
              ].map((service, idx) => (
                <div key={idx} className="px-6 py-3 bg-zinc-50 rounded-full border border-zinc-200 text-zinc-700 font-bold hover:border-red-600 hover:text-red-600 transition-colors">
                  {service}
                </div>
              ))}
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Boost Your Delivery?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to dominate the delivery market.
             </p>
             <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
               Contact Us
             </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UberIntegrationPage;