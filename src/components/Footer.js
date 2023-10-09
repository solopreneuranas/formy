import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ListItemText from '@mui/material/ListItemText';


export default function Footer() {
    const [dense, setDense] = React.useState(false);

    return (
        <div className='root'>
            <div className='footerSec'>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography style={{ fontWeight: 600 }}>
                            Company
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Home</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Contact</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Blog</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography style={{ fontWeight: 600 }}>
                            Quick Links
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>LLC Formation</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Resale Certificate</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Website Developement</ListItemText>
                            </ListItem>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Website Developement</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography style={{ fontWeight: 600 }}>
                            Legal
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Privacy Policy</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Terms</ListItemText>
                            </ListItem>

                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>FAQs</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography style={{ fontWeight: 600 }}>
                            Follow us
                        </Typography>
                        <List dense={dense} style={{ marginTop: '2%', opacity: '70%' }}>
                            <ListItem style={{ paddingLeft: 0, padding: '0' }}>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <hr style={{ opacity: '40%', margin: '3% 0' }} />

                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Typography style={{ fontWeight: 600, fontSize: '23px' }}>
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

                <hr style={{ opacity: '40%', margin: '3% 0' }} />

                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <img src='https://tryboosty.com/images/boosty-footer-logo.svg' style={{ width: '40%', marginBottom: '5%' }} />
                        <p style={{ opacity: '70%', fontSize: '14px', margin: 0, marginBottom: '8%' }}>Exceptional LLC FOmration Solutions</p>

                        <div style={{
                            opacity: '70%', 
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center'
                        }}><MailIcon fontSize='small' style={{marginRight: '4%'}}/>info@tryboosty.com</div>

                        <div style={{
                            opacity: '70%', 
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '3%'
                        }}><PhoneIcon fontSize='small' style={{marginRight: '4%'}}/>+1 (302) 209-8440</div>

                    </Grid>
                    <Grid item md={9}>
                        <p style={{ opacity: '70%', fontSize: '15px', margin: 0 }}>
                            ©2023 Digital Nexus LLC. All rights reserved.<br /><br />
                            Boosty is a technology company providing cutting-edge digital solutions to businesses.<br /><br />
                            We take pride in our services designed to elevate your online presence and drive business growth. From website development to logo design, branding, SEO, social media management, and PPC marketing, Boosty offers a comprehensive suite of services tailored to meet your unique needs.<br /><br />
                            Please note that Boosty is not a law firm, and any information provided on our website or through communication channels should not be considered official legal advice. Our content is intended for general and educational purposes only. By utilizing our services and accessing our website, you explicitly agree to adhere to our Terms of Service, Privacy Policy, and Data Processing Addendum.<br /><br />
                            At Boosty, we are dedicated to helping your brand thrive in the digital landscape. Your success is our priority, and we look forward to partnering with you on your journey to success.
                        </p>
                    </Grid>
                </Grid>


            </div>
        </div>
    )
}