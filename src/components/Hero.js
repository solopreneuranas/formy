import * as React from 'react';
import '../App.css';
import { Grid, Button } from "@mui/material";
import Brands from './Brands';
import Avatars from './Avatars';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Hero() {

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>

            <Grid container spacing={1} className='heroSection'>

                {/* {matches_md ? <Grid item md={6} style={{ marginBottom: matches_md ? '7%' : 0 }}>
                    <center><img src='/images/primary-hero-image-blue.svg' style={{ width: matches_md ? '85%' : '75%' }} /></center>
                </Grid> : <></>
                } */}

                <Grid item md={6}>
                    <p style={{ opacity: '80%' }}>GLOBAL FORMATION</p>
                    <h2 className='heroHeading'>
                        You can have your own <br /><font style={{ color: '#0069FF', background: '#b3d2ff', borderRadius: 5, padding: '0 1%' }}>Stripe & PayPal</font> account now!
                    </h2>
                    <p className='globalPara' style={{ padding: 0 }}>
                        Ready to access global online services from anywhere? Boosty makes it possible, even in regions they don't operate!
                    </p>
                    <Button variant='contained' className='globalButton' style={{
                        background: '#1105fa',
                        color: 'white',
                        padding: '2% 5%',
                        fontWeight: 500,
                        marginTop: '2%',
                        borderRadius: 30,
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button><br />

                    <br />

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '3%' }}>

                        <Avatars />

                        <img src='https://micahguru.com/images/Trustpilot-logo.svg' style={{ width: 100 }} />
                    </div>

                    <div style={{ marginTop: '5%', width: '80%' }}>
                        <Brands />
                    </div>





                </Grid>

                {/* {matches_md ? <></> : <Grid item md={6}>
                    <center><img src='/images/primary-hero-image-blue.svg' style={{ width: '75%' }} /></center>
                </Grid>
                } */}
            </Grid>


        </div >
    )
}