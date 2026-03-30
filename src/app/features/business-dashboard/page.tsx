'use client';

import { 
  ArrowRight, 
  BarChart3,
  CheckCircle,
  LayoutDashboard,
  Clock,
  Zap,
  LineChart,
  ClipboardList,
  Target,
  Search,
  PieChart,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const BusinessDashboardPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: BUSINESS INSIGHTS */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">BUSINESS INSIGHTS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Smart Business Dashboard</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Make smarter decisions with a powerful dashboard that gives you real-time insights into sales, operations, and performance — all in one place.
            </p>
          </div>

          {/* Card Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Data Visibility</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                View live sales, orders, and operational metrics instantly from a centralized dashboard.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Insights</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Understand your business performance with detailed analytics on revenue, orders, and trends.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Actionable Reports</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Turn data into decisions with easy-to-read reports that help you optimize operations and increase profitability.
              </p>
            </div>
          </div>

          {/* SECTION 2: ANALYTICS & REPORTING */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <BarChart3 className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <LineChart className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
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
                ANALYTICS & REPORTING
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Turn Data Into <br/> Business Growth
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360’s Business Dashboard provides a complete overview of your restaurant’s performance. From daily sales to long-term trends, everything is available in one intuitive interface.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Real-time sales tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Revenue and order analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Performance reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Centralized dashboard view</span>
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
                Built for Data-Driven Decisions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 max-w-2xl mx-auto text-lg"
              >
                Stay informed with live data and insights that help you make quick and effective business decisions.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-2xl text-center group hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-red-500/30">
                    <LineChart className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">Live</h3>
                  <p className="text-zinc-400 font-medium tracking-tight">Sales & Order Tracking</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-2xl text-center group hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-red-500/30">
                    <Clock className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">Instant</h3>
                  <p className="text-zinc-400 font-medium tracking-tight">Report Generation</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-2xl text-center group hover:border-red-600/50 hover:bg-zinc-800 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-red-500/30">
                    <Target className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2 group-hover:text-red-500 transition-colors leading-[0.9] pt-2">Data-Driven</h3>
                  <p className="text-zinc-400 font-medium tracking-tight">Decision Making</p>
                </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SMART BUSINESS ANALYTICS (Cards) */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                SMART BUSINESS ANALYTICS
              </span>
              <h2 className="text-3xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Everything You Need to Understand Your Business</h2>
              <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Get full visibility into your restaurant operations with powerful analytics tools designed for growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Sales Insights</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Track daily, weekly, and monthly revenue in real time.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Order Analytics</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Analyze order trends and identify peak hours.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Performance Reports</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Generate reports to monitor business performance.</p>
              </div>
              <div className="bg-zinc-950 p-8 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Trend Analysis</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Understand customer behavior and optimize operations.</p>
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
                Dine360 Business Dashboard integrates with all modules to provide accurate, real-time insights across your entire operation.
              </p>
              
              <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 italic transition-all hover:bg-white hover:shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 italic">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800 italic">POS Sales Data Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 italic transition-all hover:bg-white hover:shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 italic">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800 italic">Inventory & Purchase Tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 italic transition-all hover:bg-white hover:shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 italic">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800 italic">CRM Customer Insights</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-100 italic transition-all hover:bg-white hover:shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 italic">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-800 italic">Order & Delivery Analytics</span>
                  </div>
              </div>
            </div>

            {/* Abstract Graphic for Integrations */}
            <div className="relative h-[400px] bg-zinc-50 rounded-[40px] border border-zinc-200 overflow-hidden flex items-center justify-center order-1 lg:order-2 shadow-2xl">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Central Hub */}
                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-red-50 group hover:scale-110 transition-transform duration-500">
                   <div className="text-2xl font-black text-red-600 tracking-tighter uppercase italic">Dashboard</div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute w-[80%] h-[1px] bg-zinc-300"></div>
                <div className="absolute w-[1px] h-[80%] bg-zinc-300"></div>

                {/* Satellite Nodes */}
                 <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-zinc-200 flex items-center justify-center group hover:translate-y-[-5px] transition-transform">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <LineChart className="w-5 h-5" />
                    </div>
                 </div>
                 <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-zinc-200 flex items-center justify-center group hover:translate-y-[5px] transition-transform">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        <Zap className="w-5 h-5" />
                    </div>
                 </div>
                 <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-zinc-200 flex items-center justify-center group hover:translate-y-[-5px] transition-transform">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                        <Search className="w-5 h-5" />
                    </div>
                 </div>
                 <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-zinc-200 flex items-center justify-center group hover:translate-y-[5px] transition-transform">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <PieChart className="w-5 h-5" />
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Ready to See Your Business Growth?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
               Join hundreds of restaurants that use Dine360 to monitor their performance with 
               precision and style.
             </p>
             <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95 flex items-center gap-2 mx-auto uppercase tracking-wide">
               Start Free Trial <ArrowRight className="w-5 h-5" />
             </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessDashboardPage;
