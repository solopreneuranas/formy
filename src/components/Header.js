import * as React from 'react';

import { Button } from "@mui/material";

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
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#features">Pricing</a>
                            </li>

                            <li>
                                <a href="#portfolio">About</a>
                            </li>

                            <li>
                                <a href="#process">Conatct us</a>
                            </li>

                            <li>
                                <a href="#faq">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <Button id='headerBtn' variant='contained' className='globalButton' style={{
                        background: '#FF6326',
                        padding: '0.5% 1.5%',
                        marginTop: 0,
                        fontFamily: 'Inter'
                    }}>GET STARTED</Button>
                </nav>
            </div>
        </div>
    )
}