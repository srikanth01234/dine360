'use client';

import { 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Zap,
  Clock,
  LayoutDashboard,
  ShieldCheck,
  CreditCard,
  Receipt,
  Printer,
  Wifi,
  BarChart3,
  Users,
  Database,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const POSPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: POINT OF SALE HERO */}
        <section className="py-24 px-6 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block animate-bounce">POWERFUL POINT OF SALE</span>
            <h1 className="text-5xl md:text-6xl font-black text-zinc-950 mb-6 uppercase tracking-tighter">Modern POS System <br/> Built for Speed</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Experience the fastest checkout in the industry. Our cloud-native POS handles high-volume transactions with ease, keeping your lines moving and your customers happy.
            </p>
          </div>

          {/* POS Terminal Illustration/Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            {/* Speed */}
            <div className="flex flex-col items-center p-10 rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-2xl group">
              <div className="w-20 h-20 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight uppercase">Lightning Fast</h3>
              <p className="text-zinc-500 leading-relaxed">
                Process orders in seconds with zero lag, even during peak rush hours.
              </p>
            </div>

            {/* Security */}
            <div className="flex flex-col items-center p-10 rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-2xl group">
              <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 text-white group-hover:bg-red-600 transition-all transform group-hover:-rotate-6">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight uppercase">Bank-Grade Security</h3>
              <p className="text-zinc-500 leading-relaxed">
                PCI-compliant transactions with end-to-end encryption for every payment.
              </p>
            </div>

            {/* Cloud */}
            <div className="flex flex-col items-center p-10 rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-red-600/30 hover:shadow-2xl group">
              <div className="w-20 h-20 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight uppercase">Always Syncing</h3>
              <p className="text-zinc-500 leading-relaxed">
                Your data is always backed up to the cloud and accessible from anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HARDWARE & MOBILE (Split Layout) */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Interactive Graphic */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-gradient-to-tr from-red-600/20 to-transparent blur-3xl opacity-50 -z-10 rounded-full"></div>
              <div className="relative bg-zinc-950 rounded-[40px] p-12 border border-zinc-800 shadow-3xl overflow-hidden aspect-square flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                
                {/* POS Screen Simulation */}
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xs italic">D360</div>
                         <div>
                            <div className="text-white font-bold text-sm tracking-tight uppercase">Checkout #4</div>
                            <div className="text-zinc-500 text-[10px] font-bold">12:45 PM | OPERATOR: SARAH</div>
                         </div>
                      </div>
                      <Wifi className="w-4 h-4 text-green-500" />
                   </div>
                   
                   <div className="space-y-3">
                      {[
                        { item: 'Margherita Pizza (Large)', price: '$18.00' },
                        { item: 'Garlic Bread Sticks', price: '$6.50' },
                        { item: 'Classic Cola', price: '$3.00' }
                      ].map((line, i) => (
                        <div key={i} className="flex justify-between text-sm py-1 border-b border-zinc-900">
                          <span className="text-zinc-300">{line.item}</span>
                          <span className="text-white font-bold font-mono">{line.price}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="pt-4 space-y-2">
                       <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase">
                          <span>Subtotal</span>
                          <span>$27.50</span>
                       </div>
                       <div className="flex justify-between text-2xl text-white font-black tracking-tighter uppercase pt-2 border-t border-zinc-800">
                          <span>Total</span>
                          <span className="text-red-500">$29.84</span>
                       </div>
                   </div>

                   <button className="w-full bg-red-600 text-white font-black py-4 rounded-xl shadow-lg shadow-red-600/20 uppercase tracking-widest text-sm hover:bg-red-500 transition-colors">
                      Process Payment (F10)
                   </button>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <span className="inline-block px-5 py-2 bg-red-600 text-white rounded-full text-xs font-black uppercase tracking-[0.2em]">
                Enterprise POS Features
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-[0.9] uppercase tracking-tighter">
                Hardware to <br/> Suit Your Style
              </h2>
              
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                Our POS software runs on anything. From enterprise-grade dual-screen terminals to portable handhelds for table-side ordering—we provide the flexibility your staff needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-tight mb-1">Mobile POS</h4>
                    <p className="text-zinc-500 text-xs">Orders and payments right at the table.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-tight mb-1">Integrated Payments</h4>
                    <p className="text-zinc-500 text-xs">Supports Chip, Pin, NFC, and QR.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-tight mb-1">Smart Printing</h4>
                    <p className="text-zinc-500 text-xs">Zero-config kitchen and receipt routing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase text-sm tracking-tight mb-1">Offline Mode</h4>
                    <p className="text-zinc-500 text-xs">Keep selling even when WiFi goes down.</p>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-red-600 font-black uppercase tracking-widest text-sm pt-6 group transition-all"
              >
                View Compatible Hardware 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* SECTION 3: DARK STATS (TRANSACTION SPEED) */}
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#ef444422,transparent_100%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-24">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] uppercase tracking-tighter">
                Built for the <span className="text-red-500">Rush Hour</span>
              </h2>
              <p className="text-zinc-400 text-xl font-medium leading-relaxed">
                When the queue is out the door, your POS shouldn't be the bottleneck. Dine360 is optimized for millisecond response times and high-concurrency environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-zinc-900 pt-16">
              {[
                { val: '2.4s', label: 'AVG. Checkout Time', sub: 'Faster than competitors' },
                { val: '100%', label: 'Offline Resiliency', sub: 'No lost transactions' },
                { val: '0ms', label: 'Payment Latency', sub: 'Instant authorization' },
                { val: '2k+', label: 'Daily TX/Terminal', sub: 'Enterprise stability' }
              ].map((stat, i) => (
                <div key={i} className="space-y-4 group cursor-default">
                   <div className="text-5xl font-black text-white group-hover:text-red-500 transition-colors duration-500 tracking-tighter uppercase">{stat.val}</div>
                   <div className="space-y-1 border-l-2 border-red-600 pl-4">
                      <div className="text-sm font-black uppercase tracking-widest">{stat.label}</div>
                      <div className="text-zinc-500 text-xs font-bold">{stat.sub}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: POS CATEGORY GRID */}
        <section className="bg-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 px-4">
              <div className="max-w-2xl">
                <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block underline decoration-4 underline-offset-8">INTELLIGENT WORKFLOWS</span>
                <h2 className="text-4xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter leading-tight">One System, <br/> Every Vertical</h2>
              </div>
              <p className="text-zinc-500 font-medium max-w-sm">
                Tailor the interface for Fine Dining, QSR, Bar, or Bakery with one-click workspace templates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 px-4">
               {[
                 {
                   title: "Table & Floor Management",
                   desc: "Real-time table status with visual floor plans and split-bill intelligence.",
                   icon: <LayoutDashboard className="w-8 h-8" />
                 },
                 {
                   title: "KDS Integration",
                   desc: "Orders sent instantly to kitchen screens with prep-time tracking.",
                   icon: <Clock className="w-8 h-8" />
                 },
                 {
                   title: "Staff Commission",
                   desc: "Automatic tip pooling and performance tracking built into checkout.",
                   icon: <Users className="w-8 h-8" />
                 },
                 {
                   title: "Inventory Deduct",
                   desc: "Real-time stock reduction for every button press at the POS.",
                   icon: <Database className="w-8 h-8" />
                 },
                 {
                   title: "Advanced Reporting",
                   desc: "Deep-dive sales analytics and tax reports generated with one tap.",
                   icon: <BarChart3 className="w-8 h-8" />
                 },
                 {
                   title: "Customer Loyalty",
                   desc: "Assign points and redeem rewards directly from the transaction screen.",
                   icon: <Target className="w-8 h-8" />
                 }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-zinc-50 rounded-3xl border border-transparent hover:border-zinc-200 transition-all group">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-zinc-950 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black text-zinc-950 mb-4 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PAYMENT ECOSYSTEM (Orbital Integration) */}
        <section className="py-32 px-6 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-10">
                    <h2 className="text-5xl md:text-6xl font-black text-zinc-950 uppercase tracking-tighter leading-[0.9]">
                       Accept Every <br/> <span className="text-red-500 underline decoration-8 decoration-red-600/10">Payment Type</span>
                    </h2>
                    
                    <div className="space-y-6">
                       <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                             <CreditCard className="w-8 h-8" />
                          </div>
                          <div>
                             <h4 className="font-black text-zinc-900 uppercase tracking-tight">Contactless & EMV</h4>
                             <p className="text-sm text-zinc-500 font-medium">Full support for Visa, Mastercard, AMEX, and Interac.</p>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                             <Receipt className="w-8 h-8" />
                          </div>
                          <div>
                             <h4 className="font-black text-zinc-900 uppercase tracking-tight">Digital Wallets</h4>
                             <p className="text-sm text-zinc-500 font-medium">Apple Pay, Google Pay, and Samsung Pay integrated.</p>
                          </div>
                       </div>
                    </div>
                    
                    <button className="bg-zinc-950 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-600 transition-all flex items-center gap-3">
                       Talk to an Expert
                       <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>

                 <div className="relative">
                    <div className="w-full aspect-square bg-white rounded-full border border-zinc-200 p-20 relative flex items-center justify-center shadow-inner">
                       <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:30px_30px] rounded-full"></div>
                       
                       {/* Central Terminal */}
                       <div className="relative z-10 w-48 h-48 bg-zinc-950 rounded-3xl shadow-3xl rotate-12 flex items-center justify-center p-8 border-4 border-zinc-800">
                          <div className="w-full text-center space-y-2">
                             <div className="text-red-600 font-black text-xl italic tracking-tighter uppercase italic">D360</div>
                             <div className="h-1 bg-zinc-800 w-1/2 mx-auto"></div>
                             <div className="text-[8px] text-zinc-600 uppercase font-black">Ready to Swipe</div>
                          </div>
                       </div>

                       {/* Method Orbits */}
                       <div className="absolute top-10 left-1' w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-zinc-100 -rotate-12">
                          <CreditCard className="w-10 h-10 text-zinc-950" />
                       </div>
                       <div className="absolute bottom-1/4 right-0 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-zinc-100 rotate-12">
                          <Smartphone className="w-10 h-10 text-red-600" />
                       </div>
                       <div className="absolute top-1/2 -left-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-zinc-100 -rotate-3">
                          <Printer className="w-10 h-10 text-zinc-400" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* QUICK NAV */}
        <FeatureQuickNav />

        {/* CTA SECTION */}
        <section className="bg-zinc-950 py-32 px-6 text-white overflow-hidden relative">
           <div className="absolute bottom-0 right-0 w-full h-[500px] bg-red-600/10 blur-[200px] pointer-events-none rounded-full translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-6 block">NO-RISK SETUP</span>
             <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-tight">Elevate Your Checkout Experience.</h2>
             <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
               Hardware bundles start from $0 upfront. Experience the power of Dine360 POS 
               in your restaurant today with our 30-day money-back guarantee.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-red-600 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 active:scale-95 uppercase tracking-widest">
                  Get Started Now
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-zinc-800 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-zinc-900 transition-all uppercase tracking-widest text-sm">
                  View Demo
                </button>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default POSPage;
