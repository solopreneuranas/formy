import * as React from 'react';
import '../App.css';
import { Grid } from "@mui/material";
import { useState } from 'react';

export default function Addons() {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const services = [
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e54094fae136b320_Record%201.svg',
            title: 'Formation Services',
            price: "$0 + State Fees",
            priceTime: 'Starting at',
            details: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: 'Expert Guidance',
            price: "$99/year",
            priceTime: 'Annual fee',
            details: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Affordable Solutions',
            price: "$99",
            priceTime: 'One Time Fee',
            details: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b6e540947af636b321_Problem%20Free%201.svg',
            title: 'Secure and Confidential',
            price: "$99/year",
            priceTime: 'Starting at',
            details: '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: ' Expert Guidance',
            price: "$99/year",
            priceTime: 'Starting at',
            details: '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Affordable Solutions',
            price: "$99",
            priceTime: 'Annual Fee',
            details: '6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87df333d7fdfd_Support%201.svg',
            title: ' Expert Guidance',
            price: "$99/year",
            priceTime: 'One Time Fee',
            details: '7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Affordable Solutions',
            price: "$99",
            priceTime: 'One Time Fee',
            details: '8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
        },
        {
            icon: 'https://assets-global.website-files.com/5ed7de2862ce46f8d9a14cd1/5ed7e4b609b87d678fd7fdfc_Everywhere%201.svg',
            title: 'Affordable Solutions',
            price: "$99",
            priceTime: 'One Time Fee',
            details: '9 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            para: 'Our team of experts is here to guide you through the entire process, making sure you have the support you need.'
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
                                    <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '50%', margin: 'auto', display: hoveredIndex === index ? 'none' : 'block' }}>{item.title}</h2>
                                    <center><img src={item.icon} style={{ width: 180, display: hoveredIndex === index ? 'none' : 'block' }} /></center>
                                    <p className='addonsPara' style={{ fontSize: '18px', display: hoveredIndex === index ? 'none' : 'block' }}>{item.priceTime}</p>
                                    <p className='addonsPara' style={{ fontSize: '25px', opacity: '100%', display: hoveredIndex === index ? 'none' : 'block' }}>{item.price}</p>

                                    {hoveredIndex === index && (
                                        <div className='addonsDetails'>
                                            <h2 style={{ marginBottom: '2%', fontWeight: '500', width: '50%', margin: 'auto' }}>{item.title}</h2>
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
