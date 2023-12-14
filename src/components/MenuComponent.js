import React, { useRef, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

export default function MenuComponent(props) {

    var navigate = useNavigate()
    const theme = useTheme()
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'))
    const matches_md = useMediaQuery(theme.breakpoints.down('md'))

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const pricingContent = () => {
        const servicesIcons = [
            {
                icon: 'https://startglobal.co/img/users-02.svg',
                title: 'Form U.S. company'
            },
            {
                icon: 'https://startglobal.co/img/icon-invoice.svg',
                title: 'Obtain EIN or ITIN'
            },
            {
                icon: 'https://startglobal.co/img/icon-book.svg',
                title: 'Open Stripe/PayPal'
            },
            {
                icon: 'https://startglobal.co/img/file-check-02.svg',
                title: 'Open Business Bank'
            },
            {
                icon: 'https://startglobal.co/img/calculator.svg',
                title: 'Create Amazon Account'
            },
            {
                icon: 'https://startglobal.co/img/file.svg',
                title: 'Website Development'
            },
            {
                icon: 'https://startglobal.co/img/icon-invoice.svg',
                title: 'Obtain EIN or ITIN'
            },
            {
                icon: 'https://startglobal.co/img/icon-book.svg',
                title: 'Open Stripe/PayPal'
            },
            {
                icon: 'https://startglobal.co/img/file-check-02.svg',
                title: 'Open Business Bank'
            },
            {
                icon: 'https://startglobal.co/img/users-02.svg',
                title: 'Form U.S. company'
            },
            {
                icon: 'https://startglobal.co/img/icon-invoice.svg',
                title: 'Obtain EIN or ITIN'
            },
            {
                icon: 'https://startglobal.co/img/icon-book.svg',
                title: 'Open Stripe/PayPal'
            },
            {
                icon: 'https://startglobal.co/img/file-check-02.svg',
                title: 'Open Business Bank'
            },
            {
                icon: 'https://startglobal.co/img/calculator.svg',
                title: 'Create Amazon Account'
            },
            {
                icon: 'https://startglobal.co/img/file.svg',
                title: 'Website Development'
            },
        ]
        return (
            <div>
                <Grid container spacing={1} style={{ padding: '3% 10%' }}>
                    <CloseIcon onClick={handleClose} fontSize='large' style={{ position: 'absolute', top: '6%', right: '4%', cursor: 'pointer', color: 'gray', zIndex: 2 }} />
                    <Grid item md={3} style={{ padding: '1%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0, marginBottom: '1%' }}>START YOUR BUSINESS</h3>
                        {
                            servicesIcons.slice(0, 5).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={item.icon} style={{ marginRight: '3%', height: 40, width: 40 }} />
                                        <p style={{ fontWeight: 500, color: 'black' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }

                    </Grid>
                    <Grid item md={3} style={{ padding: '1%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0, marginBottom: '1%' }}>MANAGE YOUR BUSINESS </h3>
                        {
                            servicesIcons.slice(5, 10).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={item.icon} style={{ marginRight: '3%', height: 40, width: 40 }} />
                                        <p style={{ fontWeight: 500, color: 'black' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    <Grid item md={3} style={{ borderRight: '1px solid gainsboro', padding: '1%' }}>
                        <br />
                        {
                            servicesIcons.slice(10, 15).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={item.icon} style={{ marginRight: '3%', height: 40, width: 40 }} />
                                        <p style={{ fontWeight: 500, color: 'black' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </div>
        )
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
                <Grid container spacing={1} style={{ padding: '3% 10%' }}>
                    <CloseIcon onClick={handleClose} fontSize='large' style={{ position: 'absolute', top: '6%', right: '4%', cursor: 'pointer', color: 'gray', zIndex: 2 }} />
                    <Grid item md={4} style={{ padding: '1%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0, marginBottom: '1%' }}>START YOUR BUSINESS</h3>
                        {
                            servicesIcons.slice(0, 5).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={`/images/${item.icon}.svg`} style={{ marginRight: '3%', width: 40 }} />
                                        <p onClick={() => handleMenuItemClick(item)} style={{ fontWeight: 500, color: 'black', cursor: 'pointer' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }

                    </Grid>
                    <Grid item md={4} style={{ padding: '1%' }}>
                        <h3 style={{ fontWeight: 600, fontSize: 18, margin: 0, marginBottom: '1%' }}>ADDONS SERVICES</h3>
                        {
                            servicesIcons.slice(5, 10).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={`/images/${item.icon}.svg`} style={{ marginRight: '3%', width: 40 }} />
                                        <p onClick={() => handleMenuItemClick(item)} style={{ fontWeight: 500, color: 'black', cursor: 'pointer' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    {/* <Grid item md={3} style={{ borderRight: '1px solid gainsboro', padding: '1%' }}>
                        <br />
                        {
                            servicesIcons.slice(10, 15).map((item, i) => {
                                return (
                                    <div style={{ display: 'flex', alignItems: 'center', margin: '10% 0' }}>
                                        <img src={`/images/${item.icon}.svg`} style={{ marginRight: '3%', width: 40 }} />
                                        <p onClick={handleMenuItemClick} style={{ fontWeight: 500, color: 'black', cursor: 'pointer' }}>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </Grid> */}
                    <Grid item md={4} style={{ display: 'flex', alignItems: 'center', justifyItems: 'left', padding: '4%' }}>
                        <Grid container spacing={1}>
                            <Grid item md={12}>
                                <h4 style={{ fontWeight: 500, fontSize: 20 }}>Already have a company formed?
                                    Migrate to Boosty
                                </h4>
                            </Grid>
                            <Grid item md={12}>
                                <Button variant='contained' className='globalButton' style={{
                                    background: 'linear-gradient(to right, blue, #8000ff)',
                                    color: 'white',
                                    padding: '4% 8%',
                                    fontWeight: 500,
                                    marginTop: '2%',
                                    border: 'none',
                                    fontFamily: 'Inter'
                                }}>GET STARTED</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        )
    }

    const handleMenuItemClick = (item) => {
        navigate(item.link)
        window.scrollTo(item.screenX, item.scrollY);
    }

    const menuItems = [
        {
            title: 'Pricing',
            link: '/pricing'
        },
        {
            title: 'Services',
            content: servicesContent(),
        }
    ]

    const showMenuItems = () => {
        return (
            menuItems.map((item, index) => {
                return (
                    <div>
                        <Button
                            key={index}
                            style={{
                                color: props.color,
                                fontWeight: 500,
                                fontFamily: 'Inter',
                                fontSize: 17,
                                textTransform: 'capitalize',
                                padding: '1% 0',
                            }}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(event) => handleClick(event, item)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: 18, margin: 0, cursor: 'pointer' }} onClick={() => navigate(item.link)}>{item.title}</p>
                                {
                                    item.content ? <KeyboardArrowDownIcon /> : <></>
                                }
                            </div>
                        </Button>
                    </div>
                )
            })
        );
    }

    const handleClick = (event, item) => {
        setAnchorEl(event.currentTarget);
        setSelectedItem(item);
    };

    const staticMenuItems = [
        {
            title: 'FAQ',
            link: '/',
            scrollX: 0,
            scrollY: 4850
        },
        {
            title: 'Contact'
        },
        {
            title: 'Blog',
            link: 'https://medium.com/@tryboosty'
        }
    ]

    const showStaticMenuItems = () => {
        return (
            staticMenuItems.map((item, i) => {
                return (
                    <div>
                        <Button
                            style={{
                                color: props.color,
                                fontWeight: 500,
                                fontFamily: 'Inter',
                                fontSize: 17,
                                textTransform: 'capitalize',
                                padding: '1% 0',
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: 18, margin: 0 }} onClick={() => handleMenuItemClick(item)}>{item.title}</p>
                            </div>
                        </Button>
                    </div>
                )
            })
        )
    }


    return (
        <div style={{ position: "sticky", top: '11%', zIndex: 999 }} >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    {matches_md ? <></> :
                        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                            <Toolbar style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '7%' }}>
                                {showMenuItems()}
                                {showStaticMenuItems()}

                                <Menu
                                    PaperProps={{
                                        style: {
                                            width: '70%',
                                            boxShadow: 'none',
                                            borderRadius: 15,
                                            border: props.border,
                                            background: selectedItem && selectedItem.content ? 'white' : 'transparent',
                                            position: 'relative',
                                            transform: 'translateX(-20%) translateY(2%)',
                                        },
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                                >
                                    {selectedItem ? selectedItem.content : <>:</>}
                                </Menu>
                            </Toolbar>
                        </AppBar>
                    }
                </Grid>
            </Grid>
        </div>
    );
}