'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: '1. Definitions' },
    { id: 2, title: '2. Acceptance' },
    { id: 3, title: '3. Services' },
    { id: 4, title: '4. User Responsibilities' },
    { id: 5, title: '5. Account Security' },
    { id: 6, title: '6. Payment' },
    { id: 7, title: '7. Data & Privacy' },
    { id: 8, title: '8. Third-Party' },
    { id: 9, title: '9. Availability' },
    { id: 10, title: '10. Intellectual Property' },
    { id: 11, title: '11. Liability' },
    { id: 12, title: '12. Termination' },
    { id: 13, title: '13. Changes' },
    { id: 14, title: '14. Governing Law' },
    { id: 15, title: '15. Contact Us' },
  ];

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Sidebar Navigation */}
          <motion.aside 
            initial="hidden"
            animate="visible"
            variants={sidebarVariants}
            className="lg:w-1/4"
          >
            <div className="sticky top-32 bg-black p-8 -ml-10 mr-1 rounded-2xl shadow-xl border border-zinc-800">
              <h2 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-6 italic">Navigation</h2>
              <ul className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(`section-${section.id}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`text-left w-full flex items-center gap-3 transition-colors duration-300 relative ${
                        activeSection === section.id 
                          ? 'text-white font-extrabold' 
                          : 'text-zinc-400 hover:text-white font-medium'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 flex-shrink-0">
                        {activeSection === section.id && (
                          <motion.div 
                            layoutId="activeIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-brand-red"
                          />
                        )}
                      </div>
                      <span className="truncate">
                        {section.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* Content Area */}
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="lg:w-3/4 space-y-10"
          >
            <header className="space-y-3">
              <h2 className="text-zinc-500 text-lg font-medium tracking-tight">Dine 360</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                Terms & <span className="text-brand-red">Conditions</span>
              </h1>
            </header>

            <div className="space-y-10 max-w-3xl">
              <div className="space-y-3">
                <p className="text-zinc-500 font-medium text-sm">Effective Date: March 30, 2026</p>
                <p className="text-zinc-600 leading-relaxed text-base">
                  Welcome to Dine360. These Terms & Conditions (“Terms”) govern your access to and use of our platform, services, and website.
                  By accessing or using Dine360, you agree to comply with and be bound by these Terms.
                </p>
              </div>

              {/* 1. DEFINITIONS */}
              <div id="section-1" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  1. DEFINITIONS
                </h2>
                <div className="space-y-3">
                  <p className="text-zinc-600 leading-relaxed text-base">
                    <strong>“Dine360”</strong> refers to our restaurant management platform, including all software, services, and related features.
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-base">
                    <strong>“User” / “You”</strong> refers to any individual or business using our services.
                  </p>
                  <p className="text-zinc-600 leading-relaxed text-base">
                    <strong>“Services”</strong> include POS, KDS, inventory, CRM, online ordering, and all features provided by Dine360.
                  </p>
                </div>
              </div>

              {/* 2. ACCEPTANCE OF TERMS */}
              <div id="section-2" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  2. ACCEPTANCE OF TERMS
                </h2>
                <div className="space-y-3">
                  <p className="text-zinc-600 leading-relaxed text-base">
                    By creating an account, accessing, or using Dine360, you confirm that:
                  </p>
                  <ul className="space-y-2 text-zinc-600 text-base list-disc pl-6">
                    <li>You are legally capable of entering into a binding agreement</li>
                    <li>You agree to these Terms and our Privacy Policy</li>
                    <li>You will comply with all applicable laws and regulations</li>
                  </ul>
                  <p className="text-zinc-600 leading-relaxed text-base font-medium">
                    If you do not agree, you must not use the platform.
                  </p>
                </div>
              </div>

              {/* 3. SERVICES PROVIDED */}
              <div id="section-3" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  3. SERVICES PROVIDED
                </h2>
                <div className="space-y-3">
                  <p className="text-zinc-600 leading-relaxed text-base">
                    Dine360 provides restaurant management tools including but not limited to:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Point of Sale (POS)',
                      'Kitchen Display System (KDS)',
                      'Inventory & Purchase Management',
                      'CRM & Customer Data',
                      'Online Ordering & Website Integration',
                      'Analytics & Business Dashboard'
                    ].map((service, index) => (
                      <li key={index} className="flex items-center gap-3 text-zinc-600 italic text-sm">
                        <Check className="text-brand-red w-5 h-5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-zinc-500 text-sm italic">
                    We reserve the right to modify, update, or discontinue features at any time.
                  </p>
                </div>
              </div>

              {/* 4. USER RESPONSIBILITIES */}
              <div id="section-4" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  4. USER RESPONSIBILITIES
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>You agree to:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain confidentiality of your login credentials</li>
                    <li>Use the platform only for lawful business purposes</li>
                    <li>Not misuse, copy, or attempt to reverse engineer the software</li>
                  </ul>
                  <p className="font-semibold text-black">
                    You are responsible for all activity under your account.
                  </p>
                </div>
              </div>

              {/* 5. ACCOUNT SECURITY */}
              <div id="section-5" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  5. ACCOUNT SECURITY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>You are responsible for safeguarding your account credentials.</p>
                  <p>Notify us immediately of unauthorized access.</p>
                  <p className="italic text-sm">Dine360 is not liable for losses caused by unauthorized use.</p>
                </div>
              </div>

              {/* 6. PAYMENT & SUBSCRIPTIONS */}
              <div id="section-6" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  6. PAYMENT & SUBSCRIPTIONS
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Dine360 may offer paid subscription plans</li>
                    <li>Payments must be made as per the selected plan</li>
                    <li>Failure to pay may result in suspension or termination of services</li>
                    <li>All fees are non-refundable unless stated otherwise</li>
                  </ul>
                </div>
              </div>

              {/* 7. DATA & PRIVACY */}
              <div id="section-7" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  7. DATA & PRIVACY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>You retain ownership of your business data.</p>
                  <p>By using Dine360, you grant us permission to process data to provide services.</p>
                  <p>We implement security measures to protect your data.</p>
                  <p>Refer to our <Link href="/privacy" className="text-brand-red hover:underline">Privacy Policy</Link> for detailed information.</p>
                </div>
              </div>

              {/* 8. THIRD-PARTY INTEGRATIONS */}
              <div id="section-8" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  8. THIRD-PARTY INTEGRATIONS
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>Dine360 may integrate with third-party services such as:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Payment gateways</li>
                    <li>Delivery platforms (e.g., Uber, etc.)</li>
                    <li>External APIs</li>
                  </ul>
                  <p className="text-zinc-500 italic text-sm">We are not responsible for the performance or reliability of third-party services.</p>
                </div>
              </div>

              {/* 9. SYSTEM AVAILABILITY */}
              <div id="section-9" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  9. SYSTEM AVAILABILITY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We strive to provide uninterrupted service. However, we do not guarantee 100% uptime.</p>
                  <p>Maintenance, updates, or technical issues may cause temporary interruptions.</p>
                </div>
              </div>

              {/* 10. INTELLECTUAL PROPERTY */}
              <div id="section-10" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  10. INTELLECTUAL PROPERTY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>All content, software, and technology provided by Dine360 are owned by us, including:</p>
                  <ul className="grid grid-cols-2 gap-2 font-semibold text-black text-sm">
                    <li>• Software code</li>
                    <li>• Branding</li>
                    <li>• Designs</li>
                    <li>• Documentation</li>
                  </ul>
                  <p className="italic text-sm">You may not copy, reproduce, or distribute any part without permission.</p>
                </div>
              </div>

              {/* 11. LIMITATION OF LIABILITY */}
              <div id="section-11" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  11. LIMITATION OF LIABILITY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>To the fullest extent permitted by law:</p>
                  <ul className="space-y-2 list-disc pl-6 font-medium text-sm">
                    <li>Dine360 is not liable for indirect or consequential damages</li>
                    <li>We are not responsible for loss of profits, data, or business interruption</li>
                    <li>Our total liability is limited to the amount paid by you for our services</li>
                  </ul>
                </div>
              </div>

              {/* 12. TERMINATION */}
              <div id="section-12" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  12. TERMINATION
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We reserve the right to:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Suspend or terminate your account for violation of these Terms</li>
                    <li>Restrict access without prior notice</li>
                  </ul>
                  <p>You may terminate your account at any time by contacting support.</p>
                </div>
              </div>

              {/* 13. CHANGES TO TERMS */}
              <div id="section-13" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  13. CHANGES TO TERMS
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We may update these Terms from time to time.</p>
                  <p>Changes will be effective upon posting on our website.</p>
                  <p className="font-semibold text-black italic text-sm">Continued use of the platform constitutes acceptance of updated Terms.</p>
                </div>
              </div>

              {/* 14. GOVERNING LAW */}
              <div id="section-14" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  14. GOVERNING LAW
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.</p>
                  <p>Any disputes will be subject to the jurisdiction of courts in <strong>Tamil Nadu, India</strong>.</p>
                </div>
              </div>

              {/* 15. CONTACT US */}
              <div id="section-15" className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  15. CONTACT US
                </h2>
                <div className="space-y-3 text-zinc-600 text-base bg-zinc-50 p-5 rounded-2xl border border-zinc-200">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> <a href="mailto:support@dine360ads.com" className="text-brand-red hover:underline">support@dine360ads.com</a></p>
                    <p><strong>Website:</strong> <a href="https://dine360ads.com" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">https://dine360ads.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
