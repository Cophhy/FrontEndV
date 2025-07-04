import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Seções já existentes
import Social  from "@/components/Social";
import Photo   from "@/components/Photo";
import Stats   from "@/components/Stats";

// Novas seções
import Resume   from "@/components/Resume";
import Services from "@/components/Services";
import Work     from "@/components/Work";
import Contact  from "@/components/Contact";
import Advantages from '@/components/Advantages';
import TestimonialsCarousel from '@/components/TestimonialsCarousel'


const Home = () => {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* texto */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Transforme seus dados em fluxo</span>
              <h1 className="h1 mb-6">
                VPA <br /> <span className="text-accent">Tech Consulting</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Entregamos soluções personalizadas em engenharia e análise de dados para impulsionar o seu negócio ou projeto.
              </p>
              {/* botões e socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button> */}
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* foto */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      {/* Seções adicionais */}
      <section id="resume"><Resume /></section>
      <section id="services"><Services /></section>
      <section id="work"><Work /></section>
      <section id="advantages"><Advantages /></section>
      <section id="testimonialscarousel"><TestimonialsCarousel /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
