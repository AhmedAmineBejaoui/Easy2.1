"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, Users, Star, Clock, Target, Eye, Heart } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Conception de solutions créatives adaptées aux enjeux actuels"
    },
    {
      icon: Eye,
      title: "Clarté & transparence",
      description: "Processus défini et responsabilités claires à chaque étape"
    },
    {
      icon: Heart,
      title: "Performance orientée résultat",
      description: "Optimisation continue et suivi des indicateurs clés"
    }
  ];

  return (
    <div className="min-h-screen bg-studio-warm-bg">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-studio-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-studio-primary hover:text-studio-accent transition-colors duration-300 mb-8">
              <ArrowLeft size={20} />
              Retour à l'accueil
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-studio-primary text-white text-sm font-medium tracking-wide uppercase rounded-full">
                À PROPOS
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal text-studio-primary mb-8 tracking-tight leading-tight">
              Notre <span className="italic font-bold">histoire</span> digitale
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-normal text-studio-primary mb-8">
                Notre Mission
              </h2>
              <div className="space-y-4 text-lg text-studio-text-light leading-relaxed">
                <p>🧠 Pourquoi on fait ce qu’on fait</p>
                <p>
                  Chaque projet est pensé comme un levier stratégique pour aider les marques à se démarquer,
                  à optimiser leur visibilité et à toucher efficacement leurs audiences. L’approche est centrée
                  sur l’écoute du client, l’analyse de ses objectifs et la transformation de ses idées en
                  solutions tangibles et impactantes.
                </p>
                <p>💡 Valeurs fondamentales</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Innovation : conception de solutions créatives qui répondent aux enjeux actuels</li>
                  <li>
                    Clarté & transparence : processus défini, livrables clairs, responsabilités attribuées à
                    chaque étape
                  </li>
                  <li>
                    Performance orientée résultat : optimisation continue après lancement, mise en place
                    d’indicateurs et ajustements réguliers
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Design process"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-primary/20 to-transparent rounded-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-studio-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal text-studio-primary mb-6">
              Nos valeurs fondamentales
            </h2>
            <p className="text-lg text-studio-text-light max-w-3xl mx-auto">
              Celles qui guident chacun de nos projets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-3xl shadow-soft hover-lift"
                >
                  <div className="w-16 h-16 bg-studio-primary rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-studio-primary mb-4">{value.title}</h3>
                  <p className="text-studio-text-light leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Stats */}
      <section className="py-20 bg-studio-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal mb-6">
              Nos chiffres clés
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Quelques statistiques sur notre activité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "200+", label: "Clients" },
              { icon: Award, number: "50+", label: "Projets" },
              { icon: Star, number: "5/5", label: "Satisfaction" },
              { icon: Clock, number: "8 ans", label: "d'expérience" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
