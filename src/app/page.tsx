import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { HeroAfterTicker } from "@/sections/HeroAfterTicker";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Blog } from "@/sections/Blog";
import { Contact } from "@/sections/Contact";
import { Objectifs } from "@/sections/Objectifs";


export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <LogoTicker />
      <HeroAfterTicker />
      <div id="services">
        <Services />
      </div>
      <div id="objectifs">
        <Objectifs />
      </div>
      <Testimonials />
      <Blog />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
