
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import Link from "next/link";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "power-of-color",
      title: "Le Pouvoir de la Couleur : Transformer Votre Espace",
      excerpt: "Découvrez comment la bonne palette de couleurs peut complètement transformer l'humeur et l'énergie de votre espace de vie.",
      author: "Sarah Johnson",
      date: "15 Janvier 2025",
      category: "Conseils Design",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      readTime: "5 min de lecture"
    },
    {
      id: 2,
      slug: "small-spaces",
      title: "Maximiser les Petits Espaces : Solutions Design Innovantes",
      excerpt: "Petit ne signifie pas à l'étroit. Explorez des stratégies créatives pour maximiser la fonctionnalité et le style.",
      author: "Michael Chen",
      date: "10 Janvier 2025",
      category: "Aménagement",
      image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      readTime: "7 min de lecture"
    },
    {
      id: 3,
      slug: "modern-restoration",
      title: "Guide de la Restauration Moderne",
      excerpt: "Insuffler une nouvelle vie aux pièces classiques tout en conservant leur caractère authentique.",
      author: "Emma Rodriguez",
      date: "5 Janvier 2025",
      category: "Restauration",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      readTime: "6 min de lecture"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#EAEEFE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-6 py-2 bg-[#c30011] text-white text-sm font-medium tracking-wide uppercase rounded-full">
              Blog & Inspiration
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-6 tracking-tight">
            Design Stories & <span className="italic font-bold text-[#c30011]">Inspiration</span>
          </h2>
          <p className="text-xl text-[#000] max-w-3xl mx-auto leading-relaxed">
            Explorez nos dernières réflexions sur le design d'intérieur, les tendances et les solutions créatives pour améliorer vos espaces de vie.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c30011] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-[#666]">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-[#000] mb-3 group-hover:text-[#c30011] transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#666] mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <div className="text-[#c30011] font-medium hover:text-[#a5000e] transition-colors duration-300 flex items-center gap-2 group/btn">
                        Lire la suite
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button - Updated to redirect to portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/portfolio">
            <button className="bg-[#c30011] hover:bg-[#a5000e] text-white px-10 py-4 text-lg font-medium hover:-translate-y-1 rounded-full border-2 border-[#c30011] hover:border-[#a5000e] transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl">
              Découvrir nos projets
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
