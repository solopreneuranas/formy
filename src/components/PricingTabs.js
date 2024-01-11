import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PricingTabs(props) {

    const theme = useTheme()
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'))
    const matches_md = useMediaQuery(theme.breakpoints.down('md'))

    const navigate = useNavigate()

    const businessItems = [
        {
            icon: <DoneIcon />,
            title: '💵 Includes State Filing Fee'
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
            title: '📑 BOI Report Filing'
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
            title: '✅ All Business Package Features'
        },
        {
            icon: <DoneIcon />,
            title: '🚀 Priority Processing'
        },
        {
            icon: <DoneIcon />,
            title: '🛒 Stripe Setup Assistance / Resale Certificate'
        },
        {
            icon: <DoneIcon />,
            title: '📞 US Premium Phone Number'
        },
        {
            icon: <DoneIcon />,
            title: '🌐 FREE .Com Domain'
        },
        {
            icon: <DoneIcon />,
            title: '📧 Business Professional Email'
        },
        {
            icon: <DoneIcon />,
            title: '🤝 Lifetime Expert Support'
        }
    ]

    const handleBtnClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0);
    }

    const state = props.state
    const fee = props.fee

    return (
        <Grid container spacing={matches_md ? 1 : 3} className='pricingPackage'>

            {
                state ? <></> :

                    <Grid item xs={12}>
                        <h2 className='featuresHeading' style={{ textAlign: matches_md ? 'left' : 'center', padding: matches_md ? '0 2%' : '' }}>Simplified<span className='gradientText'> Pricing </span>for all your needs</h2>
                        <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%', textAlign: matches_md ? 'left' : 'center', padding: matches_md ? '0 2%' : '' }}>Get upfront, clear pricing for starting and running your business.</p><br />
                    </Grid>

            }


            <Grid item xs={12} >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 className='featuresHeading' style={{ fontSize: matches_md ? 25 : 30, textAlign: 'center', marginBottom: matches_md ? '5%' : 0 }}>
                        {state ?
                            <><span className='gradientText'>{state}</span> LLC Formation Plans</> : ''
                        }
                    </h2>
                </div>
            </Grid>


            <Grid item md={6} style={{ width: '100%' }}>
                <Grid container spacing={0} className='business'>
                    <Grid item xs={12} className='tabLeftCol'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2%' }}>
                            <h3 style={{ fontWeight: 500, fontSize: '20px', marginBottom: '2%' }}>Business 🎯</h3>
                            {/* <img src='/images/us-flag.svg' style={{ width: 30 }} /> */}
                        </div>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>${state ? fee + 199 : '199'} <span style={{ fontWeight: 400, fontSize: '20px', opacity: '80%' }}>
                            {state ? 'One Time' : '+ State Fees'}
                        </span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>If you're operating with a low budget.</p>
                        <a href={props.busiLink} target='_blank'>
                            <Button fullWidth variant='contained' className='globalButton' style={{
                                background: 'linear-gradient(to right, blue 30%, #8000ff 70%)',
                                padding: '3% 4%',
                                margin: '7% 0 5%',
                                fontFamily: 'Inter'
                            }}>Go Business</Button>
                        </a>

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
                            <h3 style={{ fontWeight: 500, fontSize: '20px', marginBottom: '2%' }}>Premium 💎</h3>
                            {/* <img src='/images/us-flag.svg' style={{ width: 30 }} /> */}
                        </div>
                        <h3 style={{ fontWeight: 600, fontSize: '40px' }}>${state ? fee + 299 : '299'} <span style={{ fontWeight: 400, fontSize: '20px' }}>
                            {state ? 'One Time' : '+ State Fees'}
                        </span></h3>
                        <p className='pricingContent' style={{ marginTop: '2%' }}>Enhanced, fast, and exclusive service.</p>
                        <a href={props.preLink} target='_blank'>
                            <Button fullWidth variant='contained' className='globalButton' style={{
                                background: 'white',
                                color: 'black',
                                padding: '3% 4%',
                                margin: '7% 0 5%',
                                fontFamily: 'Inter'
                            }}>Go Premium</Button>
                        </a>

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