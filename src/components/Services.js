import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Services() {

    const sliderRef = useRef(null);
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches_md ? 1 : 5,
        slidesToScroll: matches_md ? 1 : 1,
        arrows: false,
    };

    const features = [
        {
            icon: 'https://startglobal.co/img/users-02.svg',
            title: 'Form U.S. company'
        },
        {
            icon: 'https://startglobal.co/img/icon-invoice.svg',
            title: 'Obtain EIN or ITIN'
        },
        {
            icon: 'https://startglobal.co/img/file.svg',
            title: 'Open Stripe/PayPal'
        },
        {
            icon: 'https://startglobal.co/img/file-check-02.svg',
            title: 'Open Business Bank'
        },
        {
            icon: 'https://startglobal.co/img/calculator.svg',
            title: 'Create Amazon Account'
        },
        {
            icon: 'https://startglobal.co/img/users-02.svg',
            title: 'Website Development'
        },
    ]

    const servicesSlider = () => {
        return features.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '6% 3%',
                        height: matches_md ? '250px' : '200px',
                        borderRadius: 12,
                        margin: '7%',
                        boxShadow: '0 5px 25px #c4dcff',
                        background: 'white'
                    }}
                >
                    <center>
                        <img src={item.icon} style={{ width: 50 }} alt={item.title} />
                        <h3 style={{ margin: '10% 0 0', fontWeight: '500', }}>{item.title}</h3>
                    </center>
                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: '3% 6%', marginTop: matches_md ? '10%' : '5%' }}>

            <Grid container spacing={2} className='servicesSection'>
                <Grid item xs={12}>
                    <h2 className='featuresHeading'>Boosty: <span className='gradientText'> Expand Globally, </span> Effortlessly</h2><br />
                    <p className='featuresPara' style={{ width: matches_md ? '100%' : '55%', margin: 'auto' }}>
                        Ready to elevate your global business? Boosty is your passport to unlock popular online services, even in regions where they're unavailable. Seamlessly access them today!
                    </p> <br />

                    <div style={{ position: 'relative' }}>
                        {/* <ArrowBackIosIcon
                            onClick={handlePrev}
                            style={{ display: matches_md ? 'none' : 'block', position: 'absolute', zIndex: 99, top: '40%', left: matches_md ? '3%' : '0', cursor: 'pointer' }}
                        /> */}
                        <Slider ref={sliderRef} {...settings}>
                            {servicesSlider()}
                        </Slider>
                        {/* <ArrowForwardIosIcon
                            onClick={handleNext}
                            style={{ display: matches_md ? 'none' : 'block', position: 'absolute', zIndex: 99, top: '40%', right: matches_md ? '3%' : '0', cursor: 'pointer' }}
                        /> */}
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}

