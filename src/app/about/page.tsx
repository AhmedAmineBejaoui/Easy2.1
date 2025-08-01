"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, Users, Star, Clock, Target, Eye, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('aboutPage.value1Title'),
      description: t('aboutPage.value1Description')
    },
    {
      icon: Eye,
      title: t('aboutPage.value2Title'),
      description: t('aboutPage.value2Description')
    },
    {
      icon: Heart,
      title: t('aboutPage.value3Title'),
      description: t('aboutPage.value3Description')
    }
  ];

  const timeline = [
    {
      year: t('aboutPage.timeline1Year'),
      title: t('aboutPage.timeline1Title'),
      description: t('aboutPage.timeline1Description')
    },
    {
      year: t('aboutPage.timeline2Year'),
      title: t('aboutPage.timeline2Title'),
      description: t('aboutPage.timeline2Description')
    },
    {
      year: t('aboutPage.timeline3Year'),
      title: t('aboutPage.timeline3Title'),
      description: t('aboutPage.timeline3Description')
    },
    {
      year: t('aboutPage.timeline4Year'),
      title: t('aboutPage.timeline4Title'),
      description: t('aboutPage.timeline4Description')
    },
    {
      year: t('aboutPage.timeline5Year'),
      title: t('aboutPage.timeline5Title'),
      description: t('aboutPage.timeline5Description')
    },
    {
      year: t('aboutPage.timeline6Year'),
      title: t('aboutPage.timeline6Title'),
      description: t('aboutPage.timeline6Description')
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
              {t('aboutPage.backToHome')}
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
                {t('aboutPage.badge')}
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal text-studio-primary mb-8 tracking-tight leading-tight">
              {t('aboutPage.heading')} <span className="italic font-bold">{t('aboutPage.headingAccent')}</span> {t('aboutPage.headingAfter')}
            </h1>
            <p className="text-xl text-studio-text-light leading-relaxed max-w-3xl mx-auto">
              {t('aboutPage.description')}
            </p>
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
                {t('aboutPage.missionHeading')} <span className="italic font-bold">{t('aboutPage.missionHeadingAccent')}</span>
              </h2>
              <p className="text-lg text-studio-text-light mb-6 leading-relaxed">
                {t('aboutPage.missionDescription1')}
              </p>
              <p className="text-lg text-studio-text-light leading-relaxed">
                {t('aboutPage.missionDescription2')}
              </p>
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
              {t('aboutPage.valuesHeading')} <span className="italic font-bold">{t('aboutPage.valuesHeadingAccent')}</span>
            </h2>
            <p className="text-lg text-studio-text-light max-w-3xl mx-auto">
              {t('aboutPage.valuesDescription')}
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

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal text-studio-primary mb-6">
              {t('aboutPage.journeyHeading')} <span className="italic font-bold">{t('aboutPage.journeyHeadingAccent')}</span>
            </h2>
            <p className="text-lg text-studio-text-light max-w-3xl mx-auto">
              {t('aboutPage.journeyDescription')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-studio-neutral hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:px-8">
                    <div className={`bg-studio-neutral p-8 rounded-3xl shadow-soft ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-3xl font-bold text-studio-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-studio-primary mb-3">{item.title}</h3>
                      <p className="text-studio-text-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-studio-primary rounded-full relative z-10"></div>

                  <div className="flex-1 lg:px-8"></div>
                </motion.div>
              ))}
            </div>
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
              {t('aboutPage.numbersHeading')} <span className="italic font-bold">{t('aboutPage.numbersHeadingAccent')}</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('aboutPage.numbersDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: Users, number: t('about.stat1Number'), label: t('about.stat1Label') }, { icon: Award, number: t('about.stat2Number'), label: t('about.stat2Label') }, { icon: Star, number: t('about.stat3Number'), label: t('about.stat3Label') }, { icon: Clock, number: t('about.stat4Number'), label: t('about.stat4Label') }].map((stat, index) => {
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
