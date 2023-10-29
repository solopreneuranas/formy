import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";

export default function Brands() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches ? 3 : 4,
        slidesToScroll: matches ? 3 : 4,
        arrows: false,
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };


    const data = ['stripe-logo.png', 'mercury-logo.svg', 'wise-logo.svg', 'payoneer-logo.svg', 'relay-logo.svg'];


    const bannerCarousel = () => {
        return data.map((item, i) => (
            <div>
                <center>
                    <img
                    className='logo'
                        src={`/images/${item}`}
                    />
                </center>
            </div>
        ));
    };

    return (
        <div style={{ padding: matches ? '2%' : '5% 25%', position: 'relative' }}>
            <ArrowBackIosIcon
                onClick={handlePrev}
                style={{ display: matches ? 'none' : 'block', position: 'absolute', zIndex: 99, top: '40%', left: matches ? '3%' : '20%', cursor: 'pointer', color: 'gray' }}
            />
            <Slider ref={sliderRef} {...settings}>
                {bannerCarousel()}
            </Slider>
            <ArrowForwardIosIcon
                onClick={handleNext}
                style={{ display: matches ? 'none' : 'block', position: 'absolute', zIndex: 99, top: '40%', right: matches ? '3%' : '20%', cursor: 'pointer', color: 'gray' }}
            />
        </div>
    );
}