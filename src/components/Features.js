import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function Features() {
    const [value, setValue] = React.useState(5);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='root'>

            <Grid container spacing={5} className='featuresSection'>
                <Grid item xs={6}>
                    <h2 className='featuresHeading'>Why Formy</h2><br />
                    <p className='featuresPara'>
                        We understand the challenges you face in accepting card payments at your store, particularly if you are located in a country not supported by Stripe. Our solution is designed to address this issue by managing the entire process for you. We’ll establish a UK or US company on your behalf and set up a fully verified and approved Business Stripe account, no matter where you are in the world. All of this at a highly competitive price!
                    </p>


                    <List className='list'
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton style={{paddingLeft: 0}}>
                            <ListItemIcon>
                                <SendIcon fontSize='small' className='icon'/>
                            </ListItemIcon>
                            <ListItemText primary="We accept major countries"/>
                        </ListItemButton>
                        <ListItemButton style={{paddingLeft: 0}}>
                            <ListItemIcon>
                                <DraftsIcon fontSize='small' className='icon'/>
                            </ListItemIcon>
                            <ListItemText primary="Fast formation services" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClick} style={{paddingLeft: 0}}>
                            <ListItemIcon>
                                <InboxIcon fontSize='small' className='icon'/>
                            </ListItemIcon>
                            <ListItemText primary="Quick documents delivery" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder fontSize='small' className='icon'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <img src='images/creative-formy-services.svg' style={{ width: '110%' }} />
                </Grid>
            </Grid>

        </div>
    )
}