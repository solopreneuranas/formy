import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";

export default function PricingCompare() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={3} className='pricingTable'>
                <Grid item xs={12}>
                    <center>
                        <h2 className='featuresHeading'>Simplified pricing for all your needs </h2>
                        <p className='featuresPara' style={{marginTop: '1%', marginBottom: '1%'}}>Get upfront, clear pricing for starting and running your business.</p>
                        <img src='images/pricing-table-formy.svg' style={{ width: '70%' }} />
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}