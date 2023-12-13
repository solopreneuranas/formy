import * as React from 'react';
import '../App.css';
import { Grid, Button } from "@mui/material";
import Brands from './Brands';
import Avatars from './Avatars';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Hero() {

    var navigate = useNavigate()
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const handleBtnClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <Grid container spacing={1} className='heroSection'>
                {/* {matches_md ? <></> : <div className='blurDiv' style={{ background: '#1105FA' }}></div>} */}

                <Grid item md={6} style={{ zIndex: 2 }}>
                    <p style={{ opacity: '80%' }}>GLOBAL FORMATION</p>
                    <h2 className='heroHeading'>
                        You can have your own <br />
                        <font style={{ color: 'white', background: '#8000ff', borderRadius: 5, padding: '0 1%' }}>Stripe & PayPal</font> account now!
                    </h2>
                    <p className='globalPara' style={{ padding: 0 }}>
                        Ready to access global online services from anywhere? Boosty makes it possible, even in regions they don't operate!
                    </p>
                    <Button onClick={handleBtnClick} variant='contained' className='globalButton' style={{
                        background: 'white',
                        color: 'black',
                        padding: '2% 5%',
                        fontWeight: 500,
                        marginTop: '2%',
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button><br /><br />
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '3%' }}>
                        <Avatars />
                        <img src='/images/Trustpilot-logo.svg' style={{ width: 100 }} />
                    </div>
                    {matches_md ? <></> :
                        <div style={{ marginTop: '5%', width: '80%' }}>
                            <Brands />
                        </div>
                    }
                </Grid>
                {/* {matches_md ? <Grid item md={6} style={{ marginBottom: matches_md ? '7%' : 0 }}>
                    <center><img src='https://startglobal.co/img/banner-1.png' style={{ width: matches_md ? '85%' : '75%' }} /></center>
                </Grid> : <></>
                } */}
                {matches_md ? <></> :
                    <Grid item md={6} style={{ zIndex: 2 }}>
                        <center><img src='https://startglobal.co/img/banner-1.png' style={{ width: '90%' }} /></center>
                    </Grid>
                }
            </Grid>
        </div >
    )
}