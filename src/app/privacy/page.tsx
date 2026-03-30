'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Lock, Cloud, UserCheck, Globe, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: '1. Information We Collect' },
    { id: 2, title: '2. How We Use Information' },
    { id: 3, title: '3. Data Storage & Security' },
    { id: 4, title: '4. Data Sharing' },
    { id: 5, title: '5. Third-Party Services' },
    { id: 6, title: '6. Data Retention' },
    { id: 7, title: '7. Your Rights' },
    { id: 8, title: '8. Cookies & Tracking' },
    { id: 9, title: '9. Children’s Privacy' },
    { id: 10, title: '10. International Transfers' },
    { id: 11, title: '11. Changes to Policy' },
    { id: 12, title: '12. Contact us' },
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                Privacy <span className="text-brand-red">Policy</span>
              </h1>
            </header>

            <div className="space-y-10 max-w-3xl">
              <div className="space-y-3">
                <p className="text-zinc-500 font-medium text-sm">Effective Date: March 30, 2026</p>
                <p className="text-zinc-600 leading-relaxed text-base">
                  At Dine360, we are committed to protecting your privacy and ensuring the security of your data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform and services.
                  By using Dine360, you agree to the practices described in this Privacy Policy.
                </p>
              </div>

              {/* 1. INFORMATION WE COLLECT */}
              <div id="section-1" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  1. INFORMATION WE COLLECT
                </h2>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900">a) Business & Account Information</h3>
                    <ul className="space-y-1.5 text-zinc-600 text-base list-disc pl-6">
                      <li>Name, email address, phone number</li>
                      <li>Business name, address, and details</li>
                      <li>Login credentials</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900">b) Operational Data</h3>
                    <ul className="space-y-1.5 text-zinc-600 text-base list-disc pl-6">
                      <li>Orders, billing, and transaction data</li>
                      <li>Inventory and product data</li>
                      <li>Customer information entered into the system</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900">c) Device & Usage Information</h3>
                    <ul className="space-y-1.5 text-zinc-600 text-base list-disc pl-6">
                      <li>IP address</li>
                      <li>Browser type and device details</li>
                      <li>Usage activity within the platform</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-900">d) Payment Information</h3>
                    <p className="text-zinc-600 text-base italic">
                      Payment details are processed via secure third-party payment providers. Dine360 does not store sensitive payment card details.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. HOW WE USE YOUR INFORMATION */}
              <div id="section-2" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  2. HOW WE USE YOUR INFORMATION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Provide and operate Dine360 services',
                    'Process transactions and manage orders',
                    'Improve system performance and user experience',
                    'Provide customer support',
                    'Send service updates, alerts, and notifications',
                    'Ensure security and prevent fraud'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <Check className="text-brand-red w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-zinc-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. DATA STORAGE & SECURITY */}
              <div id="section-3" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  3. DATA STORAGE & SECURITY
                </h2>
                <div className="space-y-4 text-zinc-600 text-base">
                  <p>We implement industry-standard security measures, including:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-3 text-sm"><Cloud className="text-brand-red w-4 h-4"/> Secure cloud infrastructure</li>
                    <li className="flex items-center gap-3 text-sm"><Lock className="text-brand-red w-4 h-4"/> Data encryption</li>
                    <li className="flex items-center gap-3 text-sm"><Shield className="text-brand-red w-4 h-4"/> Access control</li>
                    <li className="flex items-center gap-3 text-sm"><UserCheck className="text-brand-red w-4 h-4"/> User authentication</li>
                  </ul>
                  <p className="italic bg-zinc-50 p-3 rounded-xl border-l-4 border-zinc-300 text-sm">
                    While we strive to protect your data, no system is completely secure. Users are responsible for safeguarding their account credentials.
                  </p>
                </div>
              </div>

              {/* 4. DATA SHARING */}
              <div id="section-4" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  4. DATA SHARING
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p className="font-bold text-black italic text-sm">We do not sell your data.</p>
                  <p>We may share your data only with:</p>
                  <ul className="space-y-1.5 list-disc pl-6">
                    <li>Trusted third-party service providers (e.g., payment gateways, integrations)</li>
                    <li>Delivery platforms and APIs (if enabled by you)</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </div>
              </div>

              {/* 5. THIRD-PARTY SERVICES */}
              <div id="section-5" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  5. THIRD-PARTY SERVICES
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>Dine360 may integrate with third-party services such as:</p>
                  <ul className="flex flex-wrap gap-2">
                    {['Payment providers', 'Delivery platforms', 'External APIs'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-zinc-100 rounded-full text-zinc-800 text-xs font-semibold border border-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </ul>
                  <p className="text-zinc-500 italic text-sm">These services operate independently, and their privacy practices are governed by their own policies.</p>
                </div>
              </div>

              {/* 6. DATA RETENTION */}
              <div id="section-6" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  6. DATA RETENTION
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We retain your data:</p>
                  <ul className="space-y-1.5 list-disc pl-6">
                    <li>As long as your account is active</li>
                    <li>As required for legal, regulatory, or operational purposes</li>
                  </ul>
                  <p>You may request deletion of your data by contacting us.</p>
                </div>
              </div>

              {/* 7. YOUR RIGHTS */}
              <div id="section-7" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  7. YOUR RIGHTS
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>Depending on applicable laws, you may have the right to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-3 font-medium text-black text-sm">Access your data</li>
                    <li className="flex items-center gap-3 font-medium text-black text-sm">Correct inaccurate information</li>
                    <li className="flex items-center gap-3 font-medium text-black text-sm">Request deletion</li>
                    <li className="flex items-center gap-3 font-medium text-black text-sm">Restrict or object to processing</li>
                  </ul>
                  <p>To exercise these rights, contact us at the details below.</p>
                </div>
              </div>

              {/* 8. COOKIES & TRACKING */}
              <div id="section-8" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  8. COOKIES & TRACKING
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We may use cookies and similar technologies to:</p>
                  <ul className="space-y-1.5 list-disc pl-6">
                    <li>Improve user experience</li>
                    <li>Analyze usage patterns</li>
                    <li>Enhance platform performance</li>
                  </ul>
                  <p className="text-zinc-500 italic text-sm">You can control cookie settings through your browser.</p>
                </div>
              </div>

              {/* 9. CHILDREN’S PRIVACY */}
              <div id="section-9" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  9. CHILDREN’S PRIVACY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>Dine360 is not intended for use by individuals under the age of 18.</p>
                  <p>We do not knowingly collect personal data from children.</p>
                </div>
              </div>

              {/* 10. INTERNATIONAL DATA TRANSFERS */}
              <div id="section-10" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  10. INTERNATIONAL DATA TRANSFERS
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>If you access Dine360 from outside India, your data may be processed and stored in locations where our servers are hosted.</p>
                  <p className="font-semibold text-black italic text-sm">By using our services, you consent to such transfers.</p>
                </div>
              </div>

              {/* 11. CHANGES TO THIS POLICY */}
              <div id="section-11" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  11. CHANGES TO THIS POLICY
                </h2>
                <div className="space-y-3 text-zinc-600 text-base">
                  <p>We may update this Privacy Policy from time to time.</p>
                  <p>Changes will be posted on this page with an updated effective date.</p>
                  <p className="font-semibold text-black italic text-sm">Continued use of Dine360 means you accept the updated policy.</p>
                </div>
              </div>

              {/* 12. CONTACT US */}
              <div id="section-12" className="space-y-5 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center gap-4 text-black border-l-4 border-brand-red pl-4">
                  12. CONTACT US
                </h2>
                <div className="space-y-4 text-zinc-600 text-base bg-zinc-50 p-5 rounded-2xl border border-zinc-200">
                  <p>If you have any questions about this Privacy Policy or your data, contact us:</p>
                  <div className="space-y-1.5">
                    <p className="flex items-center gap-3">
                      <Mail className="text-brand-red w-4 h-4" /> 
                      <strong>Email:</strong> 
                      <a href="mailto:support@dine360ads.com" className="text-brand-red hover:underline ml-1">support@dine360ads.com</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Globe className="text-brand-red w-4 h-4" /> 
                      <strong>Website:</strong> 
                      <a href="https://dine360ads.com" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline ml-1">https://dine360ads.com</a>
                    </p>
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

export default PrivacyPage;