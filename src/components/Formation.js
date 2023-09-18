import * as React from 'react';

import { Grid, TextField, Button, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function Formation() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={5} className='formationSection'>
                <Grid item xs={6}>
                    <img src='https://www.doola.com/wp-content/uploads/2023/09/form-your-us-company-from-anywhere-in-the-world-1-1080x706.png.webp' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <h2 className='featuresHeading'>
                        Form your US company
                        from anywhere in the world
                    </h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to address this issue by managing the entire process for you.
                    </p>
                    <Rating name="read-only" value={value} readOnly /><br/><br/>
                    <Button endIcon={<SendIcon />} variant='contained' style={{
                        // background: '#163300',
                        background: 'black',
                        color: 'white',
                        fontWeight: '400',
                        fontSize: '16px',
                        padding: '2% 4%',
                        borderRadius: '50px'
                    }}>GET STARTED</Button>
                </Grid>
            </Grid>

        </div>
    )
}