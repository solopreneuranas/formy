import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ListItemText from '@mui/material/ListItemText';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(props) {

    var navigate = useNavigate()
    const [dense, setDense] = React.useState(false);
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const businessItems = [
        'Form U.S. company',
        'Obtain EIN or ITIN',
        'Registered Agent Service',
        'Open Business Bank',
        'Open Stripe/PayPal'
    ]

    const addonsItems = [
        'Website Development',
        'Business Mailing Address',
        'Create Amazon Account',
        'Resale Certificate / Seller Permit',
        'UK Company Formation',
    ]

    const handleItemClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className='footerSec' style={{ padding: matches_md ? props.paddingMobile : props.paddingDesktop }}>
                <Grid container spacing={1}>
                    <Grid item md={3} style={{ width: '50%' }}>
                        <Typography style={{ fontWeight: 600, fontFamily: 'Inter' }}>
                            Start Your Business
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            {
                                businessItems.map((item) => {
                                    return (
                                        <ListItem style={{ paddingLeft: 0, padding: '0', cursor: 'pointer' }}>
                                            <ListItemText onClick={handleItemClick}><span className='listItem'>{item}</span></ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>

                    <Grid item md={3} style={{ width: '50%' }}>
                        <Typography style={{ fontWeight: 600, fontFamily: 'Inter' }}>
                            Addons Services
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            {
                                addonsItems.map((item) => {
                                    return (
                                        <ListItem style={{ paddingLeft: 0, padding: '0', cursor: 'pointer' }}>
                                            <ListItemText onClick={handleItemClick}><span className='listItem'>{item}</span></ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>

                    <Grid item md={2} style={{ width: '30%', marginTop: matches_md ? '5%' : 0 }}>
                        <Typography style={{ fontWeight: 600, fontFamily: 'Inter' }}>
                            Quick Links
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0', cursor: 'pointer' }}>
                                <ListItemText onClick={handleItemClick}><span className='listItem'>Pricing</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0', cursor: 'pointer' }}>
                                <ListItemText><a target="_blank" style={{ textDecoration: 'none', color: 'white' }} href='https://wa.me/13022098440?text=Hi%20Boosty%20team!%20Interested%20in%20launching%20my%20U.S.%20business.%20Can%20you%20help%3F%20%F0%9F%9A%80'><span className='listItem'>Contact us</span></a></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item md={2} style={{ width: '30%', marginTop: matches_md ? '5%' : 0 }}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Legal
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            {/* <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Terms</span></ListItemText>
                            </ListItem> */}
                            <ListItem style={{ paddingLeft: 0, padding: '0', cursor: 'pointer' }}>
                                <ListItemText onClick={() => { navigate('/privacy'); window.scrollTo(0, 0); }}><span className='listItem'>Privacy Policy</span></ListItemText>
                            </ListItem>

                        </List>
                    </Grid>

                    <Grid item md={2} style={{ width: '30%', marginTop: matches_md ? '5%' : 0 }}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Follow us
                        </Typography>
                        <div style={{ marginTop: '5%' }}>
                            <a href='https://www.facebook.com/TryBoosty' target='_blank'><FacebookRoundedIcon style={{ opacity: '100%', marginRight: '3%', color: 'white' }} /></a>
                            <a href='https://www.twitter.com/TryBoosty' target='_blank'><TwitterIcon style={{ opacity: '100%', marginRight: '3%', color: 'white' }} /></a>
                            <a href='https://instagram.com/boostyhq' target='_blank'><InstagramIcon style={{ opacity: '100%', marginRight: '3%', color: 'white' }} /></a>
                        </div>
                    </Grid>
                </Grid>

                <hr style={{ opacity: '30%', margin: '3% 0' }} />

                <Grid container spacing={2} style={{ padding: matches_md ? '5% 0' : 0 }}>
                    <Grid item md={8}>
                        <Typography style={{ fontWeight: 600, fontSize: '23px', fontFamily: 'Inter' }}>
                            Instant Support via WhatsApp
                        </Typography>
                        <p style={{ opacity: '70%', fontSize: '15px', margin: 0 }}>Reach out to us directly on WhatsApp for quick support. We're here to help!</p>
                    </Grid>
                    <Grid item md={4}>
                        <a style={{ textDecoration: 'none' }} href="https://wa.me/13022098440?text=Hi%20Boosty%20team!%20Interested%20in%20launching%20my%20U.S.%20business.%20Can%20you%20help%3F%20%F0%9F%9A%80" target="_blank">
                            <div class="order_whatsapp" style={{
                                width: '100%',
                                padding: matches_md ? '20px' : '6px',
                                textAlign: 'center',
                                backgroundColor: '#1EA651',
                                height: '50px',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src="https://cdn.shopify.com/s/files/1/0073/2522/0979/files/
whatsapp-icon.png?v=1615793565" width="25px" style={{ verticalAlign: 'middle' }} />
                                Connect On <span style={{ fontWeight: 'bold' }}>WhatsApp</span>
                            </div>
                        </a>
                    </Grid>
                </Grid>

                <hr style={{ opacity: '30%', margin: '3% 0' }} />

                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <img src='/images/boosty-white-logo.svg' style={{ width: '35%', marginBottom: '5%', marginLeft: '-6%' }} />
                        <p style={{ opacity: '70%', fontSize: '17px' }}>
                            Boosty: Where Businesses Take Flight! 🚀 Dive into global markets with Stripe, PayPal, and Amazon.
                        </p><br />
                        <div style={{
                            opacity: '70%',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center'
                        }}><MailIcon fontSize='small' style={{ marginRight: '4%' }} />info@tryboosty.com</div>

                        <div style={{
                            opacity: '70%',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '3%'
                        }}><PhoneIcon fontSize='small' style={{ marginRight: '4%' }} />+1 (302) 209-8440</div>
                    </Grid>

                    <Grid item md={8}>
                        <p style={{ opacity: '70%' }}>©2023 Phoundr LLC. “Boosty” and the Boosty logo are registered trademarks.</p><br />

                        <p style={{ opacity: '70%' }}>Boosty products may not be available to all customers. Terms of Condition apply and are subject to change.</p><br />

                        <p style={{ opacity: '70%' }}>
                            Boosty is a technology company. We are not a law firm, nor can we offer official legal advice. What you see on our website, and any of our communication over email, Whatsapp, Slack, SMS, Zoom call, Intercom, social media is purely for general and educational matters, and should not be taken as official legal advice. By using our website and service, you are explicitly accepting our Terms of Service, Privacy Policy, and Data Processing Addendum.
                        </p>
                    </Grid>
                </Grid>



            </div>
        </div>
    )
}