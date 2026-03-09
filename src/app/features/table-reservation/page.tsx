'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Users,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Calendar,
  Layout,
  UserCheck,
  Zap,
  Smartphone,
  Globe,
  LayoutGrid,
  WifiOff,
  Trash2,
  CalendarCheck,
  QrCode,
  Percent,
  Tags
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const TableReservationPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: HERO/OVERVIEW */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">TABLE RESERVATION</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience a smarter table reservation system that keeps your dining floor organized even during peak hours.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Speed Seating */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Speed Seating</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Manage table assignments instantly with a visual floor layout designed for busy restaurants.
              </p>
            </div>

            {/* Reservation Tracking */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Reservation Tracking</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Keep all reservations organized and avoid double bookings with a real-time reservation calendar.
              </p>
            </div>

            {/* Guest Flow Control */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Guest Flow Control</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Reduce waiting times and optimize seating to increase table turnover.
              </p>
            </div>
          </div>

          {/* SECTION 2: TABLE RESERVATION SPLIT */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Calendar className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <LayoutGrid className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-5 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider border border-red-100">
                TABLE RESERVATION
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Master Your Restaurant Seating
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Give your host team complete control over reservations, walk-ins, and table assignments. Dine360 provides a digital floor layout so your team always knows which tables are available, reserved, or occupied.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Real-time table status</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Reservation scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Waitlist management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">POS integration</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More →
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: FLOOR MANAGEMENT (Stats) */}
        <section className="bg-zinc-900 text-white py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                     <Layout className="text-red-500 w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-sm text-zinc-400">Section Visibility</div>
                     <div className="text-xl font-bold">Optimized Layout</div>
                   </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <span className="text-zinc-400">Active Tables</span>
                      <span className="text-white font-mono">24/30</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <span className="text-zinc-400">Queue Status</span>
                      <span className="text-red-500 font-mono">Live Sync</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-zinc-800 rounded-full px-4 py-2 mb-8 border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Section 3: FLOOR MANAGEMENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Built for Busy Dining Rooms
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Never lose track of your tables. Our intelligent system ensures hosts can seat guests quickly and manage reservations without confusion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                  <div className="text-zinc-500 text-sm">Reservation Sync Reliability</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">Instant</div>
                  <div className="text-zinc-500 text-sm">Table Status Updates</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">Live View</div>
                  <div className="text-zinc-500 text-sm">Floor Layout Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DETAILED FEATURES (Light) */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Everything You Need to Manage Tables</h2>
              <p className="text-xl text-zinc-500">
                Our reservation system gives your staff complete visibility into table availability and guest flow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <LayoutGrid className="w-6 h-6" />,
                  title: "Table Layout Management",
                  desc: "Visualize your entire restaurant floor and assign tables quickly."
                },
                {
                  icon: <CalendarCheck className="w-6 h-6" />,
                  title: "Reservation Calendar",
                  desc: "Manage upcoming reservations and guest bookings effortlessly."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Waitlist Management",
                  desc: "Handle walk-in guests and reduce waiting times during peak hours."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Table Status Updates",
                  desc: "Instantly update table availability when guests arrive or leave."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: INTEGRATION */}
        <section className="py-32 px-6 bg-white border-t border-zinc-100">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-bold text-zinc-950 mb-8">Works Seamlessly With Your Restaurant System</h2>
               <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                 Dine360 Table Reservation integrates with your entire restaurant workflow to ensure smooth service.
               </p>
               <ul className="space-y-4">
                 {[
                   "POS billing sync",
                   "Customer profile integration",
                   "Order management connection",
                   "Reservation notifications"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-4 text-zinc-700 font-bold">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className="relative group">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-red-600/5 blur-3xl rounded-full scale-110 group-hover:bg-red-600/10 transition-colors"></div>
                
                <div className="relative bg-zinc-950 rounded-[40px] p-8 md:p-12 border border-zinc-800 shadow-2xl overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                   
                   <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                         <div className="text-white font-black uppercase tracking-widest text-xs">System Status</div>
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-zinc-400 text-[10px] font-bold">Synchronized</span>
                         </div>
                      </div>
                      
                      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                         <div className="h-full bg-red-600 w-full animate-[progress_2s_ease-in-out]"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                            <div className="text-zinc-500 text-[10px] font-bold uppercase mb-1">POS Link</div>
                            <div className="text-white font-bold text-sm">Active</div>
                         </div>
                         <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                            <div className="text-zinc-500 text-[10px] font-bold uppercase mb-1">CRM Sync</div>
                            <div className="text-white font-bold text-sm">Encrypted</div>
                         </div>
                      </div>
                      
                      <div className="p-6 bg-red-600/5 border border-red-600/20 rounded-2xl text-center">
                         <div className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">Reservation Alerts</div>
                         <div className="text-white font-bold">Push Notifications Enabled</div>
                      </div>
                   </div>
                </div>
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your Seating?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their reservations with 
               precision and style.
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

export default TableReservationPage;
