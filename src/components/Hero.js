import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";

export default function Hero() {

    return (
        <div className='root'>

            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <h2 className='heroHeading'>
                        You can have your own <br />
                        <span style={{ color: '#FF6326', fontFamily: 'Space Grotesk' }}>
                            <font className="animateText">
                                <span className="typewrite" data-period="2000" data-type='["Stripe", "PayPal", "Amazon", "TikTok Shop", "Ebay", "Wise"]'>
                                    <span className="wrap"></span>
                                </span>
                            </font>
                        </span> account now!
                    </h2>
                    <center>
                        <p className='globalPara'>
                        Ready to access global online services from anywhere? Boosty makes it possible, even in regions they don't operate!
                        </p>
                    </center>
                    <Button variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '1.1% 4%',
                        marginTop: '4%',
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button><br /><br />
                    <p>Start at $199 + State Fees</p>
                </Grid>
            </Grid>
        </div>
    )
}