"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className='py-2 md:pt-6 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className='flex gap-20 flex-none pr-14' animate={{
            translateX: "-50%",
          }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src="/assets/react.png" width={240} height={96} alt="Acme Logo" className='logo-tacker-image2' />
            <Image src="/assets/ai.png" width={96} height={96} alt="Quantum Logo" className='logo-tacker-image' />
            <Image src="/assets/firebase.png" width={240} height={96} alt="Echo Logo" className='logo-tacker-image2' />
            <Image src="/assets/pr.png" width={96} height={96} alt="Celestial Logo" className='logo-tacker-image' />
            <Image src="/assets/node.png" width={160} height={96} alt="Pulse Logo" className='logo-tacker-image3' />
            <Image src="/assets/ps.png" width={96} height={96} alt="Apex Logo" className='logo-tacker-image' />
            <Image src="/assets/flutter.png" width={240} height={96} alt="Celestial Logo" className='logo-tacker-image2' />
            <Image src="/assets/react.png" width={240} height={96} alt="Acme Logo" className='logo-tacker-image2' />
            <Image src="/assets/ai.png" width={96} height={96} alt="Quantum Logo" className='logo-tacker-image' />
            <Image src="/assets/firebase.png" width={240} height={96} alt="Echo Logo" className='logo-tacker-image2' />
            <Image src="/assets/pr.png" width={96} height={96} alt="Celestial Logo" className='logo-tacker-image' />
            <Image src="/assets/node.png" width={160} height={96} alt="Pulse Logo" className='logo-tacker-image3' />
            <Image src="/assets/ps.png" width={96} height={96} alt="Apex Logo" className='logo-tacker-image' />
            <Image src="/assets/flutter.png" width={240} height={96} alt="Celestial Logo" className='logo-tacker-image2' />
          </motion.div>
        </div>
      </div>
    </div>

  );
};
