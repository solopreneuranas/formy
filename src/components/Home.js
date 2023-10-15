import * as React from 'react';
import '../App.css';

import Header from './Header';
import Hero from './Hero';
import HeroImg from './HeroImg';
import Brands from './Brands';
import Services from './Services';
import Process from './Process';
import Features from './Features';
import PricingTabs from './PricingTabs';
import Bonuses from './Bonuses';
import Faq from './Faq';
import CTA from './CTA';
import Footer from './Footer';

export default function Home() {

    return (
        <div className='root'>
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
    )
}
