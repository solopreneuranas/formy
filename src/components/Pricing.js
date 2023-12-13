import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';
import Faq from './Faq'
import Addons from "./Addons"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid, Button, TextField } from "@mui/material";
import PricingTabs from './PricingTabs'
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Testimonials from './Testimonials';
import TopBar from './TopBar';

export default function Pricing(props) {

    const [selectedState, setSelectedState] = useState(null);
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const handleStateSelect = (event, newValue) => {
        const start = window.scrollY;
        const end = 300;
        const duration = 500;

        const startTime = performance.now();

        const animateScroll = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(0, start + progress * (end - start));

            if (progress < 1) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);

        setSelectedState(newValue);
    };


    const states = [
        { label: "Wyoming (Top Choice Overall)", fee: 102 },
        { label: "Florida (Ideal for E-commerce)", fee: 125 },
        { label: "Texas (Great for Amazon Sellers)", fee: 300 },
        { label: "Montana (Most Affordable)", fee: 35 },
        { label: "Delaware (Prime for Startups)", fee: 140 },

        { label: 'Alabama', fee: 236 },
        { label: 'Alaska', fee: 250 },
        { label: 'Arizona', fee: 85 },
        { label: 'Arkansas', fee: 45 },
        { label: 'California', fee: 70 },
        { label: 'Colorado', fee: 50 },
        { label: 'Connecticut', fee: 120 },
        { label: 'District of Columbia', fee: 99 },
        { label: 'Georgia', fee: 100 },
        { label: 'Hawaii', fee: 51 },
        { label: 'Idaho', fee: 101 },
        { label: 'Illinois', fee: 153 },
        { label: 'Indiana', fee: 97 },
        { label: 'Iowa', fee: 50 },
        { label: 'Kansas', fee: 166 },
        { label: 'Kentucky', fee: 40 },
        { label: 'Louisiana', fee: 105 },
        { label: 'Maine', fee: 175 },
        { label: 'Maryland', fee: 155 },
        { label: 'Massachusetts', fee: 520 },
        { label: 'Michigan', fee: 50 },
        { label: 'Minnesota', fee: 155 },
        { label: 'Mississippi', fee: 53 },
        { label: 'Missouri', fee: 50 },
        { label: 'Nebraska', fee: 102 },
        { label: 'Nevada', fee: 425 },
        { label: 'New Hampshire', fee: 102 },
        { label: 'New Jersey', fee: 129 },
        { label: 'New Mexico', fee: 50 },
        { label: 'New York', fee: 205 },
        { label: 'North Carolina', fee: 128 },
        { label: 'North Dakota', fee: 135 },
        { label: 'Ohio', fee: 99 },
        { label: 'Oklahoma', fee: 104 },
        { label: 'Oregon', fee: 100 },
        { label: 'Pennsylvania', fee: 125 },
        { label: 'Rhode Island', fee: 156 },
        { label: 'South Carolina', fee: 125 },
        { label: 'South Dakota', fee: 150 },
        { label: 'Tennessee', fee: 307 },
        { label: 'Utah', fee: 56 },
        { label: 'Vermont', fee: 125 },
        { label: 'Virginia', fee: 100 },
        { label: 'Washington', fee: 200 },
        { label: 'West Virginia', fee: 130 },
        { label: 'Wisconsin', fee: 130 }
    ]


    return (
        <div style={{ overflowX: 'hidden' }}>
            <TopBar color='white' background='#8000ff' />
            <Header bg='white' color='black' logo='boosty-purple-logo.svg' border='2px solid black' />

            <div style={{ width: '100%', marginTop: matches_md ? '10%' : '5%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={1} style={{ margin: 0 }}>
                    <Grid item xs={12}>
                        <center>
                            <h2 className='featuresHeading'>Simplified<span className='gradientText'> Pricing </span>for all your needs</h2>
                            <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p><br />
                        </center>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', width: matches_md ? '90%' : '20%' }}>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            options={states}
                            value={selectedState}
                            onChange={handleStateSelect}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => <TextField {...params} label="Select state" />}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={{ marginTop: '1%', width: '20%' }}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: '4%' }}>
                        <div>
                            <img src='/images/Trustpilot-logo.svg' style={{ width: 100 }} />
                        </div>
                        <div>
                            <p style={{ padding: 0, fontWeight: 500, opacity: '80%' }}>Rated Worldwide</p>
                        </div>
                    </Grid>
                </Grid>
            </div >

            {
                selectedState ? <PricingTabs state={selectedState.label} fee={selectedState.fee} /> : <></>
            }

            <Addons />
            <Testimonials />
            <Faq />
            <CTA />
            <Footer />

        </div >
    );
}