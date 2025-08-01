"use client";
import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export const Blog = () => {
  const articles = [
    {
      title: "Pourquoi chaque entreprise a besoin d'un site web professionnel en 2025",
      category: "Développement Web",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min de lecture",
      excerpt: "À l'ère du digital, ne pas avoir de site web revient à ne pas exister. Découvrez pourquoi un site web professionnel est un investissement stratégique incontournable.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      link: "/blog/site-web-professionnel-2025"
    },
    {
      title: "6 tendances web design qui vont marquer 2025",
      category: "Design Web",
      author: "Michael Chen",
      date: "January 10, 2025",
      readTime: "7 min de lecture",
      excerpt: "Le design web évolue vite. Découvrez les 6 tendances design qui feront la différence cette année : typographies audacieuses, mode sombre, micro-interactions et plus.",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      link: "/blog/tendances-web-design-2025"
    },
    {
      title: "Comment une stratégie de contenu transforme votre présence en ligne",
      category: "Marketing Digital",
      author: "Emma Rodriguez",
      date: "January 5, 2025",
      readTime: "6 min de lecture",
      excerpt: "Un beau site, c'est bien. Un site qui parle, qui vit, qui attire, c'est encore mieux. Découvrez comment le contenu peut transformer votre présence digitale.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      link: "/blog/strategie-contenu-presence-en-ligne"
    }
  ];

  return (
    <section className="bg-[#EAEEFE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-[#c30011] mb-6">
            DERNIÈRES PERSPECTIVES
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#000] mb-6">
            Histoires de création et d'<span className="italic font-bold text-[#c30011]">innovation digitale</span>
          </h2>
          <p className="text-lg text-[#666] max-w-3xl mx-auto">
            Explorez nos dernières réflexions sur le développement web et mobile, le design graphique, les tendances numériques et les solutions créatives pour faire évoluer votre présence en ligne et booster vos projets.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link href={article.link} key={index} className="contents">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c30011] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#c30011] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span>{article.author}</span>
                  </div>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#000] mb-3 group-hover:text-[#c30011] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[#666] mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <a 
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#c30011] font-medium hover:gap-3 transition-all"
                >
                  Lire la suite
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#c30011] text-white px-8 py-4 rounded-full font-medium hover:bg-[#a50010] transition-colors"
          >
            Voir tous les articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};