"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";


export default function ArticleTendancesWebDesign() {
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
                Design Web
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-6 leading-tight">
              6 tendances web design qui vont marquer 2025
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-[#666] mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>10 Janvier 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>7 min de lecture</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Tendances web design 2025"
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
              Le design web évolue rapidement. Voici les tendances qui feront la différence cette année.
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Typographies audacieuses</h2>
                <p className="text-[#666] leading-relaxed">Les contrastes forts et les polices imposantes captent immédiatement l’attention.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Mode sombre (Dark Mode)</h2>
                <p className="text-[#666] leading-relaxed">Élégant et reposant pour les yeux, il optimise aussi l’autonomie sur mobile.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Micro-interactions animées</h2>
                <p className="text-[#666] leading-relaxed">De petites animations fluides renforcent l’expérience utilisateur sans alourdir le site.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Design minimaliste</h2>
                <p className="text-[#666] leading-relaxed">Plus d’espace, moins de texte : la navigation devient plus rapide et claire.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Vidéos et animations intégrées</h2>
                <p className="text-[#666] leading-relaxed">Elles transmettent une émotion en quelques secondes et créent un effet “wahou”.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Contenu immersif et storytelling</h2>
                <p className="text-[#666] leading-relaxed">Les sites modernes racontent une histoire et mettent en avant les valeurs de la marque.</p>
              </div>

              <div>
                <p className="text-[#666] leading-relaxed font-medium">Vous avez un site à moderniser ? Contactez-nous, on s’en occupe !</p>
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

            <Link href="/blog/strategie-contenu-presence-en-ligne">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Stratégie de contenu"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#c30011] font-semibold">Marketing Digital</span>
                  <h3 className="text-xl font-bold text-[#000] mt-2 mb-3">Comment une stratégie de contenu transforme votre présence en ligne</h3>
                  <p className="text-[#666]">Explorez comment le contenu peut attirer votre audience et booster votre SEO.</p>
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

