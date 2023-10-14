import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export default function PricingTabs() {

    const business = {
        height: '650px',
        margin: '0',
        padding: '6%',
        border: '1px solid gainsboro',
        borderRadius: '10px'
    }

    const premium = {
        height: '650px',
        margin: '0',
        padding: '6%',
        background: '#FF6326',
        color: 'white',
        borderRadius: '10px'
    }


    const businessItems = [
        {
            icon: <DoneIcon />,
            title: 'Company Formation'
        },
        {
            icon: <DoneIcon />,
            title: 'Registered Agent for 365 Days'
        },
        {
            icon: <DoneIcon />,
            title: 'Business Mailing Address'
        },
        {
            icon: <DoneIcon />,
            title: 'Employer ID Number (EIN)'
        },
        {
            icon: <DoneIcon />,
            title: 'Operating Agreement'
        },
        {
            icon: <DoneIcon />,
            title: 'Business Bank Account (Payoneer)'
        },
        {
            icon: <DoneIcon />,
            title: 'Business Resolution Template'
        }
    ]

    const premiumItems = [
        {
            icon: <DoneIcon />,
            title: 'Business Package Included'
        },
        {
            icon: <DoneIcon />,
            title: 'Stripe Account Setup'
        },
        {
            icon: <DoneIcon />,
            title: 'WordPress Website Setup'
        },
        {
            icon: <DoneIcon />,
            title: 'Domain, Business Email, Premium Hosting'
        },
        {
            icon: <DoneIcon />,
            title: ' Logo Design with Brand Guidelines'
        },
        {
            icon: <DoneIcon />,
            title: 'Business Bank Account (Payoneer)'
        }
    ]


    return (
        <Grid container spacing={5} className='pricingPackage'>
            <Grid item xs={12}>
                <center>
                    <h2 className='featuresHeading'>Simplified<span style={{ color: '#FF6326' }}> Pricing </span>for all your needs</h2>
                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p><br />
                </center>
            </Grid>
            <Grid item md={6} style={{width: '100%'}}>
                <Grid container spacing={0} className='business'>
                    <Grid item xs={12} className='tabLeftCol'>
                        <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Business</h3>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$199 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>If you're operating with a low budget.</p>
                        <Button fullWidth variant='contained' className='globalButton' style={{
                            background: '#FF6326',
                            padding: '1.5% 4%',
                            margin: '7% 0 5%'
                        }}>Go Business</Button>

                        {
                            businessItems.map((item, i) => {
                                return (

                                    <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                            <span style={{marginRight: '2%'}}><DoneIcon fontSize='large' /></span>
                                            <span className='pricingContent' style={{ fontSize: '18px', padding: 0, margin: 0 }}>{item.title}</span>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={6} style={{width: '100%'}}>
                <Grid container spacing={0} className='premium'>
                    <Grid item xs={12} className='tabLeftCol'>
                        <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Premium</h3>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$299 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>Enhanced, fast, and exclusive service.</p>
                        <Button fullWidth variant='contained' className='globalButton' style={{
                            background: 'white',
                            color: 'black',
                            padding: '1.5% 4%',
                            margin: '7% 0 5%'
                        }}>Go Premium</Button>

                        {
                            premiumItems.map((item, i) => {
                                return (

                                    <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                            <span style={{marginRight: '2%'}}><DoneIcon fontSize='large' /></span>
                                            <span className='pricingContent' style={{ fontSize: '18px', padding: 0, margin: 0 }}>{item.title}</span>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}