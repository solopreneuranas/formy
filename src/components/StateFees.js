import * as React from 'react';
import '../App.css';
import Faq from './Faq';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Autocomplete from '@mui/material/Autocomplete';

export default function StateFees() {
    const [value, setValue] = React.useState(5);

    function DropDown() {
        return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={states}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search state" />}
            />
        );
    }

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const states = [
        { label: 'Alabama', fee: 4 },
        { label: 'Alaska', fee: 0 },
        { label: 'Arizona', fee: 5.60 },
        { label: 'Arkansas', fee: 6.50 },
        { label: 'California', fee: 7.25 },
        { label: 'Colorado', fee: 2.90 },
        { label: 'Connecticut', fee: 6.35 },
        { label: 'Delaware', fee: 0 },
        { label: 'District of Columbia', fee: 6 },
        { label: 'Florida', fee: 6 },
        { label: 'Georgia', fee: 4 },
        { label: 'Hawaii', fee: 4 },
        { label: 'Idaho', fee: 6 },
        { label: 'Illinois', fee: 6.25 },
        { label: 'Indiana', fee: 7 },
        { label: 'Iowa', fee: 6 },
        { label: 'Kansas', fee: 6.50 },
        { label: 'Kentucky', fee: 6 },
        { label: 'Louisiana', fee: 4.45 },
        { label: 'Maine', fee: 5.50 },
        { label: 'Maryland', fee: 6 },
        { label: 'Massachusetts', fee: 6.25 },
        { label: 'Michigan', fee: 6 },
        { label: 'Minnesota', fee: 6.88 },
        { label: 'Mississippi', fee: 7 },
        { label: 'Missouri', fee: 4.23 },
        { label: 'Montana', fee: 0 },
        { label: 'Nebraska', fee: 5.50 },
        { label: 'Nevada', fee: 6.85 },
        { label: 'New Hampshire', fee: 0 },
        { label: 'New Jersey', fee: 0 },
        { label: 'New Mexico', fee: 5.13 },
        { label: 'New York', fee: 4 },
        { label: 'North Carolina', fee: 5.75 },
        { label: 'North Dakota', fee: 5 },
        { label: 'Ohio', fee: 5.75 },
        { label: 'Oklahoma', fee: 4.50 },
        { label: 'Oregon', fee: 0 },
        { label: 'Pennsylvania', fee: 6 },
        { label: 'Rhode Island', fee: 7 },
        { label: 'South Carolina', fee: 6 },
        { label: 'South Dakota', fee: 4.50 },
        { label: 'Tennessee', fee: 7 },
        { label: 'Texas', fee: 6.25 },
        { label: 'Utah', fee: 6.50 },
        { label: 'Vermont', fee: 6 },
        { label: 'Virginia', fee: 5.30 },
        { label: 'Washington', fee: 6.50 },
        { label: 'West Virginia', fee: 6 },
        { label: 'Wisconsin', fee: 5 },
        { label: 'Wyoming', fee: 4.75 }
    ];


    return (
        <div >

            <Grid container spacing={5} className='pricingTable' style={{marginTop: '0'}}>
                <Grid item xs={12}>
                        <DropDown />
                </Grid>
            </Grid>
        </div>
    )
}