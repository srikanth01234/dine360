'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Layout,
  Smartphone,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  {
    title: "Restaurant Operations",
    description: "Learn how to streamline daily workflows, improve staff productivity, and manage restaurant operations effectively.",
    icon: Layout,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    title: "Technology",
    description: "Discover how modern POS systems, kitchen display systems, and automation tools transform restaurant performance.",
    icon: Smartphone,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    title: "Growth & Marketing",
    description: "Get strategies to attract new customers, retain loyal guests, and increase repeat business.",
    icon: TrendingUp,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    title: "Industry Insights",
    description: "Stay updated with the latest trends in the restaurant industry and learn how successful restaurants adapt.",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

const featuredPost = {
  title: "10 Ways to Streamline Your Restaurant Operations in 2024",
  excerpt: "Discover the most effective strategies to improve efficiency, reduce waste, and increase your bottom line with modern management techniques.",
  date: "Oct 24, 2024",
  author: "Sarah Johnson",
  readTime: "8 min read",
  category: "Operations",
  image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
};

const posts = [
  {
    id: 1,
    title: "The Future of POS Systems: What to Expect",
    excerpt: "Technology is evolving rapidly. Here's how next-gen POS systems are changing the dining experience.",
    date: "Oct 20, 2024",
    author: "Michael Chen",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Marketing Strategies for Fine Dining Establishments",
    excerpt: "Learn how to attract high-end clientele and build brand loyalty in a competitive market.",
    date: "Oct 18, 2024",
    author: "Emma Williams",
    readTime: "6 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Inventory Management: Avoiding Common Pitfalls",
    excerpt: "Small mistakes in inventory can lead to big losses. Our guide helps you stay on top of your stock.",
    date: "Oct 15, 2024",
    author: "David Ross",
    readTime: "10 min read",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1581578731522-6b6dea1470c6?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-semibold mb-6"
            >
              Dine360 Blog
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Restaurant Management <br />
              <span className="text-red-600">Insights & Tips</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Stay ahead in the restaurant industry with expert insights, operational strategies, and technology updates. The Dine360 blog helps restaurant owners and managers improve efficiency, boost revenue, and deliver exceptional dining experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 max-w-md mx-auto relative"
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5 transition-colors group-focus-within:text-red-500" />
                <input 
                  type="text" 
                  placeholder="Search for guides, tips, or news..." 
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all placeholder:text-zinc-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">What You'll Find Here</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all group"
              >
                <div className={`${category.bgColor} ${category.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{category.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all">
                  Explore Now <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
