import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Services() {
    const [open, setOpen] = React.useState(false);

    const services = [
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
            name: 'U.S. Tax Filings',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        {
            icon: 'https://d33wubrfki0l68.cloudfront.net/6e021e3210ea81c7a4a5be95d4c0d788801a18b6/d1cf5/img/payment.svg',
            name: 'Registered Agent',
            para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        },
        // {
        //     icon: 'https://d33wubrfki0l68.cloudfront.net/957e0eddcebbe86f49da8e9d227cb5c2d3f16397/1e1fa/img/tax.svg',
        //     name: 'Real Mailing Address',
        //     para: 'We offer the most competitive prices in today market, ensuring that you get the unbeatable value.'
        // }
    ]

    return (
        <div className='root'>

            <Grid container spacing={5} className='servicesSection'>
                <Grid item md={12} style={{ padding: 0 }}>
                    <h2 style={{ fontSize: '45px', fontWeight: 600 }}>The Best Business Solution For <Typography style={{ fontWeight: '500', fontSize: '45px' }}>Your Business</Typography></h2>
                    <Button endIcon={<SendIcon />} variant='contained' className='globalButton' style={{
                        background: '#F0562D',
                        padding: '1% 2%',
                        marginTop: 0,
                    }}>GET STARTED</Button>
                </Grid>
                {services.map((item) => {
                    return (
                        <Grid item md={3} className='servicesDiv'>
                            <Grid container spacing={2} >
                                <Grid item md={12} style={{ padding: 0 }}>
                                    <img src={item.icon} />
                                </Grid>
                                <Grid item md={12} style={{ padding: 0 }}>
                                    <h2>{item.name}</h2>
                                </Grid>
                                <Grid item md={12} style={{ padding: 0 }}>
                                    <p className='featuresPara'>{item.para}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}