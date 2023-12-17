import * as React from 'react';

import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Services() {

    const theme = useTheme()
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'))
    const matches_md = useMediaQuery(theme.breakpoints.down('md'))

    const features = [
        {
            icon: 'company',
            title: 'Form U.S. company',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
        {
            icon: 'approve-file',
            title: 'Obtain EIN or ITIN',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
        {
            icon: 'money',
            title: 'Open Stripe/PayPal',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
        {
            icon: 'bank',
            title: 'Open Business Bank',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
        {
            icon: 'amazon',
            title: 'Create Amazon Account',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
        {
            icon: 'website',
            title: 'Website Development',
            para: 'Our team of experts is here to guide you through the entire process.'
        },
    ]

    return (
        <div style={{ padding: matches_md ? '3% 0 0' : '3% 0 2%' }}>

            <Grid container spacing={1} className='featuresSection'>

                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/boosty-web-creative-3.svg' style={{ width: '80%', marginRight: 'auto' }} /></center>
                </Grid>

                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Boosty: <span className='gradientText'> Expand Globally, </span> Effortlessly</h2><br />
                    <p className='featuresPara'>
                        Boosty breaks geographic boundaries, empowering business expansion. We facilitate access to vital services by assisting in U.S.
                    </p>

                    <Grid container spacing={3}>
                        {features.map((item) => {
                            return (
                                <Grid item md={6}>
                                    <img src={`/images/${item.icon}.svg`} style={{ width: 50 }} />
                                    <h3 style={{ marginBottom: '2%', fontWeight: '600' }}>{item.title}</h3>
                                    {/* <p className='featuresPara'>{item.para}</p> */}
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}

