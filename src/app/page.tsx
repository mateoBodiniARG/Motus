import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Horarios } from "@/components/sections/Horarios";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { Ubicacion } from "@/components/sections/Ubicacion";
import { Indicaciones } from "@/components/sections/Indicaciones";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <Horarios />
      <Services />
      <Reviews />
      <Ubicacion />
      <Indicaciones />
      <Footer />
    </div>
  );
}
