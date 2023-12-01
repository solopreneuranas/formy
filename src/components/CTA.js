import * as React from 'react';
import '../App.css';

import { Grid, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function CTA() {

    var navigate = useNavigate()

    const theme = useTheme()
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));

    const handleBtnClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0);
    }

    return (
        <div style={{
            position: 'relative', padding: '0 6% 3%', background: '#E3F1FD' 
        }}>
            <Grid container spacing={1} className='ctaSection' >
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <h2 className='bigHeading' style={{ textAlign: 'center', margin: 0, fontSize: matches_md ? '30px' : '40px' }}>
                        Ready to <font className='gradientText'>Boost Your Business </font>🚀 Worldwide?
                    </h2>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center><p className='ctaPara'>
                        Simplify global expansion. Register a U.S.company, access major online services with Boosty, and elevate your business to new heights.
                    </p>
                    </center>
                </Grid>
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center>
                        <Button onClick={handleBtnClick} variant='contained' className='globalButton' style={{
                            background: '#0069ff',
                            color: 'white',
                            padding: '1% 3%',
                            marginTop: '1%',
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button>
                    </center>
                </Grid>
            </Grid>

        </div>
    )
}