import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";

export default function Hero() {

    return (
        <div className='root'>

            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <h2 className='bigHeading'>
                        You're Just a step away from having your very own <br />
                        <div class="animated-text">
                            <div class="line">Stripe <span style={{color: 'black'}}>account!</span></div>
                            <div class="line">PayPal <span style={{color: 'black'}}>account!</span></div>
                            <div class="line">Amazon <span style={{color: 'black'}}>account!</span></div>
                            <div class="line">TikTok Shop <span style={{color: 'black'}}>account!</span></div>
                            <div class="line">Payoneer <span style={{color: 'black'}}>account!</span></div>
                        </div>
                    </h2>
                    <center>
                        <p className='globalPara'>
                            The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.
                        </p>
                    </center>
                    <Button variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '1.5% 4%',
                        marginTop: '4%',
                    }}>GET STARTED</Button><br /><br />
                    <p>Start at $149 + State Fees</p>
                </Grid>
            </Grid>
        </div>
    )
}
