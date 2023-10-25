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
                        <span className="mobileText">
                            <font style={{ color: '#FF6326' }}>Stripe</font> account now
                        </span>

                        <span className="DesktopText">
                            <span style={{ color: '#FF6326' }}>
                                <font class="typewrite" data-period="2000"
                                    data-type='["Stripe", "PayPal", "Amazon", "TikTok Shop", "Ebay", "Wise"]'><span
                                        class="wrap"></span>
                                </font>
                            </span> account now!
                        </span>
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