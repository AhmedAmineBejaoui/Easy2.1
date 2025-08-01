"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import PortfolioGallery from "@/components/portfolio-gallery";
import { Button } from "@/components/ui/button";

export function PortfolioPage() {
  return <PortfolioGallery />;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ou une application ?",
      answer:
        "Chaque projet est unique, mais en général, un site vitrine prend entre 1 à 3 semaines, tandis qu’un projet plus complexe comme une application peut nécessiter plusieurs semaines. Nous définissons un planning précis dès le début.",
    },
    {
      question: "Est-ce que je dois fournir le contenu (textes, images) ?",
      answer:
        "Vous pouvez, mais si vous n’en avez pas, notre équipe peut vous accompagner avec la rédaction, la création graphique et même la vidéo si besoin.",
    },
    {
      question: "Quels sont vos tarifs et comment sont-ils calculés ?",
      answer:
        "Nos tarifs dépendent du type de projet, des fonctionnalités souhaitées et du niveau de personnalisation. Nous proposons toujours un devis transparent adapté à votre budget.",
    },
    {
      question: "Est-ce que vous proposez un accompagnement après la livraison ?",
      answer:
        "Oui, nous assurons un support technique, des mises à jour si besoin, et un accompagnement stratégique pour faire évoluer votre projet au fil du temps.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold studio-primary mb-6">
            Vos questions répondues
          </h2>
          <p className="text-xl studio-text-light">
            Conseils d’experts pour réussir votre projet digital
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold studio-primary">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="studio-accent" size={20} />
                ) : (
                  <ChevronDown className="studio-accent" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 studio-text-light"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="primary"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 font-semibold hover-lift"
          >
            Contactez-nous
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
