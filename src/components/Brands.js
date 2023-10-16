import * as React from 'react';

import { Grid} from "@mui/material";

export default function Brands() {
    return (
        <div className='root'>

            <Grid container spacing={5} className='brandsBox'>
                <Grid item>
                    <img src='/images/stripe-logo.png' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='/images/mercury-logo.svg' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='/images/wise-logo.svg' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='/images/payoneer-logo.svg' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='/images/relay-logo.svg' className='logo'/>
                </Grid>
            </Grid>

        </div>
    )
}