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

                <Grid item xs={12} style={{ zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 500, color: props.color, fontSize: matches_md ? 14 : 18 }}>
                        Questions? Chat with Boosty on <a style={{ color: props.linkColor, textDecoration: 'none' }} href='https://wa.me/13022098440?text=Hi%20Boosty%20team!%20Interested%20in%20launching%20my%20U.S.%20business.%20Can%20you%20help%3F%20%F0%9F%9A%80'>
                            WhatsApp
                        </a> now!
                    </h3>
                </Grid>

            </Grid>


        </div >
    )
}