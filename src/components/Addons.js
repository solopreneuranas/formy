import * as React from 'react';
import '../App.css';
import { Grid } from "@mui/material";
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Addons() {

    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const services = [
        {
            "icon": "address",
            "title": "Premium Business Address",
            "price": "$199",
            "priceTime": "One Time Fee",
            "details": "Get your premium, unique business mailing address that allows for receiving 10+ mails monthly, along with an Amazon Post (Verification) Card."
        },
        {
            "icon": "website",
            "title": "WordPress & Shopify Website Setup",
            "price": "$349",
            "priceTime": "One Time Fee",
            "details": "Experience a smooth start online as we handle the intricate setup of your WordPress or Shopify website."
        },
        {
            "icon": "paypal",
            "title": "Business PayPal Account",
            "price": "$199",
            "priceTime": "One Time Fee",
            "details": "Our team will help you create a Business PayPal Account and give you a free US Premium VPS for six months."
        },
        {
            "icon": "company",
            "title": "UK Company Formation",
            "price": "$249",
            "priceTime": "One Time Fee",
            "details": "Comprehensive UK Company Formation. Business, Director, Registered Address, Wise business account included."
        },
        {
            "icon": "file",
            "title": "Resale Certificate / Seller Permit",
            "price": "$199",
            "priceTime": "One Time Fee",
            "details": "Legal compliance made easy. Obtain a Resale Certificate/Seller Permit with our expert assistance."
        },
        {
            "icon": "approve-file",
            "title": "ITIN Application",
            "price": "$349",
            "priceTime": "One Time Fee",
            "details": "Hassle-free ITIN application. Smooth documentation, IRS approval, dedicated service team support."
        }
    ]

    const handleAddonHover = (index) => {
        setHoveredIndex(index);
    }

    const handleAddonHoverLeave = (index) => {
        setHoveredIndex(null);
    }

    return (
        <div className='root' >
            <Grid container spacing={1} className='addonsSection'>
                <Grid item md={12} style={{ zIndex: 2 }}>
                    <h2 className='featuresHeading'><span className='gradientText'>Addons</span> Services</h2><br />
                    <p className='addonsPara' style={{ width: matches_md ? '100%' : '60%', margin: 'auto', marginBottom: matches_md ? '5%' : '3%' }}>
                        Benefit from a 30% discount on Premium Business Address, WP/Shopify Website Setup, ITIN Application, and Website Development
                        Services with our business or premium package.
                    </p>
                    <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
                        {services.map((item, index) => {
                            return (
                                <Grid item md={3} className='addonsDiv' onMouseEnter={() => handleAddonHover(index)} onMouseLeave={() => handleAddonHoverLeave(index)}>
                                    <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '75%', margin: 'auto', display: hoveredIndex === index ? 'none' : 'block' }}>{item.title}</h2>
                                    <center><img src={`/images/${item.icon}.svg`} style={{ width: 120, display: hoveredIndex === index ? 'none' : 'block', margin: '10% 0' }} /></center>
                                    <p className='addonsPara' style={{ fontSize: '18px', display: hoveredIndex === index ? 'none' : 'block' }}>{item.priceTime}</p>
                                    <p className='addonsPara' style={{ fontSize: '25px', opacity: '100%', display: hoveredIndex === index ? 'none' : 'block' }}>{item.price}</p>

                                    {hoveredIndex === index && (
                                        <div className='addonsDetails'>
                                            <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '75%', margin: 'auto' }}>{item.title}</h2>
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
