import * as React from 'react';

import { Grid } from "@mui/material";

export default function Services() {
    
    const features = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce462edfa14ceb_Tax%20Returns.svg',
            title: 'Form U.S. company'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463d66a14ce7_EIN%20or%20ITIN.svg',
            title: 'Obtain EIN or ITIN'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463e56a14cea_US%20Company.svg',
            title: 'Open Stripe/PayPal'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce462db7a14ce8_Payments%201.svg',
            title: 'Open Business Bank'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463e56a14cea_US%20Company.svg',
            title: 'Create Amazon Account'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce46a051a14ce6_Amazon%20Acct..svg',
            title: 'Website Development'
        },
    ]

    return (
        <div className='root'>
            <Grid container spacing={2} className='servicesSection'>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/section-image-blue.svg' style={{ width: '100%', marginRight: 'auto' }} /></center>
                </Grid>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Boosty: <span style={{ color: '#FF6326' }}> Expand Globally, </span> Effortlessly</h2><br />
                    <p className='featuresPara'>
                        Ready to elevate your global business? Boosty is your passport to unlock popular online services, even in regions where they're unavailable. Seamlessly access them today!
                    </p>

                    <Grid container spacing={3}>
                        {features.map((item) => {
                            return (
                                <Grid item md={6}>
                                    <img src={item.icon} style={{ width: 65 }} />
                                    <h3 style={{ marginBottom: '2%', fontWeight: '600' }}>{item.title}</h3>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}

