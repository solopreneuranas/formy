import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";


export default function CTA() {
    return (
        <div style={{ position: 'relative', padding: '3%' }}>
            <Grid container spacing={3} className='ctaSection'>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <h2 className='bigHeading' style={{ textAlign: 'center', margin: 0, fontSize: '40px' }}>
                        Ready to <font className='gradientText'>Boost Your Business </font>🚀 Worldwide?
                    </h2>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center><p className='ctaPara'>
                        Simplify global expansion. Register a U.S.company, access major online services with Boosty, and elevate your business to new heights.
                    </p>
                    </center>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center>
                        <Button variant='contained' className='globalButton' style={{
                            background: '#0069ff',
                            color: 'white',
                            borderRadius: 30,
                            padding: '1% 3%',
                            marginTop: '1%',
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button>
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}