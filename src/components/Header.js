import * as React from 'react';

import { Grid, Button } from "@mui/material";
import MenuComponent from './MenuComponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Header(props) {

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Grid container spacing={1} style={{ padding: '1% 3%', background: props.bg, color: props.color }}>
                <Grid item md={3} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                    <img src={`/images/${props.logo}`} style={{ width: '40%' }} />
                </Grid>
                {matches_md ? <></> :
                    <Grid item md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MenuComponent color={props.color} border={props.border} />
                    </Grid>}

                {matches_md ? <></> :
                    <Grid item md={3} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Button variant='contained' className='globalButton' style={{
                            background: '#1105fa',
                            color: 'white',
                            padding: '3% 6%',
                            fontWeight: 500,
                            borderRadius: 30,
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button>
                    </Grid>}

            </Grid>

        </div>
    )
}