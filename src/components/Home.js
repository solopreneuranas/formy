import * as React from 'react';
import '../App.css';

import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import Incorporate from './Incorporate';
import PricingTabs from './PricingTabs';
import Faq from './Faq';
import CTA from './CTA';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Process from './Process';
import TopBar from './TopBar';
import GetStarted from './GetStarted';

export default function Home() {

    return (
        <div>
            <TopBar color='white' background='linear-gradient(to right, blue 30%, #8000ff 70%)' linkColor='gainsboro' />
            <Header bg='white' color='black' logo='boosty-gradient-logo.svg' shadow='0 0 20px gainsboro' buttonBg='linear-gradient(to right, blue, #8000ff)' buttonColor='white' />
            <Hero />
            <Services />
            <PricingTabs busiLink='/pricing' preLink='/pricing' />
            <Features />
            <Process />
            <GetStarted />
            <Incorporate />
            <Testimonials />
            <Faq />
            <CTA />
            <Footer paddingMobile='45% 5% 10%' paddingDesktop='17% 13% 6%' />
        </div>
    )
}
