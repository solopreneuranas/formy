import * as React from 'react';

import { Grid} from "@mui/material";

export default function Support() {

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='https://privatily.com/wp-content/uploads/2023/08/img-Bonuses-3-3-min.png' style={{ width: '90%', marginRight: 'auto' }} /></center>
                </Grid>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Dedicated <span style={{ color: '#FF6326' }}>Support,</span> Beyond Compare</h2><br />
                    <p className='featuresPara'>
                        Boosty is your unparalleled platform for exceptional rewards. We stand head and shoulders above the competition, offering lavish discounts, exclusive promotions, and dedicated support. Join us today and elevate your experience.
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}