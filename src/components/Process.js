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
            icon: 'https://d33wubrfki0l68.cloudfront.net/1c7609134b5d1e1060fa3b4fd383cb66d0d47486/3ca21/img/llc.svg',
            name: 'US LLC Formation',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'https://d33wubrfki0l68.cloudfront.net/d3550384d9e503abbd3155ccab18267c77acbdfe/fd0d2/img/bank.svg',
            name: 'Obtaining EIN, ITIN',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'https://d33wubrfki0l68.cloudfront.net/6e021e3210ea81c7a4a5be95d4c0d788801a18b6/d1cf5/img/payment.svg',
            name: 'Bank Account Setup',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'https://d33wubrfki0l68.cloudfront.net/957e0eddcebbe86f49da8e9d227cb5c2d3f16397/1e1fa/img/tax.svg',
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

                    <img src={item.icon} style={{ width: 50 }} />
                    <h3 style={{ margin: '10% 0 0', fontWeight: '600', }}>{item.name}</h3>
                    <p style={{ opacity: '80%', marginTop: '3%' }}>
                        {item.para}
                    </p>

                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '0' : '0 3% 3%', overflowX: 'hidden'  }}>

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