import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function CTA() {
    return (
        <div className='root' style={{ position: 'relative' }}>
            <img src='/images/pattern-3.svg' style={{ position: 'absolute', opacity: '50%', width: '100%', height: '100%', objectFit: 'cover' }} />
            <Grid container spacing={3} className='ctaSection'>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <h2 className='bigHeading' style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '40px' }}>
                        Ready to start your dream business?
                    </h2>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center><p className='globalPara' style={{ margin: 'auto', width: '50%', padding: 0, fontWeight: 400 }}>
                        The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.
                    </p>
                    </center>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center>
                        <Button variant='contained' className='globalButton' style={{
                            background: 'white',
                            color: 'black',
                            padding: '1% 3%',
                            marginTop: '1%',
                        }}>GET STARTED</Button>
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}