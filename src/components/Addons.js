import * as React from 'react';
import '../App.css';
import { Grid } from "@mui/material";
import { useState } from 'react';

export default function Addons() {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const services = [
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Business Stripe Account",
            "price": "$49",
            "priceTime": "One Time Fee",
            "details": "Effortless online payments. Reliable transactions, low fees, seamless integration."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Premium Business Address",
            "price": "$149",
            "priceTime": "One Time Fee",
            "details": "Enhance business reputation. Amazon Verification Card, 30 monthly mails, boost credibility."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "WordPress Website Setup",
            "price": "$149",
            "priceTime": "One Time Fee",
            "details": "Professional WordPress site accepted by Stripe. Responsive design, expert guidance, seamless transactions."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Business PayPal Account",
            "price": "$199",
            "priceTime": "One Time Fee",
            "details": "Trustworthy payment gateway. Secure transactions, fraud protection, customer trust assured."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Shopify Store Setup",
            "price": "$299",
            "priceTime": "One Time Fee",
            "details": "Unlock e-commerce potential. Customized storefront, seamless payment, successful online store launch."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "UK Company Formation",
            "price": "$199",
            "priceTime": "One Time Fee",
            "details": "Comprehensive UK Company Formation. Business, Director, Registered Address, Payoneer account included."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Resale Certificate / Seller Permit",
            "price": "$149",
            "priceTime": "One Time Fee",
            "details": "Legal compliance made easy. Obtain Resale Certificate/Seller Permit with our expert assistance."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "ITIN Application",
            "price": "$349",
            "priceTime": "One Time Fee",
            "details": "Hassle-free ITIN application. Smooth documentation, IRS approval, dedicated service team support."
        },
        {
            "icon": "https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg",
            "title": "Digital Business Bundle",
            "price": "$39",
            "priceTime": "One Time Fee",
            "details": "Secure online presence. Custom domain, professional email, premium web hosting. Reliable brand elevation."
        }
    ]


    const handleAddonHover = (index) => {
        setHoveredIndex(index);
    }

    const handleAddonHoverLeave = (index) => {
        setHoveredIndex(null);
    }

    return (
        <div className='root'>
            <Grid container spacing={1} className='addonsSection'>
                <Grid item md={12}>
                    <h2 className='featuresHeading'><span style={{ color: '#FF6326' }}>Addons</span> Services</h2><br />
                    <p className='addonsPara' style={{ marginBottom: '5%' }}>
                        Explore tailored solutions for secure transactions, professional addresses, and legal compliance.
                    </p>

                    <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
                        {services.map((item, index) => {
                            return (
                                <Grid item md={3} className='addonsDiv' onMouseEnter={() => handleAddonHover(index)} onMouseLeave={() => handleAddonHoverLeave(index)}>
                                    <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '70%', margin: 'auto', display: hoveredIndex === index ? 'none' : 'block' }}>{item.title}</h2>
                                    <center><img src={item.icon} style={{ width: 180, display: hoveredIndex === index ? 'none' : 'block' }} /></center>
                                    <p className='addonsPara' style={{ fontSize: '18px', display: hoveredIndex === index ? 'none' : 'block' }}>{item.priceTime}</p>
                                    <p className='addonsPara' style={{ fontSize: '25px', opacity: '100%', display: hoveredIndex === index ? 'none' : 'block' }}>{item.price}</p>

                                    {hoveredIndex === index && (
                                        <div className='addonsDetails'>
                                            <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '70%', margin: 'auto' }}>{item.title}</h2>
                                            <p className='addonsPara' style={{ margin: '10% 0', opacity: '100%' }}>{item.details}</p>
                                            <p className='addonsPara' style={{ fontSize: '18px' }}>{item.priceTime}</p>
                                            <p className='addonsPara' style={{ fontSize: '25px', opacity: '100%' }}>{item.price}</p>
                                        </div>
                                    )}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
