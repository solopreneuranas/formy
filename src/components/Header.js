import * as React from 'react';

import { Grid, Button } from "@mui/material";
import MenuComponent from './MenuComponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';

export default function Header(props) {

    var navigate = useNavigate()

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const handleLogoclick = () => {
        navigate('/')
        window.scrollTo(0, 0);
    }

    return (
        <div style={{overflowX: 'hidden'}}>
            {matches_md ? <></> :
                <Grid container spacing={1} style={{ padding: '1% 3%', background: props.bg, color: props.color }}>
                    <Grid item md={3} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <img src={`/images/${props.logo}`} style={{ width: '40%', cursor: 'pointer' }} onClick={handleLogoclick} />
                    </Grid>


                    <Grid item md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MenuComponent color={props.color} border={props.border} />
                    </Grid>


                    <Grid item md={3} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Button variant='contained' className='globalButton' style={{
                            background: '#1105fa',
                            color: 'white',
                            padding: '3% 6%',
                            fontWeight: 500,
                            fontFamily: 'Inter'
                        }}>GET STARTED</Button>
                    </Grid>

                </Grid>
            }

            {matches_md ?
                <Grid container spacing={1} style={{ margin: 0, padding: '1% 5%', background: props.bg, color: props.color }}>

                    <Grid item md={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{}}>
                            <img src={`/images/${props.logo}`} style={{ width: '40%', cursor: 'pointer', marginLeft: '-10%' }} onClick={handleLogoclick} />
                        </div>
                        <div style={{}}>
                            <MobileMenu />
                        </div>
                    </Grid>

                </Grid> :
                <></>
            }
        </div>
    )
}