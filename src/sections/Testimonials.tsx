"use client";
import avatar1 from "../../public/assets/avatar-1.png";
import avatar2 from "../../public/assets/avatar-2.png";
import avatar3 from "../../public/assets/avatar-3.png";
import avatar4 from "../../public/assets/avatar-4.png";
import avatar5 from "../../public/assets/avatar-5.png";
import avatar6 from "../../public/assets/avatar-6.png";
import avatar7 from "../../public/assets/avatar-7.png";
import avatar8 from "../../public/assets/avatar-8.png";
import avatar9 from "../../public/assets/avatar-9.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "Easy Ways Studio est incroyable ! Ils ont créé une application mobile sur mesure qui répondait parfaitement à nos besoins. Très professionnel et créatif.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Besoin d'un site web moderne et performant ? Easy Ways Studio est la solution. Leur travail a transformé notre plateforme en un outil puissant.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Une équipe exceptionnelle ! Easy Ways Studio a non seulement corrigé les problèmes de notre site web, mais ils l'ont aussi rendu plus rapide et attrayant.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Développer une application mobile est facile avec Easy Ways Studio. Leur expertise et leur créativité font toute la différence. Hautement recommandé !",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Ils ont construit notre site web à partir de zéro et le résultat est stupéfiant. Si vous voulez des professionnels fiables, choisissez Easy Ways Studio.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Easy Ways Studio est la référence pour ceux qui souhaitent développer une application mobile ou améliorer leur site web. Une expérience incroyable !",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Nous avons confié un projet complexe à Easy Ways Studio, et ils ont livré un produit au-delà de nos attentes. Une équipe passionnée et talentueuse.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Si vous voulez un site web moderne ou une application mobile innovante, Easy Ways Studio est l'équipe qu'il vous faut. Service rapide et efficace.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Grâce à Easy Ways Studio, notre site est maintenant un outil puissant et attrayant. Une équipe à l'écoute et toujours prête à aider.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number }) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: "-50%",
    }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
      className="flex flex-col gap-6 pb-6">
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }, testimonialIndex) => (
            <div className="card" key={`${index}-${testimonialIndex}`}>
              <div>
                {text}
              </div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                <div className="flec flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title mt-5">Ce Que Nos Clients Disent</h2>
          <p className="section-description mt-5">
            Easy Ways Studio est la référence pour créer des sites web, des applications mobiles et résoudre des problèmes techniques. Découvrez ce que nos clients disent de nous.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
