import * as React from 'react';
import '../App.css';
import { Grid, Button } from "@mui/material";
import Brands from './Brands';
import Avatars from './Avatars';

export default function Worldwide() {

    return (
        <div>

            <Grid container spacing={4} className='worldwideSection'>

                <Grid item md={6} style={{ display: 'flex', justifyContent: 'right' }}>
                    <img src='https://privatily.net/wp-content/uploads/2023/06/SL-070722-51460-22-min-2048x1170.jpg' style={{ width: '55%', borderRadius: 10 }} />
                </Grid>

                <Grid item md={6}>
                    <p style={{ opacity: '80%' }}>GLOBAL FORMATION</p>
                    <h2 className='heroHeading' style={{ fontSize: 45 }}>
                        Broaden Your <font style={{ color: '#0069FF', background: '#b3d2ff', borderRadius: 5, padding: '0 1%' }}>Business</font> <br />Boundaries
                    </h2>
                    <p className='globalPara' style={{ width: '70%' }}>
                        Wherever you are, Privatily helps establish your business in the US, UK, and Canada. We help entrepreneurs navigate international company formation, transforming distance into opportunity.
                    </p>

                </Grid>

            </Grid>


        </div >
    )
}