import * as React from 'react';
import { Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ListItemText from '@mui/material/ListItemText';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
    const [dense, setDense] = React.useState(false);

    return (
        <div className='root'>
            <div className='footerSec'>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <img src='/images/boosty-logo.svg' style={{ width: '30%', marginBottom: '5%', marginLeft: '-3%' }} />
                        <p style={{ opacity: '70%', fontSize: '17px' }}>
                            Boosty: Where Businesses Take Flight! 🚀 Dive into global markets with Stripe, PayPal, and Amazon.
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

                    <Grid item md={2}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Addons Services
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>UK Company Formation</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Stripe & PayPal Account</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>ITIN Application</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Resale Certificate</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Website Setup</span></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item md={2}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Quick Links
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Pricing</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Contact us</span></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item md={2}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Legal
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>FAQs</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Terms</span></ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText><span className='listItem'>Privacy Policy</span></ListItemText>
                            </ListItem>

                        </List>
                    </Grid>

                    <Grid item md={2}>
                        <Typography style={{ fontWeight: 700, fontFamily: 'Inter' }}>
                            Follow us
                        </Typography>
                        <div style={{ marginTop: '5%' }}>
                            <FacebookRoundedIcon style={{ opacity: '100%', marginRight: '3%', color: '#FF6326' }} />
                            <TwitterIcon style={{ opacity: '100%', marginRight: '3%', color: '#FF6326' }} />
                            <LinkedInIcon style={{ opacity: '100%', marginRight: '3%', color: '#FF6326' }} />
                        </div>
                    </Grid>
                </Grid>

                <hr style={{ opacity: '40%', margin: '3% 0' }} />

                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Typography style={{ fontWeight: 600, fontSize: '23px', fontFamily: 'Inter' }}>
                            Instant Support via WhatsApp
                        </Typography>
                        <p style={{ opacity: '70%', fontSize: '15px', margin: 0 }}>Reach out to us directly on WhatsApp for quick support. We're here to help!</p>
                    </Grid>
                    <Grid item md={4}>
                        <a style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=+1(302)209-8440&amp;text=Hello%20Boosty,%20I%20need%20a%20website%20-%20can%20you%20help?" target="_blank">
                            <div class="order_whatsapp" style={{
                                width: '100%',
                                padding: '3px',
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


            </div>
        </div>
    )
}