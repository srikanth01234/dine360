'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-red-600 selection:text-white pt-24">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-red-600 rounded-[32px] p-8 lg:p-12 text-center mb-16">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[20px] border-white/10 rounded-full opacity-20" />
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-48 h-48 border-[15px] border-white/10 rounded-full opacity-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 border-[20px] border-white/10 rounded-full opacity-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-48 h-48 border-[15px] border-white/10 rounded-full opacity-20" />

          <div className="relative z-10">
            <span className="inline-block bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-lg mb-6 shadow-sm">
              WRITE TO US
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              Get In Touch
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto mt-6 text-lg font-medium">
              We’d love to hear from you. Whether you want to learn more about Dine360, request a demo, or need support — our team is here to help your restaurant grow.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-zinc-900">Let's Talk!</h2>
              <p className="text-zinc-500 font-medium whitespace-pre-line">
                Have questions about Dine360 or want to see how it can transform your restaurant operations?{"\n"}
                Fill out the form and our team will get back to you shortly.{"\n"}
                We typically respond within 24 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name"
                    className="w-full bg-black text-white placeholder:text-zinc-500 border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name"
                    className="w-full bg-black text-white placeholder:text-zinc-500 border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full bg-black text-white placeholder:text-zinc-500 border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-black ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full bg-black text-white placeholder:text-zinc-500 border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-colors font-medium resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-zinc-300 text-red-600 focus:ring-red-600 cursor-pointer" />
                  <span className="text-sm text-zinc-700 font-bold group-hover:text-black transition-colors">
                    I agree to receive communication from Dine360 regarding product updates and services.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-zinc-300 text-red-600 focus:ring-red-600 cursor-pointer" />
                  <span className="text-sm text-zinc-700 font-bold group-hover:text-black transition-colors">
                    I consent to Dine360 storing my submitted information to respond to my enquiry.
                  </span>
                </label>
              </div>

              <p className="text-xs leading-relaxed text-zinc-600 font-bold">
                Dine360 respects your privacy. Your information will only be used to respond to your request and provide relevant product updates.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all active:scale-[0.98] shadow-lg shadow-red-600/20">
                  Start Free Trial
                </button>
                <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest">or</span>
                <button className="w-full sm:w-auto bg-white border-2 border-red-600 text-red-600 px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-50 transition-all active:scale-[0.98]">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info & Image */}
          <div className="space-y-12">
            <div className="relative rounded-[32px] overflow-hidden bg-zinc-100 aspect-[4/3] group">
              <Image 
                src="https://images.pexels.com/photos/7703651/pexels-photo-7703651.jpeg"
                alt="Quick Contact"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Ripple pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[1px] border-white rounded-full" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 uppercase tracking-wider text-xs">Quick Contact</h4>
                  <p className="text-zinc-500 font-medium text-sm mb-1">Email our support team anytime and we’ll assist you with onboarding, setup, or product questions.</p>
                  <p className="text-zinc-900 font-bold text-sm">Email:</p>
                  <p className="text-red-600 font-bold text-sm">support@dine360.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 uppercase tracking-wider text-xs">Phone Number</h4>
                  <p className="text-zinc-500 font-medium text-sm mb-1">Speak directly with our customer success team for immediate assistance.</p>
                  <div className="space-y-0.5">
                    <p className="text-zinc-500 font-medium text-sm">+1 647 360-2507</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 bg-white border border-zinc-100 shadow-sm rounded-xl flex items-center justify-center text-red-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 uppercase tracking-wider text-xs">Headquarters</h4>
                  <div className="text-zinc-500 font-medium text-sm space-y-0.5">
                    <p>Dine360 Headquarters</p>
                    <p>Toronto, Ontario</p>
                    <p>Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3 pb-4">
                <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">FOLLOW US</h3>
                <p className="text-zinc-500 font-medium text-sm">Stay connected with us for product updates, restaurant insights, and new features.</p>
              </div>
              <div className="flex items-center gap-4 pb-8">
                {[Linkedin, Instagram, Youtube, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white hover:bg-zinc-900 transition-all hover:-translate-y-1 shadow-lg shadow-red-600/10">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
