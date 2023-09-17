import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import zIndex from '@mui/material/styles/zIndex';


export default function Hero() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <Grid container spacing={2} className='center'>
                        <Grid item>
                            <p>Rated worldwide</p>
                        </Grid>
                        <Grid item>
                            <img src='https://micahguru.com/images/Trustpilot-logo.svg' style={{ width: '90px', margin: '0' }} />
                        </Grid>
                    </Grid>

                    <Grid className='center'>
                        <AvatarGroup max={10} style={{ display: 'flex', justifyContent: 'left' }}>
                            <Avatar alt="Remy Sharp" src="/images/model-1.jpg" />
                            <Avatar alt="Travis Howard" src="/images/model-2.jpg" />
                            <Avatar alt="Remy Sharp" src="/images/model-1.jpg" />
                            <Avatar alt="Travis Howard" src="/images/model-2.jpg" />
                        </AvatarGroup>
                    </Grid>

                    <h2 className='bigHeading'>Start your LLC in US with us and Grow your Business</h2>
                    <p style={{ width: '60%', margin: 'auto' }} className='globalPara'>The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.</p>
                    <Button endIcon={<SendIcon />} variant='contained' style={{
                        // background: '#163300',
                        background: '#008E09',
                        color: 'white',
                        fontWeight: '400',
                        fontSize: '16px',
                        padding: '1.5% 4%',
                        marginTop: '4%',
                        borderRadius: '50px'
                    }}>GET STARTED</Button><br />
                    <p>Start at $149 + State Fees</p>
                </Grid>
            </Grid>

        </div>
    )
}