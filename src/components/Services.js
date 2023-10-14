import * as React from 'react';

import { Grid } from "@mui/material";

export default function Features() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const features = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce462edfa14ceb_Tax%20Returns.svg',
            title: 'File U.S Tax Returns'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463d66a14ce7_EIN%20or%20ITIN.svg',
            title: 'Obtain EIN or ITIN'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463e56a14cea_US%20Company.svg',
            title: 'Form U.S. company'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce462db7a14ce8_Payments%201.svg',
            title: 'Open Stripe/PayPal'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce463e56a14cea_US%20Company.svg',
            title: 'Open Business Bank'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7de2862ce46a051a14ce6_Amazon%20Acct..svg',
            title: 'Create Amazon Account'
        },
    ]

    return (
        <div className='root'>
            <Grid container spacing={2} className='servicesSection'>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/section-image-blue.svg' style={{ width: '100%', marginRight: 'auto' }} /></center>
                </Grid>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>We power your core <span style={{ color: '#FF6326' }}>Business</span> needs</h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to for you.
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

