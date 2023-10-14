import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Header() {

    return (
        <div className='root'>
            <div class="main-wrapper">
                <nav class="navbar">
                    <div class="brand-and-icon">
                        <a href="https://tryboosty.com/" class="navbar-brand"><img src="/images/boosty-logo.svg" /></a>
                        <button type="button" class="navbar-toggler">
                            <img src='/images/menu-icon.svg' style={{width: 30}}/>
                        </button>
                    </div>

                    <div class="navbar-collapse">
                        <ul class="navbar-nav">
                            <li>
                                <a href="#home">home</a>
                            </li>

                            <li>
                                <a href="#services" class="menu-link">
                                    Services
                                </a>
                                <div class="sub-menu">

                                    <div class="sub-menu-item">
                                        <h4>top services</h4>
                                        <ul>
                                            <li><a href="#services">Website Development</a></li>
                                            <li><a href="#services">Logo & Branding</a></li>
                                            <li><a href="#services">Website SEO</a></li>
                                            <li><a href="#services">Blog Management</a></li>
                                        </ul>
                                    </div>

                                    <div class="sub-menu-item">
                                        <h4>other services</h4>
                                        <ul>
                                            <li><a href="#services">Social Media Management</a></li>
                                            <li><a href="#services">Social Media Advertising</a></li>
                                            <li><a href="#services">PPC Marketing</a></li>
                                            <li><a href="#services">Payment Integration</a></li>
                                        </ul>
                                    </div>


                                    <div class="sub-menu-item">
                                        <h4>Addons services</h4>
                                        <ul>
                                            <li>Website Maintenance</li>
                                            <li>Banner Designs</li>
                                            <li>Product Research</li>
                                        </ul>
                                    </div>

                                    <div class="sub-menu-item">
                                        <h2>Design, Develop & Dominate Online</h2>
                                    </div>

                                </div>
                            </li>

                            <li>
                                <a href="#features">Features</a>
                            </li>

                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>

                            <li>
                                <a href="#process">Process</a>
                            </li>

                            <li>
                                <a href="#faq">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <Button id='headerBtn' variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '0.7% 1.5%',
                        marginTop: 0,
                    }}>GET STARTED</Button>
                </nav>
            </div>
        </div>
    )
}