"use client";
import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleSiteWeb() {
  return (
    <div className="min-h-screen bg-[#EAEEFE]">
      <Header />
      <section className="pt-32 pb-12 bg-[#EAEEFE]">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-[#c30011] hover:text-[#a5000e] transition-colors duration-300 mb-8">
              <ArrowLeft size={20} />
              Retour à l'accueil
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-[#000] mb-6">Pourquoi chaque entreprise a besoin d'un site web professionnel en 2025</h1>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#333]">
          <p>À l’ère du digital, se contenter d’une présence sur les réseaux sociaux ne suffit plus. Un site web professionnel est la base de toute stratégie en ligne.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Crédibilité et confiance immédiates</h2>
          <p>Un site bien conçu rassure vos visiteurs et met en avant votre expertise.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Une vitrine ouverte 24h/24</h2>
          <p>Contrairement à un magasin physique, votre site reste accessible en permanence et présente vos offres partout dans le monde.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Un outil de conversion puissant</h2>
          <p>Grâce à des appels à l’action clairs et une navigation fluide, vous transformez vos visiteurs en prospects qualifiés.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Le centre de votre stratégie digitale</h2>
          <p>Toutes vos campagnes marketing renvoient vers votre site, véritable noyau de votre présence en ligne.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Ce que propose Easy Ways Studio</h2>
          <p>Nous concevons des plateformes rapides, responsive et orientées conversion : sites vitrines, e‑commerce, landing pages…</p>
          <p className="font-medium">Et si vous vous y mettiez dès aujourd’hui ? Prenez rendez-vous avec notre équipe pour propulser votre activité.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
