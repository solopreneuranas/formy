import * as React from 'react';
import '../App.css';
import { Grid } from "@mui/material";
import { useState } from 'react';

export default function Addons() {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const services = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg',
            title: 'Business Stripe Account',
            price: "$49",
            priceTime: 'One Time Fee',
            details: 'Secure your online payments effortlessly with our affordable Business Stripe Account setup. Reliable transactions, low fees, and seamless integration guaranteed.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: 'WordPress Website Setup',
            price: "$149",
            priceTime: 'One Time Fee',
            details: 'Get a Professional WordPress Website that is 100% accepted by Stripe. Responsive design, plugins, and expert guidance for seamless online transactions. Launch confidently.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'ITIN Application',
            price: "$349",
            priceTime: 'One Time Fee',
            details: 'Expert assistance for hassle-free ITIN application process. Ensure smooth documentation and IRS approval with our dedicated service team.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e540947af636b321_Problem%20Free%201.svg',
            title: 'Business PayPal Account',
            price: "$199",
            priceTime: 'One Time Fee',
            details: 'Establish a trustworthy online payment gateway. Our Business PayPal Account setup ensures secure transactions, fraud protection, and customer trust for your business.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: 'Shopify Store Setup',
            price: "$299",
            priceTime: 'One Time Fee',
            details: 'Unlock e-commerce potential. Customized storefront, payment integration, and product listing for a seamless shopping experience. Launch your online store successfully.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'UK Company Formation',
            price: "$199",
            priceTime: 'One Time Fee',
            details: 'Obtain comprehensive UK Company Formation with UK Business, Director, Registered Address, and Business Payoneer account. Start your UK venture with confidence.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: 'Resale Certificate / Seller Permit',
            price: "$149",
            priceTime: 'One Time Fee',
            details: 'Navigate legal requirements. Obtain Resale Certificate /Seller Permit with our assistance. Ensure compliance, legal operations, and business peace of mind.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Logo Design with Brand Guidelines',
            price: "$49",
            priceTime: 'One Time Fee',
            details: 'Craft a memorable brand identity. Our Logo Design with Brand Guidelines service offers unique logos and comprehensive guidelines for consistent brand representation.',
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Digital Business Bundle',
            price: "$39",
            priceTime: 'One Time Fee',
            details: "Secure your online presence with a custom domain, professional business email, and premium web hosting. Elevate your brand's digital footprint with reliability and performance.",
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
                    Start your business on the right foot with worry-free services and support to accurately register with the State - guaranteed.
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
