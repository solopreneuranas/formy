import * as React from 'react';
import '../App.css';
import StateFees from './StateFees';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PricingCompare() {


    function PricingDialog() {
        const [open, setOpen] = React.useState(false);
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button onClick={handleClickOpen} endIcon={<SendIcon />} variant='contained' style={{
                    // background: '#163300',
                    background: 'black',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: '16px',
                    padding: '1% 2%',
                    marginTop: '2%',
                    borderRadius: '50px'
                }}>GET STARTED</Button>
                <Dialog className='dialogSection'
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle style={{color: 'black', fontWeight: '600'}} id="responsive-dialog-title">
                        {"State Fees Calculator"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <StateFees />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }


    return (
        <div className='root'>

            <Grid container spacing={3} className='pricingTable'>
                <Grid item xs={12}>
                    <center>
                        <h2 className='featuresHeading'>Simplified pricing for all your needs </h2>
                        <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p>
                        <img src='images/pricing-table-formy.svg' style={{ width: '70%' }} /><br />
                        <PricingDialog />
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}