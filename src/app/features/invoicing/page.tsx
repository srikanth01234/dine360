'use client';

import { 
  ArrowRight, 
  BarChart3, 
  ClipboardList,
  CheckCircle,
  Menu,
  Clock,
  Layers,
  Search,
  TrendingUp,
  ClipboardCheck,
  Zap,
  Smartphone,
  Globe,
  LayoutGrid,
  FileText,
  Receipt,
  CreditCard,
  FileCheck,
  Download,
  ShieldCheck,
  Calculator,
  Wallet,
  PieChart,
  History
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const InvoicingPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: INVOICE MANAGEMENT */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <h2 className="text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">INVOICE MANAGEMENT</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Create professional invoices automatically and keep your restaurant’s billing organized and compliant.
            </p>
          </div>

          {/* 3 Columns Layout with Bordered Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32 px-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automatic Invoice Generation</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Invoices are created instantly when orders are completed, saving time for your staff.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tax Calculation</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Built-in tax handling ensures accurate billing and compliance with local regulations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-10 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 group">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Payment Tracking</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Monitor invoice payments and maintain a clear financial record for every transaction.
              </p>
            </div>
          </div>

          {/* SECTION 2: SMART BILLING */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 mb-24">
            {/* Left: Illustration Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-full border border-zinc-100 shadow-2xl aspect-square flex items-center justify-center max-sm:mx-auto overflow-visible">
                {/* Central Icon */}
                <div className="w-40 h-40 bg-zinc-50 rounded-full flex items-center justify-center text-red-600 shadow-inner border border-zinc-100">
                  <FileText className="w-20 h-20" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 right-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <Receipt className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 border border-zinc-50 hover:scale-110 transition-transform">
                  <CreditCard className="w-7 h-7" />
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
                SMART BILLING
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight">
                Simplify Financial <br/> Operations
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Dine360 invoicing automates the billing process so restaurant owners can focus on operations rather than paperwork. From order billing to financial records, everything is managed within the system.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Automated invoice generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Tax and billing configuration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Payment tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-bold text-zinc-700">Financial reporting</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-zinc-950 font-bold hover:text-red-600 transition-all group pt-6">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: BILLING PERFORMANCE */}
        <section className="bg-zinc-950 py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase">BILLING PERFORMANCE</h2>
                <div className="w-20 h-1.5 bg-red-600 mb-8"></div>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Designed for accurate transactions. Ensure every transaction is recorded and invoiced properly.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Instant Billing", desc: "Automatic Invoice Creation" },
                    { title: "Accurate Taxation", desc: "Built-In Tax Calculations" },
                    { title: "Clear Records", desc: "Complete Payment Tracking" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-zinc-200">{item.title}</span>
                        <span className="text-zinc-400 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/10 blur-[120px] rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-6">
                   <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">100%</div>
                    <div className="text-zinc-400 text-sm font-medium">Invoicing Accuracy</div>
                  </div>
                   <div className="p-8 mt-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">SEC</div>
                    <div className="text-zinc-400 text-sm font-medium">Instant Generation</div>
                  </div>
                   <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">0</div>
                    <div className="text-zinc-400 text-sm font-medium">Tax Errors</div>
                  </div>
                   <div className="p-8 mt-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-red-600/50 transition-colors group">
                    <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform inline-block">24/7</div>
                    <div className="text-zinc-400 text-sm font-medium">Audit Trail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EVERYTHING YOU NEED FOR BILLING */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 uppercase tracking-tight">Everything You Need for Billing</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Invoice Generation", 
                desc: "Create professional invoices for every order.", 
                icon: FileText
              },
              { 
                title: "Tax Management", 
                desc: "Configure taxes and ensure accurate billing.", 
                icon: Calculator 
              },
              { 
                title: "Payment Records", 
                desc: "Track payments and outstanding invoices.", 
                icon: Wallet 
              },
              { 
                title: "Financial Reporting", 
                desc: "Analyze billing data and revenue insights.", 
                icon: BarChart3 
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
              <PieChart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 text-center mb-6 leading-tight">
              Works Seamlessly With <br/> Your Restaurant System
            </h2>
            <p className="text-gray-500 text-lg md:text-xl text-center mb-12 max-w-3xl leading-relaxed">
              Dine360 invoicing integrates with other modules to ensure financial accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "POS billing integration",
                "Sales analytics reporting",
                "Customer CRM data",
                "Inventory and purchase records"
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
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Automate Your Billing?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
               Join hundreds of restaurants that use Dine360 to manage their invoicing with precision and ease.
             </p>
             <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
               Learn More
             </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvoicingPage;