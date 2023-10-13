import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';


export default function Hero() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <h2 className='bigHeading'>
                       You're Just a step away from having your very own <span style={{color: '#FF6326'}}>PayPal</span> account!
                    </h2>
                    <center><p className='globalPara'>
                        The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.
                    </p>
                    </center>
                    <Button endIcon={<SendIcon />} variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '1.5% 4%',
                        marginTop: '4%',
                    }}>GET STARTED</Button><br /><br />
                    <p>Start at $149 + State Fees</p>
                </Grid>
            </Grid>

        </div>
    )
}