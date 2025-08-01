
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
      id: "modameadows",
      name: "ModaMeadows",
      category: "Résidentiel",
      year: "2023",
      client: "The Morrison Family",
      service: "Rénovation Complète",
      description: "Transformation de penthouse de luxe avec élégance contemporaine et vie urbaine sophistiquée.",
      challenge: "Transformer un penthouse daté en résidence de luxe moderne tout en préservant le caractère historique du bâtiment et en maximisant la lumière naturelle.",
      solution: "Nous avons implémenté un design ouvert avec menuiserie sur mesure, technologie domotique intégrée, et matériaux soigneusement sélectionnés qui équilibrent chaleur et sophistication contemporaine.",
      impact: "La transformation a résulté en une augmentation de 40% de la lumière naturelle, une fonctionnalité améliorée, et un espace de vie cohérent qui reflète parfaitement le style de vie de la famille.",
      mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      id: "zenithspaces",
      name: "ZenithSpaces",
      category: "Éco-Responsable",
      year: "2023",
      client: "GreenTech Solutions",
      service: "Design de Bureau Durable",
      description: "Design de bureau minimaliste mettant l'accent sur les matériaux naturels, la durabilité et le bien-être des employés.",
      challenge: "Créer un espace de travail qui favorise la productivité et le bien-être tout en respectant des normes de durabilité strictes et en incorporant des principes de design biophilique.",
      solution: "Nous avons utilisé du bois récupéré, des murs végétaux, des systèmes d'éclairage naturel, et des matériaux écologiques dans tout l'espace, créant des zones dédiées pour la collaboration et le travail concentré.",
      impact: "Le nouveau design a augmenté la satisfaction des employés de 35%, réduit la consommation d'énergie de 25%, et obtenu la certification LEED Platinum pour le design durable.",
      mainImage: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      id: "vervevilla",
      name: "VerveVilla",
      category: "Éclairage",
      year: "2023",
      client: "Villa Residents Association",
      service: "Design d'Éclairage Architectural",
      description: "Design d'éclairage innovant avec couleurs vibrantes et systèmes d'illumination dynamiques pour un complexe de villas de luxe.",
      challenge: "Concevoir un système d'éclairage complet qui met en valeur les caractéristiques architecturales tout en créant une ambiance pour différents moments de la journée et diverses activités.",
      solution: "Nous avons implémenté un éclairage en couches avec contrôles intelligents, éclairage d'accentuation pour les caractéristiques architecturales, et systèmes à couleurs changeantes qui s'adaptent aux rythmes circadiens naturels.",
      impact: "Le design d'éclairage a augmenté la valeur de la propriété de 20%, réduit les coûts énergétiques de 30%, et créé une identité visuelle unique qui est devenue un point de repère du quartier.",
      mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      id: "ecohaven",
      name: "EcoHaven Studios",
      category: "Commercial",
      year: "2023",
      client: "Creative Collective",
      service: "Design d'Espace Studio",
      description: "Espace studio commercial durable conçu pour les professionnels créatifs avec des environnements de travail flexibles.",
      challenge: "Créer des espaces studio polyvalents qui peuvent accueillir diverses disciplines créatives tout en maintenant les objectifs de durabilité et en optimisant la lumière naturelle.",
      solution: "Nous avons conçu des espaces modulaires avec cloisons mobiles, matériaux durables, lucarnes pour l'illumination naturelle, et équipements partagés qui favorisent la collaboration.",
      impact: "Les studios ont atteint 95% d'occupation en trois mois, réduit les coûts opérationnels de 22%, et sont devenus un modèle pour le design commercial durable dans la ville.",
      mainImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      id: "luxeloft",
      name: "LuxeLoft",
      category: "Résidentiel",
      year: "2023",
      client: "Urban Living Group",
      service: "Rénovation de Loft de Luxe",
      description: "Conversion de loft industriel de luxe avec éléments exposés et sophistication moderne.",
      challenge: "Préserver le caractère industriel d'un entrepôt converti tout en créant un environnement de vie luxueux avec équipements et confort modernes.",
      solution: "Nous avons conservé la brique apparente et les poutres d'acier, ajouté des finitions haut de gamme, créé des zones de vie définies, et intégré la technologie domotique de manière transparente dans l'esthétique industrielle.",
      impact: "Le loft est devenu une propriété vitrine, inspirant des conversions similaires dans le quartier et atteignant une augmentation de 50% de la valeur immobilière tout en maintenant le charme industriel authentique.",
      mainImage: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    },
    {
      id: "aurorapartments",
      name: "AuroraApartments",
      category: "Éco-Responsable",
      year: "2023",
      client: "Aurora Development",
      service: "Design de Complexe Résidentiel",
      description: "Complexe d'appartements contemporain avec éléments de design inspirés de l'aurore et caractéristiques durables.",
      challenge: "Concevoir un complexe résidentiel multi-unités qui se démarque esthétiquement tout en incorporant des pratiques durables et en favorisant l'interaction communautaire.",
      solution: "Nous avons créé des formes fluides et organiques inspirées des motifs d'aurore, intégré des toits verts, panneaux solaires, et espaces communautaires qui encouragent l'interaction entre résidents.",
      impact: "Le complexe a atteint 100% de pré-location, remporté trois prix de durabilité, et est devenu un modèle pour le développement urbain respectueux de l'environnement.",
      mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ]
    }
  ];

  const categories = ["Tous", "Résidentiel", "Commercial", "Éco-Responsable", "Éclairage"];

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
              Découvrez notre portfolio de projets de design d'intérieur qui transforment les espaces en créant des environnements uniques et fonctionnels.
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
