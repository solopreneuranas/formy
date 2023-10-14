import Hero from "./components/Hero";
import HeroImg from "./components/HeroImg";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Faq from "./components/Faq";
import PricingCompare from "./components/PricingCompare";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Bonuses from "./components/Bonuses";
import Header from "./components/Header";
import Process from "./components/Process";
import CTA from "./components/CTA";
import PricingTabs from "./components/PricingTabs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroImg />
      <Brands />
      <Services />
      <Process />
      <Features />
      <PricingTabs />
      <Bonuses />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
