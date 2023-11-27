import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';

export default function PricingTabs() {

    const navigate = useNavigate()

    const businessItems = [
        {
            icon: <DoneIcon />,
            title: '🔍 Name Availability Search'
        },
        {
            icon: <DoneIcon />,
            title: '🏢 Company Formation'
        },
        {
            icon: <DoneIcon />,
            title: '📋 Registered Agent for 365 Days'
        },
        {
            icon: <DoneIcon />,
            title: '📬 Business Mailing Address'
        },
        {
            icon: <DoneIcon />,
            title: '💼 Employer ID Number (EIN)'
        },
        {
            icon: <DoneIcon />,
            title: '📜 Operating Agreement'
        },
        {
            icon: <DoneIcon />,
            title: '🏦 Business Bank Account'
        }
    ]

    const premiumItems = [
        {
            icon: <DoneIcon />,
            title: '✅ Business Package Included'
        },
        {
            icon: <DoneIcon />,
            title: '💳 Business Stripe Account'
        },
        {
            icon: <DoneIcon />,
            title: '💸 Business Wise Account'
        },
        {
            icon: <DoneIcon />,
            title: '🌟 WordPress Website Setup'
        },
        {
            icon: <DoneIcon />,
            title: '🌐 Domain + Business Email'
        },
        {
            icon: <DoneIcon />,
            title: '🛡 Premium Web Hosting'
        },
        {
            icon: <DoneIcon />,
            title: '🎨 Logo Design with Brand Guidelines'
        }
    ]


    return (
        <Grid container spacing={5} className='pricingPackage'>
            <Grid item xs={12}>
                <center>
                    <h2 className='featuresHeading'>Simplified<span className='gradientText'> Pricing </span>for all your needs</h2>
                    <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p><br />
                </center>
            </Grid>
            <Grid item md={6} style={{ width: '100%' }}>
                <Grid container spacing={0} className='business'>
                    <Grid item xs={12} className='tabLeftCol'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2%' }}>
                            <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Business</h3>
                            <img src='/images/us-flag.svg' style={{ width: 30 }} />
                        </div>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$199 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>If you're operating with a low budget.</p>
                        <Button onClick={() => navigate('/pricing')} fullWidth variant='contained' className='globalButton' style={{
                            background: '#0069FF',
                            padding: '3% 4%',
                            margin: '7% 0 5%',
                            fontFamily: 'Inter'
                        }}>Go Business</Button>

                        {
                            businessItems.map((item, i) => {
                                return (

                                    <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                            <span style={{ marginRight: '2%' }}><DoneIcon fontSize='large' /></span>
                                            <span className='pricingContent' style={{ fontSize: '18px', padding: 0, margin: 0 }}>{item.title}</span>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={6} style={{ width: '100%' }}>
                <Grid container spacing={0} className='premium'>
                    <Grid item xs={12} className='tabLeftCol'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2%' }}>
                            <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Premium</h3>
                            <img src='/images/us-flag.svg' style={{ width: 30 }} />
                        </div>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$399 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>Enhanced, fast, and exclusive service.</p>
                        <Button onClick={() => navigate('/pricing')} fullWidth variant='contained' className='globalButton' style={{
                            background: 'white',
                            color: 'black',
                            padding: '3% 4%',
                            margin: '7% 0 5%',
                            fontFamily: 'Inter'
                        }}>Go Premium</Button>

                        {
                            premiumItems.map((item, i) => {
                                return (

                                    <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                            <span style={{ marginRight: '2%' }}><DoneIcon fontSize='large' /></span>
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