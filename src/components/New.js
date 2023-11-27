import * as React from 'react';
import '../App.css';

import Header from './Header';
import Hero from './Hero';
import HeroImg from './HeroImg';
import Brands from './Brands';
import Services from './Services';
import Features from './Features';
import PricingTabs from './PricingTabs';
import Support from './Support';
import Faq from './Faq';
import CTA from './CTA';
import Footer from './Footer';
import Worldwide from './Worldwide';

export default function New() {

    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Features />
            <PricingTabs />
            {/* <Worldwide /> */}
            <Faq />
            <CTA />
            <Footer />
        </div>
    )
}
