import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";


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

export default function PortfolioGallery() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "modameadows",
      name: "ModaMeadows",
      category: "Residential",
      year: "2023",
      client: "The Morrison Family",
      service: "Complete Home Renovation",
      description:
        "Luxury penthouse transformation with contemporary elegance and sophisticated urban living.",
      challenge:
        "Transform a dated penthouse into a modern luxury residence while preserving the building's historic character and maximizing natural light throughout the space.",
      solution:
        "We implemented an open-plan design with custom millwork, integrated smart home technology, and carefully selected materials that balance warmth with contemporary sophistication.",
      impact:
        "The transformation resulted in a 40% increase in natural light, improved functionality, and a cohesive living space that perfectly reflects the family's lifestyle and entertaining needs.",
      mainImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
    {
      id: "zenithspaces",
      name: "ZenithSpaces",
      category: "Eco-Friendly",
      year: "2023",
      client: "GreenTech Solutions",
      service: "Sustainable Office Design",
      description:
        "Minimalist office design emphasizing natural materials, sustainability, and employee wellbeing.",
      challenge:
        "Create a workspace that promotes productivity and wellbeing while adhering to strict sustainability standards and incorporating biophilic design principles.",
      solution:
        "We utilized reclaimed wood, living walls, natural lighting systems, and eco-friendly materials throughout the space, creating designated zones for collaboration and focused work.",
      impact:
        "The new design increased employee satisfaction by 35%, reduced energy consumption by 25%, and achieved LEED Platinum certification for sustainable design.",
      mainImage:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
    {
      id: "vervevilla",
      name: "VerveVilla",
      category: "Lighting",
      year: "2023",
      client: "Villa Residents Association",
      service: "Architectural Lighting Design",
      description:
        "Innovative lighting design with vibrant colors and dynamic illumination systems for a luxury villa complex.",
      challenge:
        "Design a comprehensive lighting system that enhances architectural features while creating ambiance for different times of day and various activities.",
      solution:
        "We implemented layered lighting with smart controls, accent lighting for architectural features, and color-changing systems that adapt to natural circadian rhythms.",
      impact:
        "The lighting design enhanced the property value by 20%, reduced energy costs by 30%, and created a unique visual identity that became a neighborhood landmark.",
      mainImage:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
    {
      id: "ecohaven",
      name: "EcoHaven Studios",
      category: "Commercial",
      year: "2023",
      client: "Creative Collective",
      service: "Studio Space Design",
      description:
        "Sustainable commercial studio space designed for creative professionals with flexible work environments.",
      challenge:
        "Create versatile studio spaces that can accommodate various creative disciplines while maintaining sustainability goals and optimizing natural light.",
      solution:
        "We designed modular spaces with moveable partitions, sustainable materials, skylights for natural illumination, and shared amenities that foster collaboration.",
      impact:
        "The studios achieved 95% occupancy within three months, reduced operational costs by 22%, and became a model for sustainable commercial design in the city.",
      mainImage:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
    {
      id: "luxeloft",
      name: "LuxeLoft",
      category: "Residential",
      year: "2023",
      client: "Urban Living Group",
      service: "Luxury Loft Renovation",
      description:
        "Industrial luxury loft conversion with exposed elements and modern sophistication.",
      challenge:
        "Preserve the industrial character of a converted warehouse while creating a luxurious living environment with modern amenities and comfort.",
      solution:
        "We retained exposed brick and steel beams, added high-end finishes, created defined living zones, and integrated smart home technology seamlessly into the industrial aesthetic.",
      impact:
        "The loft became a showcase property, inspiring similar conversions in the district and achieving a 50% increase in property value while maintaining authentic industrial charm.",
      mainImage:
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
    {
      id: "aurorapartments",
      name: "AuroraApartments",
      category: "Eco-Friendly",
      year: "2023",
      client: "Aurora Development",
      service: "Residential Complex Design",
      description:
        "Contemporary apartment complex with aurora-inspired design elements and sustainable features.",
      challenge:
        "Design a multi-unit residential complex that stands out aesthetically while incorporating sustainable practices and fostering community interaction.",
      solution:
        "We created flowing, organic forms inspired by aurora patterns, integrated green roofs, solar panels, and community spaces that encourage resident interaction.",
      impact:
        "The complex achieved 100% pre-leasing, won three sustainability awards, and became a model for environmentally conscious urban development.",
      mainImage:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      ],
    },
  ];

  const categories = [

    "Tous",
    "Résidentiel",
    "Commercial",
    "Éco-responsable",
    "Éclairage",
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
    <>
      <section id="portfolio" className="py-20 bg-studio-neutral animate-fade-in scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold studio-primary mb-6">

              Projets récents
            </h2>
            <p className="text-xl studio-text-light mb-8">
              Aperçu de nos dernières réalisations

            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 animate-float ${
                  selectedCategory === category
                    ? 'bg-studio-accent text-white'
                    : 'bg-card studio-text-light hover:bg-studio-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-soft overflow-hidden hover:shadow-3xl transition-all duration-300 hover-lift hover-scale cursor-pointer"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.mainImage}
                  alt={`${project.name} interior design`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold studio-primary">{project.name}</h3>
                    <span className="text-sm studio-accent font-semibold">{project.category}</span>
                  </div>
                  <p className="studio-text-light mb-4">{project.description}</p>
                  <div className="text-sm studio-text-light">
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
              className="bg-card rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-card rounded-full p-2 shadow-lg hover:bg-gray-100"
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
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card rounded-full p-2 shadow-lg hover:bg-gray-100"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card rounded-full p-2 shadow-lg hover:bg-gray-100"
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
                    <p className="font-semibold studio-primary">Client</p>
                      <p className="studio-text-light">{selectedProject.client}</p>
                    </div>
                    <div>
                    <p className="font-semibold studio-primary">Service</p>
                      <p className="studio-text-light">{selectedProject.service}</p>
                    </div>
                    <div>
                    <p className="font-semibold studio-primary">Catégorie</p>
                      <p className="studio-text-light">{selectedProject.category}</p>
                    </div>
                    <div>
                    <p className="font-semibold studio-primary">Année</p>

                      <p className="studio-text-light">{selectedProject.year}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold studio-primary mb-6">{selectedProject.name}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold studio-primary mb-3">Aperçu du projet</h3>

                      <p className="studio-text-light leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold studio-primary mb-3">Défi</h3>

                      <p className="studio-text-light leading-relaxed">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold studio-primary mb-3">Solution</h3>

                      <p className="studio-text-light leading-relaxed">{selectedProject.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold studio-primary mb-3">Impact</h3>

                      <p className="studio-text-light leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
