
"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  client: string;
  service: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  images: string[];
  mainImage: string;
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "autopieces-express",
      name: "AutoPièces Express",
      category: "E-commerce / Automobile",
      year: "2025",
      client: "Pièce Auto",
      service: "Création d’une boutique e-commerce sur mesure",
      description:
        "Conception et développement d’un site e-commerce intuitif dédié à la vente de pièces automobiles pour particuliers et professionnels.",
      challenge:
        "Créer une plateforme moderne et rapide pour gérer un vaste catalogue tout en simplifiant la recherche et la commande de pièces détachées.",
      solution:
        "Site responsive avec moteur de recherche avancé, filtres par modèle et année de véhicule, espace client et tableau de bord de commandes.",
      impact:
        "Une expérience d’achat fluide qui fidélise les professionnels comme les particuliers.",
      mainImage:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1571607384585-9c401af7dc2f?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    },
    {
      id: "casa-del-mar",
      name: "Casa Del Mar",
      category: "Hôtellerie / Tourisme",
      year: "2025",
      client: "Casa Del Mar",
      service: "Site web de réservation pour maison d’hôtes",
      description:
        "Création d’un site élégant et immersif pour une maison d’hôtes en bord de mer, avec système de réservation intégré et expérience multilingue.",
      challenge:
        "Attirer des voyageurs internationaux et faciliter les réservations directes avec paiement en ligne.",
      solution:
        "Développement d’un site multilingue responsive, formulaire de réservation simple, paiement sécurisé et mise en avant des services et activités.",
      impact:
        "Un taux de réservation en hausse grâce à une interface claire et rassurante.",
      mainImage:
        "https://images.unsplash.com/photo-1501117716987-c8e9bd0d0b7e?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1501117716987-c8e9bd0d0b7e?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    },
    {
      id: "easy-ways-skills",
      name: "Easy Ways Skills",
      category: "E-learning / Éducation",
      year: "2025",
      client: "Easy Ways Studio",
      service: "Plateforme de cours en ligne avec assistant IA",
      description:
        "Mise en place d’une plateforme d’apprentissage intuitive avec un agent IA pour guider les apprenants et des cours catégorisés par niveau et objectif.",
      challenge:
        "Créer une solution accessible aux débutants tout en intégrant des outils intelligents et un système de paiement sécurisé.",
      solution:
        "Pages d’accueil dynamiques, blog informatif, assistant virtuel, filtres de recherche avancés et processus de paiement avec réductions.",
      impact:
        "Une montée en compétence facilitée et une communauté d’apprenants en croissance.",
      mainImage:
        "https://images.unsplash.com/photo-1584697964154-86a1184a2ff9?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1584697964154-86a1184a2ff9?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1584697964263-c477c772cfa2?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1537432376769-00aabc1ad885?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    },
    {
      id: "abrify",
      name: "Abrify",
      category: "E-commerce / Automobile",
      year: "2025",
      client: "Abrify",
      service: "Site e-commerce pour housses de voiture",
      description:
        "Développement d’un site de vente en ligne spécialisé dans les housses de voiture personnalisées selon la marque et l’année.",
      challenge:
        "Permettre à l’utilisateur de sélectionner précisément la taille adaptée à son véhicule tout en découvrant les différents niveaux de protection.",
      solution:
        "Site responsive avec moteur de recherche par marque et modèle, fiches produits détaillées et option d’installation à domicile.",
      impact:
        "Une recherche simplifiée et une expérience d’achat rassurante pour les passionnés d’automobile.",
      mainImage:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1487754187004-1dbd07fd1853?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1511390421650-516d5c15c666?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1483728579513-3b7815b1cdec?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    },
    {
      id: "tunivente",
      name: "Tunivente",
      category: "Marketplace / Logistique",
      year: "2025",
      client: "Tunivente",
      service: "Plateforme de vente et livraison en temps réel",
      description:
        "Développement d’une plateforme de vente en ligne avec gestion de stock en temps réel et coordination entre marchands, clients et livreurs.",
      challenge:
        "Créer un écosystème digital capable de synchroniser de multiples acteurs tout en assurant rapidité et sécurité des paiements.",
      solution:
        "Dashboard centralisé, suivi de stock instantané, notifications de livraison et processus de commande ultra simplifié.",
      impact:
        "Réduction des erreurs de stock et délais de livraison optimisés pour le marché tunisien.",
      mainImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1523475496153-3a12cf93cc21?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1527504432539-c79170d6af39?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    },
    {
      id: "tech-flow",
      name: "Tech Flow",
      category: "Technologie / B2B",
      year: "2025",
      client: "Tech Flow",
      service: "Site vitrine professionnel pour services technologiques",
      description:
        "Création d’un site clair pour présenter les services technologiques proposés avec navigation fluide et intégration de ressources externes.",
      challenge:
        "Valoriser l’expertise technique tout en restant accessible à des clients non spécialistes.",
      solution:
        "Sections services, témoignages, partenaires et blog, avec design responsive épuré orienté conversion.",
      impact:
        "Une présence en ligne professionnelle qui génère de nouveaux leads B2B.",
      mainImage:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&h=600&q=80",
      images: [
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80"
      ]
    }
  ];

  const categories = [
    "Tous",
    "E-commerce / Automobile",
    "Hôtellerie / Tourisme",
    "E-learning / Éducation",
    "Marketplace / Logistique",
    "Technologie / B2B"
  ];

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

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
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-[#c30011] text-white text-sm font-medium tracking-wide uppercase rounded-full">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000] mb-8 tracking-tight leading-tight">
              Nos <span className="italic font-bold text-[#c30011]">Projets</span> Réalisés
            </h1>
            <p className="text-xl text-[#000] leading-relaxed max-w-3xl mx-auto">
              Découvrez nos réalisations digitales : boutiques en ligne, plateformes éducatives, solutions logistiques et plus encore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#c30011] text-white"
                    : "bg-gray-100 text-[#000] hover:bg-[#c30011] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.mainImage}
                  alt={`${project.name} interior design`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#000]">{project.name}</h3>
                    <span className="text-sm text-[#c30011] font-semibold">{project.category}</span>
                  </div>
                  <p className="text-[#666] mb-4">{project.description}</p>
                  <div className="text-sm text-[#666]">
                    <p>Client: {project.client}</p>
                    <p>Année: {project.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
                
                {/* Image Gallery */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="grid md:grid-cols-4 gap-4 mb-8 text-sm">
                    <div>
                      <p className="font-semibold text-[#000]">Client</p>
                      <p className="text-[#666]">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#000]">Service</p>
                      <p className="text-[#666]">{selectedProject.service}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#000]">Catégorie</p>
                      <p className="text-[#666]">{selectedProject.category}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#000]">Année</p>
                      <p className="text-[#666]">{selectedProject.year}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-[#000] mb-6">{selectedProject.name}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#000] mb-3">Aperçu du Projet</h3>
                      <p className="text-[#666] leading-relaxed">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#000] mb-3">Défi</h3>
                      <p className="text-[#666] leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#000] mb-3">Solution</h3>
                      <p className="text-[#666] leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#000] mb-3">Impact</h3>
                      <p className="text-[#666] leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
