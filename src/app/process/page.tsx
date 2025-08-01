
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ClipboardList, LayoutDashboard, Code, Rocket, CheckCircle, Clock } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const processImages = [
  '1525182008055-f88b95ff7980',
  '1517433456452-f9633a875f6f',
  '1519389950473-47ba0277781c',
  '1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600"'
];

export default function ProcessPage() {
  const processSteps = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Brief & cadrage",
      duration: "1-2 semaines",
      description:
        "Collecte d’informations pour bien comprendre le besoin : objectifs, audience cible, contraintes et attentes. Élaboration d’un brief clair et structuré qui sert de guide tout au long du projet.",
      details: [
        "Analyse des objectifs et de l'audience",
        "Inventaire des contraintes",
        "Rédaction du brief détaillé",
        "Validation avec les parties prenantes"
      ]
    },
    {
      step: "02",
      icon: LayoutDashboard,
      title: "Stratégie & wireframes",
      duration: "1-2 semaines",
      description:
        "Définition de l’arborescence, conception UX/UI optimisée et création de maquettes pour donner forme au projet.",
      details: [
        "Élaboration du sitemap",
        "Conception UX/UI",
        "Wireframes et maquettes",
        "Validation du concept"
      ]
    },
    {
      step: "03",
      icon: Code,
      title: "Développement & révisions",
      duration: "2 semaines - 2 mois",
      description:
        "Développement technique intégrant contenus et responsive design. Des cycles de feedback permettent d’ajuster avant la mise en ligne.",
      details: [
        "Intégration HTML/CSS/JS",
        "Animations et responsive",
        "Feedbacks successifs",
        "Validation de chaque version"
      ]
    },
    {
      step: "04",
      icon: Rocket,
      title: "Livraison & optimisation",
      duration: "2-3 semaines",
      description:
        "Recette finale, mise en ligne et suivi après lancement avec optimisation continue pour maximiser l’impact.",
      details: [
        "Mise en ligne et tests finaux",
        "Suivi de performance",
        "Analyse des retours",
        "Améliorations continues"
      ]
    }
  ];

  const faq = [
    {
      question: "Combien de temps faut-il pour créer un site web complet ?",
      answer:
        "Le délai moyen dépend du type de projet. Pour un site vitrine, cela prend entre 1 à 3 semaines. Pour un site e-commerce ou une plateforme plus complexe, il faut compter 4 à 6 semaines. Nous définissons les délais ensemble dès le départ."
    },
    {
      question: "Est-ce que je peux modifier mon site moi-même après livraison ?",
      answer:
        "Oui ! Nous utilisons des outils intuitifs (WordPress, Webflow, CMS custom...) pour vous permettre de mettre à jour facilement vos contenus, sans connaissances techniques. Une formation rapide est incluse."
    },
    {
      question: "Proposez-vous des services d’hébergement et de maintenance ?",
      answer:
        "Absolument. Nous pouvons héberger votre site, assurer sa sécurité, sa rapidité et effectuer les mises à jour techniques. Des packs mensuels sont disponibles selon vos besoins."
    },
    {
      question: "Puis-je vous confier à la fois le design, le développement et le contenu ?",
      answer:
        "Oui, nous offrons une solution clé en main. De la maquette jusqu’au référencement SEO et à la rédaction des textes, notre équipe s’occupe de tout pour vous livrer un site 100% prêt à l’emploi."
    },
    {
      question: "Est-ce que mon site sera optimisé pour les mobiles et le SEO ?",
      answer:
        "Tous nos sites sont conçus pour être parfaitement responsives (mobile, tablette, desktop) et optimisés pour le référencement naturel (SEO). Votre visibilité est notre priorité."
    },
    {
      question: "Puis-je vendre mes produits ou services directement via mon site ?",
      answer:
        "Oui, nous créons des boutiques en ligne complètes avec paiement sécurisé, gestion des stocks et interface utilisateur simple. Idéal pour lancer rapidement votre activité en ligne."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
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
              Notre process en <span className="italic font-bold text-[#c30011]">4 étapes clés</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed max-w-3xl mx-auto">
              De l’analyse initiale à la mise en ligne, nous vous accompagnons pour donner vie à votre projet digital.
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
                      <div className="text-6xl font-bold text-white">{step.step}</div>
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
      <section className="py-20 bg-white">
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
              Un calendrier de projet résidentiel typique du début à la fin.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8">
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
                className="bg-white p-8 rounded-3xl"
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
              <button className="bg-white text-[#c30011] hover:bg-red-100 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300">
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
