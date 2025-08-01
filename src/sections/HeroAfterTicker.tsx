"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Star, Clock } from "lucide-react";

export const HeroAfterTicker = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Clients Satisfaits",
      description: "Entreprises qui nous font confiance",
    },
    {
      icon: Award,
      number: "100+",
      label: "Projets Réalisés",
      description: "Solutions digitales livrées",
    },
    {
      icon: Star,
      number: "15+",
      label: "Années d'Excellence",
      description: "D'expérience dans le digital",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Client",
      description: "Assistance technique continue",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#EAEEFE] scroll-mt-20">
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
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg">
                <div className="text-3xl font-bold text-[#c30011] mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Années d'Excellence</div>
              </div>
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
              Nos{" "}
              <span className="italic font-bold text-[#c30011]">réalisations</span> en chiffres
            </h3>
            <p className="text-lg text-[#000] max-w-2xl mx-auto">
              Des statistiques qui témoignent de notre engagement envers l'excellence et la satisfaction client.
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

        {/* Team Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#000] mb-6">
            Notre <span className="italic font-bold text-[#c30011]">équipe</span> créative
          </h3>
          <p className="text-lg text-[#000] mb-12 max-w-3xl mx-auto">
            Des professionnels passionnés qui donnent vie à vos projets avec créativité et expertise technique.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Directrice Créative",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              },
              {
                name: "Michael Chen",
                role: "Développeur Senior",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              },
              {
                name: "Emma Rodriguez",
                role: "Chef de Projet",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c30011]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-semibold text-[#000] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#000]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};