"use client";
import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleTendancesWebDesign() {
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
          <h1 className="text-4xl font-bold text-[#000] mb-6">6 tendances web design qui vont marquer 2025</h1>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-[#333]">
          <p>Le design web évolue rapidement. Voici les tendances qui feront la différence cette année.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Typographies audacieuses</h2>
          <p>Les contrastes forts et les polices imposantes captent immédiatement l’attention.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Mode sombre</h2>
          <p>Élégant et reposant pour les yeux, il optimise aussi l’autonomie sur mobile.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Micro‑interactions animées</h2>
          <p>De petites animations fluides renforcent l’expérience utilisateur sans alourdir le site.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Design minimaliste</h2>
          <p>Plus d’espace, moins de texte : la navigation devient plus rapide et claire.</p>
          <h2 className="text-2xl font-semibold text-[#000]">Vidéos et animations intégrées</h2>
          <p>Elles transmettent une émotion en quelques secondes et créent un effet « wahou ».</p>
          <h2 className="text-2xl font-semibold text-[#000]">Contenu immersif et storytelling</h2>
          <p>Les sites modernes racontent une histoire et mettent en avant les valeurs de la marque.</p>
          <p className="font-medium">Besoin de moderniser votre site ? Contactez‑nous, on s’en occupe !</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
