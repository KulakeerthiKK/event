import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/content';

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">Blog</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Latest Event Insights</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">Tips, trends, and inspiration to help you plan the perfect event.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-navy-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden h-52">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-navy-400 text-sm mb-3"><Calendar className="w-3.5 h-3.5" />{post.date}</div>
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">{post.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
