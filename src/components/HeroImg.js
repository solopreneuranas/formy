import * as React from 'react';
import '../App.css';

import { Grid } from "@mui/material";


export default function HeroImg() {
    return (
        <div className='root'>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img src='images/formy-banner-img.svg' style={{width: '100%'}} alt='Formy Banner'/>                    
                </Grid>
            </Grid>

        </div>
    )
}