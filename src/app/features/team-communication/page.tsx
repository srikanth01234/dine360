'use client';

import { 
  ArrowRight, 
  CheckCircle,
  Users,
  MessageCircle,
  Zap,
  Clock,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
  Calendar,
  Bell,
  Search,
  CheckCircle2,
  Lock,
  Flag
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureQuickNav from '@/components/FeatureQuickNav';

const TeamCommunicationPage = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-20">
      <Navbar />

      <main>
        {/* SECTION 1: TEAM HUB HERO */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 -z-10"></div>
          
          <div className="max-w-7xl mx-auto text-center mb-20 px-4">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Unified Team HUB</span>
            <h1 className="text-5xl md:text-6xl font-black text-zinc-950 mb-6 uppercase tracking-tighter leading-[0.9]">Connect Your Staff <br/> Like Never Before</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed">
              Eliminate chaos and miscommunication. Dine360 Team Communication brings your front-of-house, kitchen, and management together in one real-time workspace.
            </p>
          </div>

          {/* Core Feature Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="p-10 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 text-white group-hover:bg-red-600 transition-colors">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-zinc-950 mb-4 uppercase tracking-tight">Instant Messaging</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Direct and group chats for shifts, kitchen stations, and emergency alerts.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 text-white group-hover:bg-red-600 transition-colors">
                <Flag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-zinc-950 mb-4 uppercase tracking-tight">Priority Tasks</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Assign side-work and opening duties with real-time completion tracking.
              </p>
            </div>

            <div className="p-10 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 text-white group-hover:bg-red-600 transition-colors">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-zinc-950 mb-4 uppercase tracking-tight">Smart Alerts</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Automated notifications for stockouts, long wait times, or VIP arrivals.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: STAFF MOBILE INTERFACE (Split) */}
        <section className="py-32 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Graphics */}
            <div className="relative">
               <div className="relative w-full max-w-[400px] mx-auto">
                  {/* Phone Frame mock */}
                  <div className="bg-zinc-950 rounded-[3rem] p-4 border-[8px] border-zinc-900 shadow-3xl aspect-[9/19] overflow-hidden flex flex-col">
                     <div className="w-20 h-6 bg-zinc-900 rounded-full mx-auto mb-6"></div>
                     
                     <div className="flex-1 space-y-4 px-2">
                        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                           <div className="text-[10px] text-zinc-500 font-black mb-2 uppercase">Kitchen Station</div>
                           <div className="text-white text-xs font-bold leading-tight">Order #102 is taking longer than 15 mins. Need assistance?</div>
                        </div>
                        
                        <div className="bg-red-600 rounded-2xl p-4 text-white">
                           <div className="text-[10px] text-red-200 font-black mb-2 uppercase">Manager Alert</div>
                           <div className="text-xs font-bold leading-tight">Table 12 just ordered a $400 bottle. VIP Protocol active.</div>
                        </div>

                        <div className="bg-zinc-800 rounded-2xl p-4">
                           <div className="text-[10px] text-zinc-400 font-bold mb-2 uppercase tracking-widest">Shift Poll</div>
                           <div className="text-white text-xs mb-3">Who's available for Sunday brunch double?</div>
                           <div className="flex gap-2">
                              <div className="w-6 h-6 bg-zinc-700 rounded-full border border-white"></div>
                              <div className="w-6 h-6 bg-zinc-600 rounded-full"></div>
                              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px]">+3</div>
                           </div>
                        </div>
                     </div>

                     <div className="h-1 bg-zinc-800 w-1/3 mx-auto mt-6 rounded-full mb-2"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-6 border border-zinc-100">
                     <MessageCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <div className="absolute bottom-20 -left-10 w-20 h-20 bg-zinc-950 rounded-full shadow-2xl flex items-center justify-center -rotate-12 border-4 border-white">
                     <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
               </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
               <span className="inline-block px-5 py-2 bg-red-600 text-white rounded-full text-xs font-black uppercase tracking-widest">FLAWLESS COORDINATION</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-[0.9] uppercase tracking-tighter">Your Team, <br/> Syncronized.</h2>
               <p className="text-lg text-zinc-600 leading-relaxed">
                  The front-of-house doesn't need to yell for the manager. The kitchen doesn't need to search for a server. Dine360 provides a silent, high-speed communication layer that keeps your restaurant calm and efficient.
               </p>

               <div className="grid grid-cols-1 gap-6 pt-4">
                  {[
                    { title: "Role-Based Channels", desc: "Separate streams for servers, chefs, and management." },
                    { title: "Task Heartbeat", desc: "Automated check-ins for critical opening/closing procedures." },
                    { title: "Broadcast Mode", desc: "One-way announcements for the entire restaurant staff." }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                       </div>
                       <div className="flex-1">
                          <span className="font-black text-zinc-950 uppercase text-sm tracking-tight">{feat.title}:</span>
                          <span className="text-zinc-500 text-sm ml-2">{feat.desc}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <button className="flex items-center gap-3 text-zinc-950 font-black uppercase tracking-[0.2em] text-xs hover:text-red-600 transition-colors pt-6">
                  Explore Enterprise Comms
                  <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: METRICS (Stats) */}
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full translate-y-2/3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Efficiency Measured In Seconds</h2>
               <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Communication isn't just nice—it's profitable. Faster response times lead to higher table turnover and better reviews.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { label: "FASTER MANAGER RESPONSES", val: "-40%", desc: "Mobile ping-to-presence tracking" },
                 { label: "WASTE REDUCTION", val: "15%", desc: "Instant stock-out reporting to FOH" },
                 { label: "STAFF RETENTION", val: "+22%", desc: "Clearer expectations and support" }
               ].map((stat, i) => (
                 <div key={i} className="text-center p-12 bg-zinc-900 border border-zinc-800 rounded-[30px] hover:border-red-600/30 transition-all group">
                    <div className="text-5xl font-black text-red-600 mb-4 group-hover:scale-110 transition-transform">{stat.val}</div>
                    <div className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-300">{stat.label}</div>
                    <p className="text-zinc-500 text-sm">{stat.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SECURITY & PERMISSIONS */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter leading-tight">Enterprise Scale <br/> <span className="text-red-600">Privacy First</span></h2>
                 <p className="text-lg text-zinc-500 leading-relaxed">Dine360 Team communication is built for enterprise security. Control exactly who can see what, when they can be contacted, and keep your business data private.</p>
                 
                 <div className="space-y-4">
                    <div className="flex gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 items-center">
                       <Lock className="w-8 h-8 text-zinc-950 shrink-0" />
                       <div>
                          <h4 className="font-black text-sm uppercase tracking-tight">Encrypted Storage</h4>
                          <p className="text-xs text-zinc-500">All messages and logs are stored with bank-grade encryption.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 items-center">
                       <Smartphone className="w-8 h-8 text-zinc-950 shrink-0" />
                       <div>
                          <h4 className="font-black text-sm uppercase tracking-tight">Bring Your Own Device (BYOD)</h4>
                          <p className="text-xs text-zinc-500">Native apps for iOS, Android, and web. No proprietary hardware needed.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-zinc-100 h-[500px] rounded-[40px] relative overflow-hidden border border-zinc-200 shadow-inner flex items-center justify-center">
                  <div className="absolute inset-0 bg-white opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Abstract Security Graphic */}
                  <div className="relative w-64 h-64">
                     <div className="absolute inset-0 bg-red-600/10 rounded-full animate-ping"></div>
                     <div className="absolute inset-4 bg-zinc-950 rounded-full flex items-center justify-center shadow-2xl">
                        <ShieldCheck className="w-24 h-24 text-red-600" />
                     </div>
                  </div>
              </div>
           </div>
        </section>

        {/* QUICK NAV */}
        <FeatureQuickNav />

        {/* CTA SECTION */}
        <section className="bg-red-600 py-32 px-6 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">Ready to Bridge <br/> The Communication Gap?</h2>
              <p className="text-red-100 text-xl mb-12 max-w-2xl mx-auto font-medium">Equip your staff with the tools they need to succeed. Real-time collaboration is just one click away.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-white text-red-600 px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-zinc-100 transition-colors shadow-xl">
                    Get Started Free
                 </button>
                 <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-colors">
                    Talk to Sales
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamCommunicationPage;