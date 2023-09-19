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

import Modal from '@mui/material/Modal';

export default function PricingCompare() {

    function BasicModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div>
                <Button onClick={handleOpen} endIcon={<SendIcon />} variant='contained' style={{
                    // background: '#163300',
                    background: 'black',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: '16px',
                    padding: '1% 2%',
                    marginTop: '2%',
                    borderRadius: '50px'
                }}>GET STARTED</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='modal'>
                        <Typography id="modal-modal-title" variant="h5" component="h2" style={{fontWeight: '600'}}>
                           State Fees Calculator
                        </Typography>
                        <StateFees />
                    </Box>
                </Modal>
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
                        <BasicModal />
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}