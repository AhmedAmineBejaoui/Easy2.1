"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function ArticleSiteWeb() {
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
                Développement Web
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-6 leading-tight">
              Pourquoi chaque entreprise a besoin d’un <span className="italic text-[#c30011]">site web professionnel</span> en 2025
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Site web professionnel"
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
              À l’ère du digital, ne pas avoir de site web revient à ne pas exister. Trop d’entreprises se contentent d’un compte Instagram ou d’une page Facebook, pensant que cela suffit à attirer des clients. En réalité, ces plateformes sont des canaux, pas des fondations. Voici pourquoi un site web professionnel est un investissement stratégique incontournable.
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Crédibilité et confiance immédiates</h2>
                <p className="text-[#666] leading-relaxed">
                  Un site bien conçu inspire immédiatement confiance. Il rassure, structure votre discours, montre votre sérieux. Que vous soyez une startup tech, un cabinet d’architecte ou un artisan local, votre site est la première impression que vous laissez.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Une vitrine ouverte 24h/24</h2>
                <p className="text-[#666] leading-relaxed">
                  Contrairement à un bureau ou un magasin, un site web ne ferme jamais. Il présente vos services, votre équipe, vos réalisations, vos offres – à toute heure, pour n’importe quel visiteur, où qu’il soit dans le monde.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Un outil de conversion puissant</h2>
                <p className="text-[#666] leading-relaxed">
                  Un site optimisé peut faire bien plus que présenter : il convertit les visiteurs en clients. Grâce à une navigation fluide, des appels à l’action clairs et des témoignages clients, vous transformez de simples curieux en prospects qualifiés.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#000] mb-4">Le centre de votre stratégie digitale</h2>
                <p className="text-[#666] leading-relaxed">
                  Publicités Facebook, campagnes email, posts LinkedIn… tout pointe vers votre site. Il est le noyau de votre stratégie marketing, le lien entre votre présence en ligne et vos résultats réels.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-[#000] mb-4">Ce que propose Easy Ways Studio</h3>
                <ul className="space-y-2 text-[#666]">
                  <li>Sites vitrines, e-commerce, landing pages et blogs sur mesure</li>
                  <li>Plateformes rapides, responsives et orientées conversion</li>
                  <li>Approche personnalisée selon vos objectifs et votre cible</li>
                </ul>
              </div>

              <div>
                <p className="text-[#666] leading-relaxed font-medium">
                  Et si vous vous y mettiez dès aujourd’hui ? Prenez rendez-vous avec notre équipe et construisons ensemble le site qui propulsera votre activité.
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