import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';

export default function StateFees() {
    const [selectedState, setSelectedState] = useState(null);

    const handleStateSelect = (event, newValue) => {
        setSelectedState(newValue);
    };

    const states = [
        { label: 'Alabama', fee: 236 },
        { label: 'Alaska', fee: 250 },
        { label: 'Arizona', fee: 85 },
        { label: 'Arkansas', fee: 45 },
        { label: 'California', fee: 70 },
        { label: 'Colorado', fee: 50 },
        { label: 'Connecticut', fee: 120 },
        { label: 'Delaware', fee: 140 },
        { label: 'District of Columbia', fee: 99 },
        { label: 'Florida', fee: 125 },
        { label: 'Georgia', fee: 100 },
        { label: 'Hawaii', fee: 51 },
        { label: 'Idaho', fee: 101 },
        { label: 'Illinois', fee: 153 },
        { label: 'Indiana', fee: 97 },
        { label: 'Iowa', fee: 50 },
        { label: 'Kansas', fee: 166 },
        { label: 'Kentucky', fee: 40 },
        { label: 'Louisiana', fee: 105 },
        { label: 'Maine', fee: 175 },
        { label: 'Maryland', fee: 155 },
        { label: 'Massachusetts', fee: 520 },
        { label: 'Michigan', fee: 50 },
        { label: 'Minnesota', fee: 155 },
        { label: 'Mississippi', fee: 53 },
        { label: 'Missouri', fee: 50 },
        { label: 'Montana', fee: 35 },
        { label: 'Nebraska', fee: 102 },
        { label: 'Nevada', fee: 425 },
        { label: 'New Hampshire', fee: 102 },
        { label: 'New Jersey', fee: 129 },
        { label: 'New Mexico', fee: 50 },
        { label: 'New York', fee: 205 },
        { label: 'North Carolina', fee: 128 },
        { label: 'North Dakota', fee: 135 },
        { label: 'Ohio', fee: 99 },
        { label: 'Oklahoma', fee: 104 },
        { label: 'Oregon', fee: 100 },
        { label: 'Pennsylvania', fee: 125 },
        { label: 'Rhode Island', fee: 156 },
        { label: 'South Carolina', fee: 125 },
        { label: 'South Dakota', fee: 150 },
        { label: 'Tennessee', fee: 307 },
        { label: 'Texas', fee: 300 },
        { label: 'Utah', fee: 56 },
        { label: 'Vermont', fee: 125 },
        { label: 'Virginia', fee: 100 },
        { label: 'Washington', fee: 200 },
        { label: 'West Virginia', fee: 130 },
        { label: 'Wisconsin', fee: 130 },
        { label: 'Wyoming', fee: 102 }
    ]

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={5} className='leftGridModal' >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={states}
                        value={selectedState}
                        onChange={handleStateSelect}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => <TextField {...params} label="Search state" />}
                    />
                    <p className='modalPara'>
                        Boosty collects the required fees for the formation and creation of an LLC during the sign-up process and subsequently
                        transfers them to the respective state or federal district. To find out about the specific local filing fees applicable to your chosen state,
                        please select the state from the drop-down menu above.
                    </p>
                </Grid>

                <Grid item md={7} className='rightGridModal'>
                    <Typography variant="h6" style={{ fontWeight: '600', fontFamily: 'Inter', fontSize: '23px' }}>
                        LLC Filing Fee:
                    </Typography><br />
                    <Typography variant="h6" style={{ fontWeight: '500', fontFamily: 'Inter' }}>
                        State Fee:
                    </Typography>
                    <Typography className='mobilePrice' variant="body1" style={{ fontSize: '35px', fontWeight: '700', fontFamily: 'Inter' }}>
                        {selectedState ? <span>{`$${(selectedState.fee)}`}</span> : <></>}
                    </Typography><br />
                    <Typography variant="h6" style={{ fontWeight: '500', fontFamily: 'Inter' }}>
                        {selectedState ? <span>{selectedState.label} </span> : <></>}  LLC Formation Plans:</Typography><br />
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <h3 style={{fontWeight: 600}}>Business</h3>
                            <Typography className='mobilePrice' variant="body1" style={{ fontSize: '35px', fontWeight: '700', fontFamily: 'Inter' }}>
                                {selectedState ? <span>{`$${(selectedState.fee + 199)}`}</span> : <></>}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <h3 style={{fontWeight: 600}}>Premium</h3>
                            <Typography className='mobilePrice' variant="body1" style={{ fontSize: '35px', fontWeight: '700', fontFamily: 'Inter' }}>
                                {selectedState ? <span>{`$${(selectedState.fee + 299)}`}</span> : <></>}
                            </Typography>
                        </Grid>
                    </Grid>


                    <Button fullWidth variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '2.5% 4%',
                        marginTop: '5%',
                        fontFamily: 'Inter',
                        marginBottom: '3%'
                    }}>GET STARTED</Button>
                    <p style={{ textAlign: 'center', opacity: '70%' }}>Start at $199 + State Fee</p>
                </Grid>

            </Grid>




            {/* {selectedState && (
                <div style={{ marginTop: '4%' }}>
                    <Typography variant="h6" style={{ fontWeight: '500', fontFamily: 'Inter' }}>{selectedState.label} State Fee:</Typography>
                    <Typography className='mobilePrice' variant="body1" style={{ fontSize: '40px', fontWeight: '700', fontFamily: 'Inter' }}>{`$${(selectedState.fee).toFixed(2)}`}</Typography><br />
                    <Typography variant="h6" style={{ fontWeight: '500', fontFamily: 'Inter' }}>{selectedState.label} LLC Formation Plan:</Typography>
                    <Typography className='mobilePrice' variant="body1" style={{ fontSize: '40px', fontWeight: '700', fontFamily: 'Inter' }}>{`$${(selectedState.fee + 149).toFixed(2)}`}</Typography><br />

                    <Button variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '1.7% 4%',
                        marginTop: '2%',
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button>

                </div>
            )} */}

        </div>
    );
}