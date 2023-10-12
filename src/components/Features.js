import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';


export default function Features() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Why <span style={{ color: '#0069ff' }}>Boosty</span></h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to address this issue by managing the entire process for you. We’ll establish a UK or US company on your behalf and set up a fully verified and approved Business Stripe account.
                    </p>


                    <List className='list'
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton style={{ paddingLeft: 0 }}>
                            <ListItemIcon>
                                <SendIcon fontSize='large' style={{color:'#0069ff'}} />
                            </ListItemIcon>
                            <Typography style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: 500 }}>We accept all major countries</Typography>
                        </ListItemButton>
                        <ListItemButton style={{ paddingLeft: 0 }}>
                            <ListItemIcon>
                                <DraftsIcon fontSize='large' style={{color:'#0069ff'}} />
                            </ListItemIcon>
                            <Typography style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: 500 }}>Fast formation services </Typography>
                        </ListItemButton>
                        <ListItemButton style={{ paddingLeft: 0 }}>
                            <ListItemIcon>
                                <DraftsIcon fontSize='large' style={{color:'#0069ff'}} />
                            </ListItemIcon>
                            <Typography style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: 500 }}>Fast formation services </Typography>
                        </ListItemButton>
                        <ListItemButton onClick={handleClick} style={{ paddingLeft: 0 }}>
                            <ListItemIcon>
                                <InboxIcon fontSize='large' style={{color:'#0069ff'}} />
                            </ListItemIcon>
                            <Typography style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: 500 }}>  Quick documents delivery </Typography>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/section-image-blue.svg' style={{ width: '100%', marginRight: 'auto' }} /></center>
                </Grid>
            </Grid>

        </div>
    )
}