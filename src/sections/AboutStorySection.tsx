"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutStorySection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Calendar,
      value: t('aboutStory.stat1Value'),
      label: t('aboutStory.stat1Label'),
      description: t('aboutStory.stat1Description')
    },
    {
      icon: Users,
      value: t('aboutStory.stat2Value'),
      label: t('aboutStory.stat2Label'),
      description: t('aboutStory.stat2Description')
    },
    {
      icon: Trophy,
      value: t('aboutStory.stat3Value'),
      label: t('aboutStory.stat3Label'),
      description: t('aboutStory.stat3Description')
    },
    {
      icon: Award,
      value: t('aboutStory.stat4Value'),
      label: t('aboutStory.stat4Label'),
      description: t('aboutStory.stat4Description')
    }
  ];

  const services = [
    t('aboutStory.service1'),
    t('aboutStory.service2'),
    t('aboutStory.service3'),
    t('aboutStory.service4'),
    t('aboutStory.service5'),
    t('aboutStory.service6'),
    t('aboutStory.service7'),
    t('aboutStory.service8')
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="studio-accent font-semibold text-lg mb-4">{t('aboutStory.badge')}</p>
          <h2 className="text-4xl lg:text-5xl font-bold studio-primary mb-6">
            {t('aboutStory.heading')}
          </h2>
          <p className="text-xl studio-text-light max-w-4xl mx-auto leading-relaxed">
            {t('aboutStory.description')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20"
        >
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
            alt="Interior design showcase 1"
            className="rounded-xl shadow-lg w-full h-48 object-cover hover-lift"
          />
          <img
            src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
            alt="Interior design showcase 2"
            className="rounded-xl shadow-lg w-full h-48 object-cover hover-lift"
          />
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
            alt="Interior design showcase 3"
            className="rounded-xl shadow-lg w-full h-48 object-cover hover-lift"
          />
          <img
            src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
            alt="Interior design showcase 4"
            className="rounded-xl shadow-lg w-full h-48 object-cover hover-lift"
          />
          <img
            src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
            alt="Interior design showcase 5"
            className="rounded-xl shadow-lg w-full h-48 object-cover hover-lift"
          />
        </motion.div>

        {/* Story and Approach */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="studio-accent font-semibold text-lg">{t('aboutStory.visionBadge')}</p>
            <h3 className="text-3xl font-bold studio-primary">{t('aboutStory.storyHeading')}</h3>
            <p className="text-lg studio-text-light leading-relaxed">
              {t('aboutStory.storyDescription1')}
            </p>
            <p className="text-lg studio-text-light leading-relaxed">
              {t('aboutStory.storyDescription2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="studio-accent font-semibold text-lg">{t('aboutStory.agencyBadge')}</p>
            <h3 className="text-3xl font-bold studio-primary">{t('aboutStory.approachHeading')}</h3>
            <p className="text-lg studio-text-light leading-relaxed">
              {t('aboutStory.approachDescription1')}
            </p>
            <p className="text-lg studio-text-light leading-relaxed">
              {t('aboutStory.approachDescription2')}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-studio-neutral p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-studio-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h4 className="text-3xl font-bold studio-primary mb-2">{stat.value}</h4>
                <p className="font-semibold studio-primary mb-2">{stat.label}</p>
                <p className="text-sm studio-text-light">{stat.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold studio-primary mb-8">{t('aboutStory.qualityHeading')}</h3>
          <p className="text-lg studio-text-light mb-8 max-w-3xl mx-auto">
            {t('aboutStory.qualityDescription')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <p className="font-semibold studio-primary">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
