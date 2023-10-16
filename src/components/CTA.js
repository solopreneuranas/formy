import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";


export default function CTA() {
    return (
        <div className='root' style={{ position: 'relative' }}>
            <img src='/images/pattern-3.svg' style={{ position: 'absolute', opacity: '50%', width: '100%', height: '100%', objectFit: 'cover' }} />
            <Grid container spacing={3} className='ctaSection'>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <h2 className='bigHeading' style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '40px' }}>
                        Ready to Boost Your Business Worldwide?
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
                            background: 'white',
                            color: 'black',
                            padding: '0.8% 3%',
                            marginTop: '1%',
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button>
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}