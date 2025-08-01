
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function PowerOfColorBlogPost() {
  return (
    <div className="min-h-screen bg-[#EAEEFE]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-[#EAEEFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-[#c30011] hover:text-[#a5000e] transition-colors duration-300 mb-8">
              <ArrowLeft size={20} />
              Retour à l'accueil
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#c30011] text-white text-sm font-medium rounded-full">
                Conseils Design
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-6 leading-tight">
              Le Pouvoir de la Couleur : <span className="italic text-[#c30011]">Transformer</span> Votre Espace
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-[#666] mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>15 Janvier 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>5 min de lecture</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Le Pouvoir de la Couleur"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="text-xl text-[#666] leading-relaxed mb-8 font-medium">
              Découvrez comment la bonne palette de couleurs peut complètement transformer l'humeur et l'énergie de votre espace de vie. Dans cet article, nous explorons les secrets de la psychologie des couleurs et comment les appliquer dans votre intérieur.
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">L'Impact Psychologique des Couleurs</h2>
                <p className="text-[#666] leading-relaxed mb-4">
                  Les couleurs ont un impact profond sur notre état d'esprit et nos émotions. Chaque teinte évoque des sentiments spécifiques et peut influencer notre comportement de manière subtile mais significative. Comprendre cette psychologie est essentiel pour créer des espaces qui soutiennent nos objectifs de vie.
                </p>
                <p className="text-[#666] leading-relaxed">
                  Par exemple, les tons bleus favorisent la tranquillité et la concentration, tandis que les rouges stimulent l'énergie et la passion. Les verts apportent un sentiment d'équilibre et de connexion avec la nature, parfaits pour les espaces de détente.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-[#000] mb-4">Palette de Couleurs Recommandées</h3>
                <ul className="space-y-2 text-[#666]">
                  <li><strong>Salon :</strong> Tons neutres avec des accents chaleureux (beige, crème, terracotta)</li>
                  <li><strong>Chambre :</strong> Couleurs apaisantes (bleu doux, lavande, gris perle)</li>
                  <li><strong>Cuisine :</strong> Couleurs énergisantes mais équilibrées (blanc cassé, vert sauge)</li>
                  <li><strong>Bureau :</strong> Couleurs stimulantes pour la productivité (bleu marine, vert forêt)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Comment Choisir la Bonne Palette</h2>
                <p className="text-[#666] leading-relaxed mb-4">
                  Le choix d'une palette de couleurs ne se limite pas aux préférences personnelles. Il faut considérer l'orientation de la pièce, la quantité de lumière naturelle, la fonction de l'espace et l'ambiance souhaitée.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <img
                    src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Palette de couleurs salon"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Palette de couleurs chambre"
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>

                <p className="text-[#666] leading-relaxed">
                  Une règle simple à suivre est la règle du 60-30-10 : 60% de couleur dominante (généralement neutre), 30% de couleur secondaire, et 10% de couleur d'accent pour créer des points focaux.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Conseils Pratiques d'Application</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#c30011] pl-4">
                    <h4 className="font-semibold text-[#000] mb-2">Commencez par les Grandes Surfaces</h4>
                    <p className="text-[#666]">Les murs représentent la plus grande surface de couleur. Choisissez d'abord leur teinte avant de sélectionner les accents.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#c30011] pl-4">
                    <h4 className="font-semibold text-[#000] mb-2">Testez Avant de Vous Engager</h4>
                    <p className="text-[#666]">Peignez des échantillons sur le mur et observez-les à différents moments de la journée pour voir comment la lumière les affecte.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#c30011] pl-4">
                    <h4 className="font-semibold text-[#000] mb-2">Créez de la Cohérence</h4>
                    <p className="text-[#666]">Utilisez des couleurs qui se répètent dans différentes pièces pour créer un flux harmonieux dans votre maison.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Conclusion</h2>
                <p className="text-[#666] leading-relaxed">
                  La couleur est l'un des outils les plus puissants du design d'intérieur. En comprenant son impact psychologique et en appliquant quelques principes de base, vous pouvez transformer complètement l'atmosphère de votre maison. N'hésitez pas à expérimenter et à faire confiance à votre instinct - après tout, votre maison doit refléter votre personnalité unique.
                </p>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#000] mb-2">Partager cet article</h3>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Facebook size={18} />
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                      <Twitter size={18} />
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                      <Linkedin size={18} />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#000] mb-8 text-center">Articles Connexes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/small-spaces">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Maximiser les Petits Espaces"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#c30011] font-semibold">Aménagement</span>
                  <h3 className="text-xl font-bold text-[#000] mt-2 mb-3">Maximiser les Petits Espaces : Solutions Design Innovantes</h3>
                  <p className="text-[#666]">Petit ne signifie pas à l'étroit. Explorez des stratégies créatives pour maximiser la fonctionnalité et le style.</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/modern-restoration">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Guide de la Restauration Moderne"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#c30011] font-semibold">Restauration</span>
                  <h3 className="text-xl font-bold text-[#000] mt-2 mb-3">Guide de la Restauration Moderne</h3>
                  <p className="text-[#666]">Insuffler une nouvelle vie aux pièces classiques tout en conservant leur caractère authentique.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
