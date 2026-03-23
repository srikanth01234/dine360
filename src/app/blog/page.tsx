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

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">Featured Article</h2>
            <Link href="/blog" className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative grid lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-200"
          >
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-red-600 text-white px-4 py-1.5 rounded-xl text-sm font-bold">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-6 text-zinc-500 text-sm mb-6">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 group-hover:text-red-600 transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200" />
                  <span className="font-bold text-zinc-900">{featuredPost.author}</span>
                </div>
                <button className="bg-zinc-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Latest Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden border border-zinc-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-zinc-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-zinc-400 text-xs mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-50">
                    <span className="text-sm font-bold text-zinc-900">{post.author}</span>
                    <button className="text-red-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all hover:scale-105 shadow-xl shadow-zinc-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="bg-black rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Subscribe for <span className="text-red-600">Growth Tips</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-0">
                  Join 5,000+ restaurant owners who receive our weekly insights on scaling operations and maximizing profit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-zinc-900 border border-zinc-800 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
