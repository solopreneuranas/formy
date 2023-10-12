import * as React from 'react';
import '../App.css';
import StateFees from './StateFees';
import PricingTabs from './PricingPackage';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from '@mui/material/Modal';

export default function PricingCompare() {

    function BasicModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div>
                <Button onClick={handleOpen} endIcon={<SendIcon />} variant='contained' className='globalButton' 
                style={{
                    padding: '0.8% 1.7%',
                    background: '#0069ff',
                    marginTop: '3%'
                }}>GET STARTED</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box className='modal'>
                        <Grid container spacing={5}>
                            <Grid item xs={11}>
                                <Typography id="modal-modal-title" variant="h4" component="h2" style={{ fontWeight: '600', fontFamily: 'Montserrat' }}>
                                    State Fees Calculator
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <CancelIcon onClick={handleClose} fontSize='large' className='cancelIcon'/>
                            </Grid>
                        </Grid>
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
                        <h2 className='featuresHeading'>Simplified<span style={{ color: '#0069ff' }}> Pricing </span>for all your needs</h2>
                        <p className='featuresPara' style={{ marginTop: '1%', marginBottom: '1%' }}>Get upfront, clear pricing for starting and running your business.</p>
                        <img className='pricingImg' src='images/pricing-table-formy.svg' style={{ width: '70%' }} /><br />
                        <PricingTabs />
                        <BasicModal />
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}