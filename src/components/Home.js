import * as React from 'react';
import '../App.css';

import Header from './Header';
import Hero from './Hero';
import HeroImg from './HeroImg';
import Brands from './Brands';
import Services from './Services';
import Features from './Features';
import Incorporate from './Incorporate';
import PricingTabs from './PricingTabs';
import Support from './Support';
import Faq from './Faq';
import CTA from './CTA';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Process from './Process';

export default function Home() {

    return (
        <div>
            <Header bg='blue' color='white' logo='boosty-white-logo.svg' border='none' />
            <Hero />
            <Services />
            <PricingTabs />
            <Features />
            <Process />
            <Incorporate />
            <Testimonials />
            <Faq />
            <CTA />
            <Footer />
        </div>
    )
}
