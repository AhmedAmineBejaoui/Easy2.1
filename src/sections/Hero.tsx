"use client"
import Link from 'next/link';
import ArrowRight from '../../public/assets/arrow-right.svg';
import cogImage from '../../public/assets/bgg.png';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pd-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#c30011,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#000] bg-clip-text mt-6">La Clé de </h1>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#c30011] bg-clip-text">Votre Succès</h1>

            <p className="text-xl text-[#000] tracking-tight mt-6">
              Easy Ways Studio est une agence créative tout-en-un qui transforme vos idées en solutions digitales sur mesure :
              sites web modernes, applications mobiles performantes, designs percutants, vidéos engageantes et stratégies réseaux sociaux efficaces.
            </p>

            <div className="flex gap-2 items-center mt-[30px] flex-wrap">
              <Link href="/portfolio">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
                  découvrir nos projets
                </button>
              </Link>

              <a
                href="#contact"
              >
                <button className="btn btn-text gap-1">
                  <span>démarrer votre projet</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>

          <div className='mt-20 md:mt-0 md:h-[400px] md:flex-1 lg:h-[500px] relative'>
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className='md:absolute md:h-full md:w-auto md:w-[460px] md:max-w-none md:-left-0 lg:-left-0 lg:w-[650px]'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: 'easeInOut'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
