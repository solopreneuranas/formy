import * as React from 'react';
import '../App.css';
import { Grid, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function TopBar(props) {

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>

            <Grid container spacing={1} style={{ padding: matches_md ? '2% 3%' : '0.5% 3%', background: props.background }}>

                <Grid item xs={7} style={{ zIndex: 2, display: 'flex', justifyContent: matches_md ? 'left' : 'right', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 500, color: props.color, fontSize: matches_md ? 14 : 18 }}>
                        Have questions about Formation, Coupon code or Taxes?
                    </h3>
                </Grid>

                <Grid item xs={5} style={{ zIndex: 2, display: 'flex', justifyContent: matches_md ? 'right' : 'left', alignItems: 'center' }}>
                    <Button variant='contained' className='globalButton' style={{
                        background: '#0069FF',
                        color: 'white',
                        padding: '0.5% 2%',
                        fontWeight: 500,
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button>
                </Grid>

            </Grid>


        </div >
    )
}