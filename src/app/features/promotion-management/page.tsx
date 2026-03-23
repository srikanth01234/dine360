'use client';

import { 
  ArrowRight, 
  BarChart3, 
  Megaphone, 
  Rocket, 
  Tag,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  Gift,
  Zap,
  Ticket,
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
  ClipboardList,
  Truck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const PromotionManagementPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: PURCHASE MANAGEMENT */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">PURCHASE MANAGEMENT</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Simplify supplier management and purchasing with a structured system that keeps your restaurant stocked and organized.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vendor Management</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Maintain a centralized database of suppliers, pricing agreements, and contact details.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <ClipboardList className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Purchase Order Tracking</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Create and track purchase orders easily to ensure supplies arrive on time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automatic Stock Updates</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Inventory updates automatically when goods are received from suppliers.
              </p>
            </div>
          </div>

          {/* SECTION 2: SUPPLY MANAGEMENT */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <Tag className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <ClipboardList className="w-7 h-7" />
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
                SUPPLY MANAGEMENT
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Keep Your Restaurant Stocked <br/> Without the Chaos.
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360 Purchase Management helps restaurants streamline procurement by organizing supplier information and automating purchase order tracking. This ensures your kitchen always has the ingredients it needs to operate efficiently.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Vendor database management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Purchase order tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Delivery recording</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Inventory synchronization</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: SUPPLIER CONTROL */}
        <section className="bg-zinc-900 text-white py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-l from-red-600/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                 <div className="flex justify-between items-end mb-6">
                   <div>
                     <div className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Purchase Flow</div>
                     <div className="text-3xl font-bold text-white">SMART ORDERS</div>
                   </div>
                    <div className="h-12 w-24 flex items-end space-x-1">
                      <div className="w-1/4 h-1/2 bg-zinc-800 rounded-sm"></div>
                      <div className="w-1/4 h-2/3 bg-zinc-800 rounded-sm"></div>
                      <div className="w-1/4 h-3/4 bg-zinc-700 rounded-sm"></div>
                      <div className="w-1/4 h-full bg-red-600 rounded-sm"></div>
                    </div>
                 </div>
                 <div className="space-y-4 pt-6 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">Supplier Records</span>
                      <span className="text-red-500 font-bold">Centralized Vendor Database</span>
                    </div>
                     <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">Stock Sync</span>
                      <span className="text-red-500 font-bold">Instant Inventory Updates</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center space-x-2 bg-zinc-800 rounded-full px-4 py-2 mb-8 border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Built for Reliable Supply Chains</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                SUPPLIER CONTROL
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Ensure your restaurant never runs out of critical ingredients with organized purchasing workflows. Automated requests and vendor management keep your operations smooth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-500 text-sm">Order Accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">Live</div>
                  <div className="text-zinc-500 text-sm">Stock Sync</div>
                </div>
                 <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-zinc-500 text-sm">Vendor Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Everything You Need to Manage Purchases */}
        <section className="bg-zinc-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 uppercase tracking-tight">Everything You Need to Manage Purchases</h2>
              <p className="text-xl text-zinc-500">
                Our purchase management tools help restaurants maintain strong supplier relationships and control procurement costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Supplier Management",
                  desc: "Maintain supplier contact details and pricing information in a unified dashboard."
                },
                {
                  icon: <ClipboardList className="w-6 h-6" />,
                  title: "Purchase Orders",
                  desc: "Generate and track purchase orders easily with automated status updates."
                },
                {
                  icon: <Truck className="w-6 h-6" />,
                  title: "Delivery Tracking",
                  desc: "Record incoming shipments and update inventory instantly upon arrival."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Procurement Reports",
                  desc: "Analyze purchasing trends and supplier performance to optimize your costs."
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

        {/* SECTION 5: Works Seamlessly With Your Restaurant System */}
        <FeatureQuickNav />

        {/* CTA SECTION */}
        <section className="bg-zinc-950 py-24 px-6 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 blur-[150px] rounded-full"></div>
           </div>
           
           <div className="max-w-7xl mx-auto text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Works Seamlessly With Your Restaurant System</h2>
             <div className="max-w-2xl mx-auto grid grid-cols-2 gap-6 text-left mb-12">
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-red-600" />
                 <span className="text-zinc-300">Inventory stock updates</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-red-600" />
                 <span className="text-zinc-300">POS ingredient consumption</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-red-600" />
                 <span className="text-zinc-300">Supplier database integration</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-red-600" />
                 <span className="text-zinc-300">Financial and reporting tools</span>
               </div>
             </div>
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

export default PromotionManagementPage;
