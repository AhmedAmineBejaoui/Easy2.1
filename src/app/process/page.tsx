
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Palette, Hammer, Sparkles, CheckCircle, Clock } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const processImages = [
  '1586023492125-27b2c045efd7',
  '1618221195710-dd6b41faaea6',
  '1507089947368-19c1da9775ae',
  '1606744824163-985d376605aa',
  '1503174971373-b1f69850bded'
];

export default function ProcessPage() {
  const processSteps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Découverte & Consultation",
      duration: "1-2 semaines",
      description: "Nous commençons par une consultation approfondie pour comprendre votre vision, votre style de vie et vos besoins. Cela comprend des visites sur site, la création de planches d'ambiance et l'établissement des objectifs du projet.",
      details: [
        "Réunion de consultation initiale",
        "Évaluation et mesures de l'espace",
        "Analyse du style de vie et des préférences",
        "Discussion du budget et du calendrier",
        "Définition de la portée du projet"
      ]
    },
    {
      step: "02",
      icon: Palette,
      title: "Développement du Design",
      duration: "3-4 semaines",
      description: "Notre équipe créative développe des concepts de design complets, incluant la planification de l'espace, les schémas de couleurs, la sélection des matériaux et des visualisations 3D détaillées.",
      details: [
        "Présentation du concept de design",
        "Planification de l'espace et layouts",
        "Sélection des matériaux et finitions",
        "Rendus 3D et visualisations",
        "Raffinements du design et approbations"
      ]
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Planification & Approvisionnement",
      duration: "2-3 semaines",
      description: "Nous finalisons tous les détails du design, créons des dessins détaillés et commençons l'approvisionnement des matériaux, meubles et pièces personnalisées tout en coordonnant avec les entrepreneurs.",
      details: [
        "Dessins techniques et spécifications",
        "Approvisionnement mobilier et matériaux",
        "Coordination des entrepreneurs",
        "Planification du calendrier et de la logistique",
        "Approbations finales et permis"
      ]
    },
    {
      step: "04",
      icon: Hammer,
      title: "Implémentation",
      duration: "4-8 semaines",
      description: "La transformation commence ! Nos chefs de projet supervisent toute la construction, l'installation et le styling pour s'assurer que chaque détail répond à nos standards élevés.",
      details: [
        "Travaux de construction et rénovation",
        "Mises à jour régulières des progrès",
        "Inspections de contrôle qualité",
        "Livraison et installation du mobilier",
        "Placement du styling et des accessoires"
      ]
    },
    {
      step: "05",
      icon: Sparkles,
      title: "Révélation Finale",
      duration: "1 semaine",
      description: "La conclusion excitante où nous dévoilons votre espace transformé ! Nous effectuons une visite finale et fournissons des instructions d'entretien pour votre nouvel environnement.",
      details: [
        "Touches finales de styling et finitions",
        "Photographie professionnelle",
        "Visite client et orientation",
        "Instructions d'entretien et de maintenance",
        "Célébration de l'achèvement du projet"
      ]
    }
  ];

  const faq = [
    {
      question: "Combien de temps dure un projet typique ?",
      answer: "La plupart des projets résidentiels prennent 3-6 mois de la consultation initiale à l'achèvement, selon la portée et la complexité. Les projets commerciaux peuvent prendre plus de temps."
    },
    {
      question: "Travaillez-vous avec les meubles existants ?",
      answer: "Absolument ! Nous adorons incorporer des pièces qui ont une valeur sentimentale ou qui s'intègrent bien à notre vision de design. Nous évaluerons vos articles existants et les intégrerons de manière harmonieuse."
    },
    {
      question: "Qu'est-ce qui est inclus dans les frais de design ?",
      answer: "Nos frais de design incluent toutes les consultations, le développement de concepts, les rendus 3D, les dessins détaillés, les spécifications de matériaux et la gestion de projet tout au long du processus."
    },
    {
      question: "Pouvez-vous travailler avec mon entrepreneur ?",
      answer: "Oui, nous pouvons travailler avec votre entrepreneur préféré ou recommander des professionnels de confiance de notre réseau. Nous coordonnons étroitement pour assurer une exécution sans faille."
    }
  ];

  return (
    <div className="min-h-screen bg-[#EAEEFE]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#EAEEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-[#c30011] text-white text-sm font-medium tracking-wide uppercase rounded-full">
                NOTRE PROCESSUS
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal text-[#000] mb-8 tracking-tight leading-tight">
              De la vision à la <span className="italic font-bold text-[#c30011]">réalité</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed max-w-3xl mx-auto">
              Notre processus éprouvé en 5 étapes garantit que votre parcours de design est fluide, transparent et aboutit à un espace qui dépasse vos attentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-bold text-[#EAEEFE]">{step.step}</div>
                      <div className="w-16 h-16 bg-[#c30011] rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-white" size={32} />
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-3xl sm:text-4xl font-normal text-[#000] mb-4">
                      {step.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <Clock size={16} className="text-[#c30011]" />
                      <span className="text-[#c30011] font-medium">{step.duration}</span>
                    </div>
                    
                    <p className="text-lg text-[#666] mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#c30011] mt-0.5 flex-shrink-0" />
                          <span className="text-[#666]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/photo-${processImages[index]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                        alt={`${step.title} process`}
                        className="w-full h-[500px] object-cover rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#c30011]/20 to-transparent rounded-3xl"></div>
                      
                      {/* Floating step number */}
                      <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-[#c30011]">{step.step}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-[#EAEEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#000] mb-6">
              Calendrier du <span className="italic font-bold text-[#c30011]">projet</span>
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Un calendrier typique de projet résidentiel du début à la fin.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#c30011] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#000] mb-2">{step.title}</h3>
                  <p className="text-[#c30011] text-sm font-medium">{step.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal text-[#000] mb-6">
              Questions <span className="italic font-bold text-[#c30011]">fréquentes</span>
            </h2>
            <p className="text-lg text-[#666]">
              Questions courantes sur notre processus de design et nos services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#EAEEFE] p-8 rounded-3xl"
              >
                <h3 className="text-xl font-semibold text-[#000] mb-4">{item.question}</h3>
                <p className="text-[#666] leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c30011] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal mb-6">
              Prêt à commencer votre <span className="italic font-bold">transformation</span> ?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et créons un espace qui reflète vraiment qui vous êtes.
            </p>
            <a href="#contact">
              <button className="bg-white text-[#c30011] hover:bg-[#EAEEFE] px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
                Commencer mon projet
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
