"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function ArticleStrategieContenu() {
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
                Marketing Digital
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-6 leading-tight">
              Comment une stratégie de contenu transforme votre présence en ligne
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-[#666] mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Emma Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>5 Janvier 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>6 min de lecture</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Stratégie de contenu"
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
            <div className="text-xl text-[#666] leading-relaxed mb-8 font-medium">
              Un site qui vit et qui attire repose sur une stratégie de contenu solide. Voici pourquoi le contenu est roi.
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Le contenu attire votre audience</h2>
                <p className="text-[#666] leading-relaxed">Articles de blog, vidéos ou posts ciblés agissent comme un aimant à trafic.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Il améliore votre référencement (SEO)</h2>
                <p className="text-[#666] leading-relaxed">Google valorise le contenu frais et pertinent, ce qui augmente votre visibilité.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Il valorise votre expertise</h2>
                <p className="text-[#666] leading-relaxed">Partager vos conseils démontre votre maîtrise du sujet et renforce la confiance.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Il crée un lien émotionnel</h2>
                <p className="text-[#666] leading-relaxed">Un ton humain et sincère permet de connecter votre marque à vos clients au-delà d’un simple achat.</p>
              </div>

              <div>
                <p className="text-[#666] leading-relaxed">Chez Easy Ways Studio, nous vous accompagnons de la rédaction au montage vidéo pour donner vie à vos idées.</p>
                <p className="text-[#666] leading-relaxed font-medium">Une marque qui parle est une marque qui vend. Discutons ensemble de votre contenu stratégique.</p>
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
            <Link href="/blog/site-web-professionnel-2025">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Site web professionnel"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#c30011] font-semibold">Développement Web</span>
                  <h3 className="text-xl font-bold text-[#000] mt-2 mb-3">Pourquoi chaque entreprise a besoin d’un site web professionnel en 2025</h3>
                  <p className="text-[#666]">Découvrez pourquoi un site professionnel est essentiel pour votre visibilité.</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/tendances-web-design-2025">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Tendances web design 2025"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#c30011] font-semibold">Design Web</span>
                  <h3 className="text-xl font-bold text-[#000] mt-2 mb-3">6 tendances web design qui vont marquer 2025</h3>
                  <p className="text-[#666]">Découvrez les techniques de design qui feront la différence cette année.</p>
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