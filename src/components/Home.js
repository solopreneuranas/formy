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
import TopBar from './TopBar';

export default function Home() {

    return (
        <div>
            <TopBar color='white' background='linear-gradient(to right, blue 30%, #8000ff 70%)' linkColor='gainsboro'/>
            <Header bg='white' color='black' logo='boosty-gradient-logo.svg' border='2px solid black' buttonBg='linear-gradient(to right, blue, #8000ff)' buttonColor='white' />
            <Hero />
            <Services />
            <PricingTabs busiLink='/pricing' preLink='/pricing' />
            <Features />
            <Process />
            <Incorporate />
            <Testimonials />
            <Faq />
            <CTA />
            <Footer paddingMobile='45% 5% 10%' paddingDesktop='17% 13% 6%' />
        </div>
    )
}
