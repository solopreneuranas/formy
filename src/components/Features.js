import * as React from 'react';

import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Features() {


    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const features = [
        {
            icon: 'https://startglobal.co/img/file-check-02.svg',
            title: 'Simplicity and Speed',
            para: 'Our registration process is efficient and hassle-free, so you can start enjoying the benefits in no time.'
        },
        {
            icon: 'https://startglobal.co/img/users-02.svg',
            title: ' Expert Guidance',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://startglobal.co/img/icon-book.svg',
            title: 'Affordable Solutions',
            para: 'Boosty offers cost-effective packages to suit businesses of all sizes, so you can invest in your success without breaking the bank.'
        },
        {
            icon: 'https://startglobal.co/img/file.svg',
            title: 'Secure and Confidential',
            para: 'Your privacy and security are our top priorities. Boosty ensures your information is handled with the utmost care and confidentiality.'
        }
    ]

    return (
        <div className='root' style={{ background: 'red' }}>

            <Grid container spacing={1} className='featuresSection' style={{ position: 'relative', padding: matches_md ? '10% 5%' : '2% 12% 0' }}>

                <div className='blurDiv'></div>

                <Grid item md={6} className='featuresContent' style={{ zIndex: 2 }}>
                    <h2 className='featuresHeading'>Why Choose <span className='gradientText'>Boosty</span></h2><br />
                    <p className='featuresPara'>
                        Boosty breaks geographic boundaries, empowering business expansion. We facilitate access to vital services by assisting in U.S. company registration, unlocking previously elusive opportunities.
                    </p>

                    <Grid container spacing={1}>
                        {features.map((item) => {
                            return (
                                <Grid item md={6}>
                                    <img src={item.icon} style={{ width: 45 }} />
                                    <h3 style={{ marginBottom: '2%', fontWeight: '600' }}>{item.title}</h3>
                                    <p className='featuresPara'>{item.para}</p>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>
                <Grid item md={6} className='featuresImg' style={{ zIndex: 2 }}>
                    <center><img src='https://startglobal.co/img/llc.png' style={{ width: '80%', marginRight: 'auto' }} /></center>
                </Grid>
            </Grid>

        </div>
    )
}