import * as React from 'react';
import '../App.css';
import StateFees from './StateFees';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function PricingCompare() {


    function PricingDialog() {
        const [open, setOpen] = React.useState(false);
        const [fullWidth, setFullWidth] = React.useState(true);
        const [maxWidth, setMaxWidth] = React.useState('sm');
        const [fee, setFee] = useState('')

        const handleFee = () =>{
            setFee('Done')
        }
 
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const handleMaxWidthChange = (event) => {
            setMaxWidth(
                // @ts-expect-error autofill of arbitrary value is not handled.
                event.target.value,
            );
        };

        const handleFullWidthChange = (event) => {
            setFullWidth(event.target.checked);
        };

        return (
            <React.Fragment>
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
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle style={{ color: 'black', fontWeight: '600' }}>State Fees Calculator</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <StateFees />
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleFee}>Calculate</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
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