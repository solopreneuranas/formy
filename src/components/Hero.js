import * as React from 'react';
import { Grid, Button } from "@mui/material";
import '../App.css';

export default function Hero() {
    return (
        <div className='root'>
            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <h2 className='heroHeading'>
                        You can have your own <br />
                        <span className="mobileText" style={{ color: '#FF6326' }}>Stripe</span> account now
                        <span style={{ color: '#FF6326' }}>
                            <span className="typewrite" data-period="2000"
                                data-type='["Stripe", "PayPal", "Amazon", "TikTok Shop", "Ebay", "Wise"]'>
                                <span className="wrap"></span>
                            </span>
                        </span> account now!
                    </h2>
                    <p className='globalPara'>
                        Ready to access global online services from anywhere? Boosty makes it possible, even in regions they don't operate!
                    </p>
                    <center>
                        <Button variant='contained' className='globalButton' style={{
                            background: '#FF6326',
                            padding: '1.1% 4%',
                            marginTop: '4%',
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button><br /><br />
                    </center>
                    <p>Start at $199 + State Fees</p>
                </Grid>
            </Grid>
        </div>
    )
}



// className="DesktopText"