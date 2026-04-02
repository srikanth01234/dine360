"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, 
  ChevronsRight, ArrowRight, ArrowUp 
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  const links = [
    { name: "About Us", href: "/about" }, 
    { name: "Pricing", href: "/temppricing" }, 
    { name: "Our Blogs", href: "/blog" }, 
    { name: "FAQ'S", href: "/faq" }, 
    { name: "Contact Us", href: "/contact" }
  ];

  const featureLinks = [
    { name: "Kitchen Management", href: "/features/kitchen-management" },
    { name: "Table Reservation", href: "/features/table-reservation" },
    { name: "CRM", href: "/features/loyalty-management" },
    { name: "Sales", href: "/features/order-management" },
    { name: "Inventory Management", href: "/features/inventory-management" },
    { name: "Purchase & Promotions", href: "/features/promotion-management" },
    { name: "Uber Integration", href: "/features/uber-integration" },
    { name: "Invoicing", href: "/features/invoicing" },
    { name: "POS Management", href: "/features/pos" },
    { name: "Promotions", href: "/features/promotions" },
    { name: "Website & Online Ordering", href: "/features/restaurant-website" },
    { name: "Business Dashboard", href: "/features/business-dashboard" },
    { name: "Multi-Branch Management", href: "/features/multi-menu-management" },
    { name: "Team Communication", href: "/features/team-communication" },
  ];

  const restaurantTypeLinks = [
    { name: "Fine Dining", href: "/restaurant-types/fine-dining" },
    { name: "Casual Dining", href: "/restaurant-types/casual-dining" },
    { name: "Fast Casual Restaurant", href: "/restaurant-types/fast-casual" },
    { name: "Ghost Restaurant", href: "/restaurant-types/ghost-kitchen" },
    { name: "Family Style Restaurant", href: "/restaurant-types/family-style" },
    { name: "Fast Food Restaurant", href: "/restaurant-types/fast-food" },
    { name: "Food Truck, Cart, or Stand", href: "/restaurant-types/food-truck" },
    { name: "Cafe", href: "/restaurant-types/cafe-bistro" },
    { name: "Buffet Restaurant", href: "/restaurant-types/buffet" },
    { name: "Pub", href: "/restaurant-types/pub" },
    { name: "Cafeteria", href: "/restaurant-types/cafeteria" },
    { name: "Coffee House", href: "/restaurant-types/coffee-house" },
    { name: "Diner", href: "/restaurant-types/diner" },
    { name: "Pop-Up Restaurant", href: "/restaurant-types/pop-up" },
    { name: "Contemporary Casual Restaurant", href: "/restaurant-types/contemporary-casual" },
    { name: "Bistro", href: "/restaurant-types/bistro" },
    { name: "Destination Restaurant", href: "/restaurant-types/destination" },
    { name: "Teppanyaki Grill", href: "/restaurant-types/teppanyaki" },
    { name: "Mongolian Barbecue", href: "/restaurant-types/mongolian-bbq" },
    { name: "Concession Stand", href: "/restaurant-types/concession" },
    { name: "Digital-Only Restaurant", href: "/restaurant-types/digital-only" },
    { name: "Theme Restaurant", href: "/restaurant-types/theme" },
    { name: "Bakery", href: "/restaurant-types/bakery" },
    { name: "Delivery-Only Restaurant", href: "/restaurant-types/delivery-only" },
  ];

  return (
    <footer className="relative bg-black pt-40 md:pt-24 pb-0 mt-20 md:mt-0 text-white overflow-visible">
      
      {/* Floating Info Section (Brand Red Bar) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl z-40">
        <div className="bg-brand-red rounded-xl p-8 md:px-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            {/* Texture/Pattern Overlay */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Address</h5>
                    <p className="font-semibold text-black text-sm leading-tight">Dine360 Headquarters, Toronto,<br/>Ontario, Canada</p>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <Mail size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Email Us</h5>
                    <p className="font-semibold text-black text-sm leading-tight">
                        sales@dine360ads.com<br/>
                        support@dine360ads.com
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shrink-0">
                    <Phone size={24} />
                </div>
                <div>
                    <h5 className="font-bold uppercase text-sm mb-1 text-black/80">Sales & Support</h5>
                    <p className="font-semibold text-black text-sm leading-tight">
                        +1 647 360-2507
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-64 h-64 pointer-events-none opacity-40 mix-blend-overlay">
         <Image src="https://cdn-icons-png.flaticon.com/512/753/753839.png" width={300} height={300} alt="Lettuce" className="rotate-45" />
      </div>
       <div className="absolute top-20 right-0 w-48 h-48 pointer-events-none opacity-20">
         <Image src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1000&auto=format&fit=crop" width={200} height={200} alt="Ingredients" className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 relative z-10">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
        >
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-bold tracking-tighter uppercase relative inline-block">
                    Dine <span className="text-brand-red">360</span>
                    <div className="h-1.5 w-20 bg-brand-red mt-2"></div>
                </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Proudly serving independent restaurants in Toronto (GTA), Hamilton, and Kitchener-Waterloo. Providing comprehensive solutions for the modern restaurant industry.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/dine360.ca/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/dine-360/" },
                { Icon: Youtube, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-brand-red transition-all duration-300 rounded-lg flex items-center justify-center text-white hover:-translate-y-1"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-2">
             <div className="flex flex-col items-start">
                 <h3 className="text-2xl font-bold whitespace-nowrap">Quick Links</h3>
                 <div className="h-1 w-10 bg-brand-red mt-2"></div>
             </div>
             <ul className="space-y-4 pt-4">
               {links.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                     <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Column 3: Features */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-6">
             <div className="flex flex-col items-start">
                 <h3 className="text-2xl font-bold whitespace-nowrap">Features</h3>
                 <div className="h-1 w-10 bg-brand-red mt-2"></div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
               <ul className="space-y-4">
                 {featureLinks.slice(0, 7).map((link, i) => (
                   <li key={i}>
                     <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                       <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                       {link.name}
                     </a>
                   </li>
                 ))}
               </ul>
               <ul className="space-y-4">
                 {featureLinks.slice(7, 14).map((link, i) => (
                   <li key={i}>
                     <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                       <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                       {link.name}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>

        </motion.div>

        {/* 2nd Main Row: Restaurant Types */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-16 border-t border-white/10 mt-16"
        >
          <div className="flex flex-col items-start mb-8">
              <h3 className="text-2xl font-bold whitespace-nowrap uppercase tracking-wider">Restaurant Types</h3>
              <div className="h-1 w-12 bg-brand-red mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            <ul className="space-y-4">
              {restaurantTypeLinks.slice(0, 6).map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                    <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {restaurantTypeLinks.slice(6, 12).map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                    <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {restaurantTypeLinks.slice(12, 18).map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                    <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {restaurantTypeLinks.slice(18, 24).map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors group text-base">
                    <ChevronsRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-red py-8 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-medium">
             © All Copyright 2024 by Dine 360
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-white hover:bg-black bg-brand-red transition-all text-sm px-6 py-2.5 font-bold rounded-lg shadow-sm border-1 border-white">Terms & Condition</Link>
            <Link href="/privacy" className="text-white hover:bg-black bg-brand-red transition-all text-sm px-6 py-2.5 mr-15 font-bold rounded-lg shadow-sm border-1 border-white">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-brand-red p-3 rounded-full shadow-lg z-50 hover:bg-brand-red/90 transition-transform hover:-translate-y-1 animate-bounce"
        aria-label="Back to top"
      >
        <ArrowUp size={24} className="text-white" />
      </button>

    </footer>
  );
};

export default Footer;
