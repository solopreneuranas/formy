import * as React from 'react';

import { Grid, TextField, Button, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function Mission() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={5} className='formationSection'>
                <Grid item md={6}>
                    <h2 className='featuresHeading'>
                        Our Mission at <span style={{ color: '#FF6326' }}>Boosty</span>
                    </h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to address this issue by managing the entire process for you.
                    </p>
                    <Rating name="read-only" value={value} readOnly /><br /><br />
                    <Button endIcon={<SendIcon />} variant='contained' className='globalButton'
                        style={{
                            padding: '2% 5%',
                            background: '#FF6326'
                        }}>GET STARTED</Button>
                </Grid>
                <Grid item md={6}>
                    <img src='/images/section-image-blue-2.svg' style={{ width: '100%' }} />
                </Grid>
            </Grid>

        </div>
    )
}