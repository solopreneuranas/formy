import * as React from 'react';
import '../App.css';

import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';
import Addons from "./Addons"
import { Grid, Button, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import StateFees from './StateFees';
import CancelIcon from '@mui/icons-material/Cancel';
import PricingTabs from './PricingTabs'

export default function Pricing() {

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


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const pricingModal = () => {

        return (
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box className='modal'>
                        <Grid container spacing={1} style={{ marginBottom: '5%' }}>
                            <Grid item xs={11} style={{ paddingTop: 0, marginBottom: '3%' }}>
                                <h3 className='modalHeading' style={{ fontWeight: '600', fontFamily: 'Inter' }}>
                                    State Fees Calculator
                                </h3>
                            </Grid>
                            <Grid item xs={1} style={{ margin: 0, padding: 0 }}>
                                <CancelIcon onClick={handleClose} fontSize='large' className='cancelIcon' />
                            </Grid>
                        </Grid>
                        <StateFees />
                    </Box>
                </Modal>
            </div>
        );
    }


    return (
        <div>
            <Header bg='white' color='black' logo='boosty-logo.svg' border='2px solid black' />

            <Grid container spacing={5} className='pricingPackage' style={{ marginBottom: '5%' }}>
                <Grid item xs={12} className='pricingHeadingGrid'>
                    <center>
                        <h2 className='featuresHeading'>Simplified<span style={{ color: '#0069FF' }}> Pricing </span>for all your needs</h2>
                        <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p><br />
                    </center>
                </Grid>
                <Grid item md={6} style={{ width: '100%' }}>
                    <Grid container spacing={0} className='business'>
                        <Grid item xs={12} className='tabLeftCol'>
                            <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Business</h3>
                            <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$199 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                            <p className='pricingContent' style={{ marginTop: '2%' }}>If you're operating with a low budget.</p>
                            <Button fullWidth variant='contained' className='globalButton' style={{
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
                            <h3 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '2%' }}>Premium</h3>
                            <h3 style={{ fontWeight: 600, fontSize: '40px' }}>$399 <span style={{ fontWeight: 400, fontSize: '20px' }}>+ State Fees</span></h3>
                            <p className='pricingContent' style={{ marginTop: '2%' }}>Enhanced, fast, and exclusive service.</p>
                            <Button fullWidth variant='contained' className='globalButton' style={{
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

                {pricingModal()}
            </Grid>

            <Grid container spacing={1} className='pricingBottomSection'>
                <Grid item md={8} className='pricingBottomDiv-1'>
                    <h2 className='pricingBottomHeading'>Need the filing fees and times for your state?</h2>
                </Grid>
                <Grid item md={4} className='pricingBottomDiv-2' >
                    <Button onClick={handleOpen} variant='contained' className='globalButton' style={{
                        background: '#0069FF',
                        padding: '2.5% 5%',
                        fontFamily: 'Inter',
                        marginTop: '3%'
                    }}>Check Now</Button>
                </Grid>
            </Grid>


            <Addons />
            <CTA />
            <Footer />

        </div>
    );
}