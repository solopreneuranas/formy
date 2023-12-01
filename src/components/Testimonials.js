import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Testimonials() {

    const sliderRef = useRef(null);
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches_md ? 1 : 3.5,
        slidesToScroll: matches_md ? 1 : 1,
        arrows: false,
    };

    const features = [
        {
            title: 'Yusuf Jamal',
            image: 'model-1.jpg',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery."
        },
        {
            title: 'Muhammad Boota',
            image: 'model-2.jpg',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery."
        },
        {
            title: 'Abdullah Taurab',
            image: 'model-1.jpg',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery."
        },
        {
            title: 'Kamal Hassan',
            image: 'model-2.jpg',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery."
        },
        {
            title: 'Hasham Usman',
            image: 'model-1.jpg',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery."
        }
    ]

    const servicesSlider = () => {
        return features.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '7%',
                        height: '300px',
                        borderRadius: 17,
                        position: 'relative',
                        margin: '10% 3%',
                        //boxShadow: matches_md ? '0 5px 25px #D2DEF1' : 'none',
                        background: 'white',
                        textAlign: 'left'
                    }}
                >
                    <h3 style={{ margin: 0, fontWeight: 500, textAlign: 'left', fontSize: 23 }}>{item.title}</h3>

                    <p style={{ opacity: '70%', marginTop: '3%', fontSize: 15 }}>
                        {item.para}
                    </p>
                    <br />

                    <img src='/images/stars.svg' style={{ width: 140 }} />

                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '8% 0 3%' : '2% 0 0' }}>

            <Grid container spacing={1} className='testimonialsSection'>
                {matches_md ? <></> : <div className='blurDiv'></div>}
                <Grid item xs={12} style={{ zIndex: 2 }}>
                    <center><h2 className='featuresHeading' style={{ textAlign: matches_md ? 'left' : 'cenetr', padding: matches_md ? '0 4%' : '' }}>See what people say about <span className='gradientText'>Boosty</span></h2>
                        <p style={{ marginTop: '1%', opacity: '80%', textAlign: matches_md ? 'left' : 'cenetr', padding: matches_md ? '0 4%' : '' }}>Rated by many Businesses worldwide</p>
                    </center>

                    <div style={{ position: 'relative', borderRadius: 20, padding: matches_md ? '1%' : '2% 4%' }}>
                        <div style={{ background: '', width: '70%', position: 'absolute', left: '15%', height: '90%', borderRadius: 10 }}>
                        </div>
                        <Slider ref={sliderRef} {...settings}>
                            {servicesSlider()}
                        </Slider>
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}

