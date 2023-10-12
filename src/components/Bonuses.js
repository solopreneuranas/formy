import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function Bonuses() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='https://privatily.com/wp-content/uploads/2023/08/img-Bonuses-3-3-min.png' style={{ width: '90%', marginRight: 'auto' }} /></center>
                </Grid>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'><span style={{ color: '#0069ff' }}>Bonuses</span> for Premium <br />clients only</h2><br />
                    <p className='featuresPara'>
                        As a Premium client, we'll assist you in setting up all the financial services available to you. You'll have a dedicated account manager and our exceptional support team, ready to assist you via chat, email, and phone.
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}