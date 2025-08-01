"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Star, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      number: t('about.stat1Number'),
      label: t('about.stat1Label'),
      description: t('about.stat1Description'),
    },
    {
      icon: Award,
      number: t('about.stat2Number'),
      label: t('about.stat2Label'),
      description: t('about.stat2Description'),
    },
    {
      icon: Star,
      number: t('about.stat3Number'),
      label: t('about.stat3Label'),
      description: t('about.stat3Description'),
    },
    {
      icon: Clock,
      number: t('about.stat4Number'),
      label: t('about.stat4Label'),
      description: t('about.stat4Description'),
    },
  ];
  return (
    <section id="about" className="py-24 bg-studio-neutral scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 animate-fade-in">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="animate-slide-up"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-[#c30011] text-white text-sm font-medium tracking-wide uppercase rounded-full">
                À PROPOS DE NOUS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#000] mb-8 tracking-tight leading-tight">
              Votre <span className="italic font-bold text-[#c30011]">Partenaire</span> Digital de Confiance
            </h2>

            <p className="text-xl text-[#666] mb-8 leading-relaxed">
              Easy Ways Studio est une agence créative innovante spécialisée dans la transformation digitale. 
              Nous créons des solutions sur mesure qui allient créativité, technologie et stratégie pour propulser votre entreprise vers le succès.
            </p>

            <p className="text-lg text-[#666] mb-8 leading-relaxed">
              De la conception de sites web modernes aux applications mobiles performantes, en passant par le design graphique et les stratégies de réseaux sociaux, nous offrons un accompagnement complet pour concrétiser vos ambitions digitales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="bg-[#c30011] hover:bg-[#a30009] text-white px-8 py-4 text-lg font-medium rounded-full border-2 border-[#c30011] hover:border-[#a30009] transition-all duration-300">
                  En savoir plus
                </button>
              </Link>
              <Link href="#contact">
                <button className="border-2 border-[#c30011] hover:bg-[#c30011] hover:text-white text-[#c30011] px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
                  Nous contacter
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
            className="relative animate-zoom-in"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
                alt="Modern interior design showcase"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-3xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-studio-primary mb-2">
                  {t('about.stat2Number')}
                </div>
                <div className="text-studio-text-light font-medium">
                  {t('about.floatingCardText')}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-12 shadow-soft animate-slide-up"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-normal text-[#000] mb-4">
              Nos <span className="italic font-bold text-[#c30011]">Réalisations</span> en Chiffres
            </h3>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre expertise et de notre engagement envers l'excellence.
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
                  className="text-center animate-fade-in"
                >
                  <div className="w-16 h-16 bg-studio-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-studio-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-studio-primary mb-2">
                    {stat.label}
                  </div>
                  <p className="text-studio-text-light text-sm leading-relaxed">
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
          <h3 className="font-heading text-3xl sm:text-4xl font-normal text-studio-primary mb-6">
            {t('about.teamHeading')} <span className="italic font-bold">{t('about.teamHeadingAccent')}</span>
          </h3>
          <p className="text-lg text-studio-text-light mb-12 max-w-3xl mx-auto">
            {t('about.teamDescription')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Interior Designer",
                image: "/logos/sarah-johnson.jpg",
              },
              {
                name: "Michael Chen",
                role: "Senior Architect",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
              },
              {
                name: "Emma Rodriguez",
                role: "Project Manager",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-semibold text-studio-primary mb-1">
                  {member.name}
                </h4>
                <p className="text-studio-text-light">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}