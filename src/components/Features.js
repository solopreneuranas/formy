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

    const features = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg',
            title: 'Track Record',
            para: 'We will file the paperwork for your company and file your EIN number on your behalf.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: 'Top-Notch Communication',
            para: 'We will file the paperwork for your company and file your EIN number on your behalf.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Support virtually everywhere',
            para: 'We will file the paperwork for your company and file your EIN number on your behalf.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e540947af636b321_Problem%20Free%201.svg',
            title: 'Problem-Free Guarantee',
            para: 'We will file the paperwork for your company and file your EIN number on your behalf.'
        }
    ]

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item md={6} className='featuresContent'>
                    <h2 className='featuresHeading'>Why <span style={{ color: '#FF6326' }}>Boosty</span></h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to for you.
                    </p>

                    <Grid container spacing={3}>
                        {features.map((item) => {
                            return (
                                <Grid item md={6}>
                                    <img src={item.icon} style={{width: 65}}/>
                                    <h3 style={{marginBottom: '2%', fontWeight: '600'}}>{item.title}</h3>
                                    <p className='featuresPara'>{item.para}</p>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Grid>
                <Grid item md={6} className='featuresImg'>
                    <center><img src='/images/section-image-blue-2.svg' style={{ width: '100%', marginRight: 'auto', borderRadius: '0 200px 0 0' }} /></center>
                </Grid>
            </Grid>

        </div>
    )
}



{/* <List className='list'
component="nav"
aria-labelledby="nested-list-subheader">
<ListItemButton style={{ paddingLeft: 0 }}>
    <ListItemIcon>
        <SendIcon fontSize='large' style={{color:'#FF6326'}} />
    </ListItemIcon>
    <Typography style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: 500 }}>We accept all major countries</Typography>
</ListItemButton>
<ListItemButton style={{ paddingLeft: 0 }}>
    <ListItemIcon>
        <DraftsIcon fontSize='large' style={{color:'#FF6326'}} />
    </ListItemIcon>
    <Typography style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: 500 }}>Fast formation services </Typography>
</ListItemButton>
<ListItemButton style={{ paddingLeft: 0 }}>
    <ListItemIcon>
        <DraftsIcon fontSize='large' style={{color:'#FF6326'}} />
    </ListItemIcon>
    <Typography style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: 500 }}>Fast formation services </Typography>
</ListItemButton>
<ListItemButton onClick={handleClick} style={{ paddingLeft: 0 }}>
    <ListItemIcon>
        <InboxIcon fontSize='large' style={{color:'#FF6326'}} />
    </ListItemIcon>
    <Typography style={{ fontSize: '18px', fontFamily: 'Inter', fontWeight: 500 }}>  Quick documents delivery </Typography>
</ListItemButton>
</List> */}