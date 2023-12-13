import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useTheme } from '@mui/material/styles';
import { AppBar, Grid, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0 solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function MobileMenu() {

    const [expanded, setExpanded] = useState('');

    var navigate = useNavigate()

    const theme = useTheme()
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleBtnClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0);
    }

    const handleMenuItemClick = (item) => {
        navigate(item.link)
        window.scrollTo(item.screenX, item.scrollY);
    }

    const servicesContent = () => {
        const servicesIcons = [
            {
                icon: 'company',
                title: 'Form U.S. company',
                link: '/pricing'
            },
            {
                icon: 'approve-file',
                title: 'Obtain EIN or ITIN',
                link: '/pricing'
            },
            {
                icon: 'paypal',
                title: 'Registered Agent Service',
                link: '/pricing'
            },
            {
                icon: 'bank',
                title: 'Open Business Bank',
                link: '/pricing'
            },
            {
                icon: 'paypal',
                title: 'Open Stripe/PayPal',
                link: '/pricing'
            },
            {
                icon: 'website',
                title: 'Website Development',
                link: '/pricing'
            },
            {
                icon: 'address',
                title: 'Business Mailing Address',
                link: '/pricing'
            },
            {
                icon: 'amazon',
                title: 'Create Amazon Account',
                link: '/pricing'
            },
            {
                icon: 'approve-file',
                title: 'Resale Certificate / Seller Permit',
                link: '/pricing'
            },
            {
                icon: 'company',
                title: 'UK Company Formation',
                link: '/pricing'
            },
            {
                icon: 'company',
                title: 'Form U.S. company',
                link: '/pricing'
            },
            {
                icon: 'file',
                title: 'Obtain EIN or ITIN',
                link: '/pricing'
            },
            {
                icon: 'paypal',
                title: 'Open Stripe/PayPal',
                link: '/pricing'
            },
            {
                icon: 'bank',
                title: 'Open Business Bank',
                link: '/pricing'
            },
            {
                icon: 'amazon',
                title: 'Create Amazon Account',
                link: '/pricing'
            },
            {
                icon: 'website',
                title: 'Website Development',
                link: '/pricing'
            },
        ]
        return (
            <div>
                <Grid container spacing={1} style={{ padding: '3% 5%' }}>

                    <Grid item md={3} style={{ padding: '1%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 15, margin: 0, marginBottom: '1%' }}>START YOUR BUSINESS</h3>
                        {
                            servicesIcons.slice(0, 5).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={`/images/${item.icon}.svg`} style={{ marginRight: '7%', width: 30 }} />
                                        <p onClick={() => handleMenuItemClick(item)} style={{ fontWeight: 500, color: 'black', fontSize: 15, cursor: 'pointer' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }

                    </Grid>
                    <Grid item md={3} style={{ padding: '1%', marginTop: '5%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 15, margin: 0, marginBottom: '1%' }}>MANAGE YOUR BUSINESS </h3>
                        {
                            servicesIcons.slice(5, 15).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={`/images/${item.icon}.svg`} style={{ marginRight: '7%', width: 30 }} />
                                        <p onClick={() => handleMenuItemClick(item)} style={{ fontWeight: 500, color: 'black', fontSize: 15, cursor: 'pointer' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }


    const menuItems = [
        {
            title: 'Services',
            icon: 'check',
            content: servicesContent()
        }

    ]

    const staticMenuItems = [
        {
            title: 'Pricing',
            icon: 'pricing',
            link: '/pricing',
        },
        {
            title: 'FAQ',
            icon: 'faq',
            link: '/',
            scrollX: 0,
            scrollY: 4850
        },
        {
            title: 'Contact',
            icon: 'contact'
        },
        {
            title: 'Blog',
            icon: 'file'
        }
    ]

    const showStaticMenuItems = () => {
        return (
            staticMenuItems.map((item, index) => {
                return (
                    <div>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <h3 onClick={() => handleMenuItemClick(item)} style={{ opacity: '100%', margin: 0, fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                                    <img src={`/images/${item.icon}.svg`} style={{ width: 30, margin: '10% 20% 10% 10%' }} />
                                    {item.title}
                                </h3>
                            </ListItemButton>
                        </ListItem>

                    </div>
                )
            })
        )
    }


    const showMenuItems = () => {
        return (
            menuItems.map((item, index) => {

                const AccordionSummary = styled((props) => (
                    <MuiAccordionSummary
                        expandIcon={<ArrowForwardIosSharpIcon sx={{ display: 'none' }} />}
                        {...props}
                    />
                ))(({ theme }) => ({
                    backgroundColor:
                        theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, .05)'
                            : 'white',
                    flexDirection: 'row-reverse',
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(90deg)',
                    },
                    '& .MuiAccordionSummary-content': {
                        marginLeft: theme.spacing(1),
                    },
                }));

                return (
                    <div>
                        <Accordion
                            onChange={handleChange(`panel${index}`)} style={{ color: 'black', border: 'none' }}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <div style={{ padding: '5% 0', display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <img src={`/images/${item.icon}.svg`} style={{ width: 30, marginRight: '5%' }} />
                                    <h3 style={{ margin: 0, fontWeight: 500 }}>{item.title}</h3>
                                    <KeyboardArrowDownIcon style={{ fontSize: '2rem', marginLeft: '5%' }} />
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.content}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })
        );
    }


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {showMenuItems()}
                <Divider style={{ margin: '2% 0' }} />
                {showStaticMenuItems()}
            </List>


            <div style={{ padding: '0 3%', marginTop: '3%', }}>
                <Button onClick={handleBtnClick} variant='contained' fullWidth className='globalButton' style={{
                    background: 'linear-gradient(to right, blue, #8000ff)',
                    color: 'white',
                    fontWeight: 500,
                    fontFamily: 'Inter'
                }}>GET STARTED
                </Button>
            </div>

        </Box>
    );

    return (
        <div>

            <React.Fragment key={'right'}>
                <MenuIcon style={{ width: 40, height: 40, cursor: 'pointer' }} onClick={toggleDrawer('right', true)} />
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>

        </div>
    );
}