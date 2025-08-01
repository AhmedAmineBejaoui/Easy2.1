"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Star, Clock } from "lucide-react";

export const HeroAfterTicker = () => {
  const stats = [
    {
      icon: Users,
      number: "30+",
      label: "Clients accompagnés",
      description: "Des entreprises, startups et indépendants qui ont choisi Easy Ways Studio pour concrétiser leurs projets digitaux.",
    },
    {
      icon: Star,
      number: "3+",
      label: "Années d'expertise",
      description: "Une jeune agence agile portée par des talents passionnés, cumulant des dizaines de projets livrés avec rigueur et créativité.",
    },
    {
      icon: Award,
      number: "20+",
      label: "Projets livrés",
      description: "Sites web, applications, identités visuelles, vidéos et stratégies digitales livrés avec succès à travers différents secteurs.",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Engagement & disponibilité",
      description: "Une équipe réactive, à l'écoute, prête à accompagner chaque client du brief à la mise en ligne et au-delà.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-[#c30011] text-white text-sm font-medium tracking-wide uppercase rounded-full">
                À PROPOS DE NOUS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-8 tracking-tight leading-tight">
              Créer des espaces qui{" "}
              <span className="italic font-bold text-[#c30011]">inspirent</span> et transforment
            </h2>

            <p className="text-xl text-[#000] mb-8 leading-relaxed">
              Chez Easy Ways Studio, nous croyons que le grand design a le pouvoir de transformer non seulement les espaces, mais les vies. Depuis plus d'une décennie, nous créons des environnements digitaux exceptionnels qui reflètent la personnalité de nos clients.
            </p>

            <p className="text-lg text-[#000] mb-8 leading-relaxed">
              Notre approche combine des principes de design intemporels avec une esthétique contemporaine, garantissant que chaque projet soit à la fois fonctionnel et beau. Nous travaillons en étroite collaboration avec nos clients tout au long du processus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="bg-[#c30011] hover:bg-[#a5000e] text-white px-8 py-4 text-lg font-medium rounded-full border-2 border-[#c30011] hover:border-[#a5000e] transition-all duration-300">
                  En savoir plus
                </button>
              </Link>
              <Link href="/process">
                <button className="border-2 border-[#c30011] hover:bg-[#c30011] hover:text-white text-[#c30011] px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
                  Notre processus
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Solutions Digitales - Easy Ways Studio"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#000] mb-4">
              Approuvé par des clients{" "}
              <span className="italic font-bold text-[#c30011]">du monde entier</span>
            </h3>
            <p className="text-lg text-[#000] max-w-2xl mx-auto">
              Notre engagement envers l'excellence et l'attention aux détails nous ont valu la confiance de clients du monde entier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
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
                  <div className="w-16 h-16 bg-[#c30011] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-[#c30011] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-[#000] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-[#000] text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};