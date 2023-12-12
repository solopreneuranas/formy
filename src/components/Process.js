import React, { useRef } from 'react';

import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Process() {

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const process = [
        {
            icon: 'company',
            name: 'US LLC Formation',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'approve-file',
            name: 'Obtaining EIN, ITIN',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'bank',
            name: 'Bank Account Setup',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'money',
            name: 'U.S. Tax Return & Filings',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        }
    ]

    const servicesSlider = () => {
        return process.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        padding: matches_md ? '5% 2%' : '8% 6%',
                        height: matches_md ? 200 : 280,
                        margin: matches_md ? '0 4%' : '1% 4%',
                        textAlign:  matches_md ? 'left' : 'center'
                    }}
                >

                    <img src={`/images/${item.icon}.svg`} style={{ width: 50 }} />
                    <h3 style={{ margin: '10% 0 0', fontWeight: '600', }}>{item.name}</h3>
                    <p style={{ opacity: '80%', marginTop: '3%' }}>
                        {item.para}
                    </p>

                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '0' : '2% 3% 0', overflowX: 'hidden'  }}>

            <Grid container spacing={1} className='processSection'  >
                <Grid item xs={12}>
                    <h2 className='featuresHeading' style={{ textAlign: matches_md ? 'left' : 'center', padding: matches_md ? '0 5%' : 0 }}>How all it <span className='gradientText'>works</span></h2>

                    <div style={{
                        position: 'relative', padding: matches_md ? '2% 0' : 0, marginTop: '2%', display: 'flex', flexDirection: matches_md ? 'column' : 'row',
                    }}>
                        {servicesSlider()}
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}