import Hero from "./components/Hero";
import HeroImg from "./components/HeroImg";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Mission from "./components/Mission";
import PricingCompare from "./components/PricingCompare";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Bonuses from "./components/Bonuses";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroImg />
      <Brands />
      <Services />
      <Features />
      <PricingCompare />
      <Bonuses />
      <Mission />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
