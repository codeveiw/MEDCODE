import CTA from "../components/sections/cta";
import Hero from "../components/sections/hero";
import Services from "../components/sections/services";
import WhyUs from "../components/sections/why-us";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CTA />
    </main>
  );
}

