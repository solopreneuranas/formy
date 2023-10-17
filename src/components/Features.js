import * as React from 'react';

import { Grid } from "@mui/material";


export default function Features() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const features = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg',
            title: 'Simplicity and Speed',
            para: 'Our registration process is efficient and hassle-free, so you can start enjoying the benefits in no time.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: ' Expert Guidance',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Affordable Solutions',
            para: 'Boosty offers cost-effective packages to suit businesses of all sizes, so you can invest in your success without breaking the bank.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e540947af636b321_Problem%20Free%201.svg',
            title: 'Secure and Confidential',
            para: 'Your privacy and security are our top priorities. Boosty ensures your information is handled with the utmost care and confidentiality.'
        }
    ]

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Why Choose <span style={{ color: '#FF6326' }}>Boosty</span></h2><br />
                    <p className='featuresPara'>
                        Boosty breaks geographic boundaries, empowering business expansion. We facilitate access to vital services by assisting in U.S. company registration, unlocking previously elusive opportunities.
                    </p>

                    <Grid container spacing={3}>
                        {features.map((item) => {
                            return (
                                <Grid item md={6}>
                                    <img src={item.icon} style={{ width: 65 }} />
                                    <h3 style={{ marginBottom: '2%', fontWeight: '600' }}>{item.title}</h3>
                                    <p className='featuresPara'>{item.para}</p>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/section-image-2.svg' style={{ width: '100%', marginRight: 'auto', borderRadius: '0 200px 0 0' }} /></center>
                </Grid>
            </Grid>

        </div>
    )
}