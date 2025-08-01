"use client";
import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleStrategieContenu() {
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
          <h1 className="text-4xl font-bold text-[#000] mb-6">Comment une stratégie de contenu transforme votre présence en ligne</h1>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#333]">
          <p>Un site qui vit et qui attire repose sur une stratégie de contenu solide. Voici pourquoi le contenu est roi.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Le contenu attire votre audience</h2>
          <p>Articles de blog, vidéos ou posts ciblés agissent comme un aimant à trafic.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Il améliore votre référencement</h2>
          <p>Google valorise le contenu frais et pertinent, ce qui augmente votre visibilité.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Il valorise votre expertise</h2>
          <p>Partager vos conseils démontre votre maîtrise du sujet et renforce la confiance.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Il crée un lien émotionnel</h2>
          <p>Un ton humain et sincère permet de connecter votre marque à vos clients au-delà d’un simple achat.</p>
          <p>Chez Easy Ways Studio, nous vous accompagnons de la rédaction au montage vidéo pour donner vie à vos idées.</p>
          <p className="font-medium">Une marque qui parle est une marque qui vend. Discutons ensemble de votre contenu stratégique.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
