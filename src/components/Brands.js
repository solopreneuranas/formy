import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
        speed: 70,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches ? 2 : 4,
        slidesToScroll: matches ? 2 : 1,
        arrows: false,
    };

    const data = ['stripe-w.png', 'paypal-w.png', 'mercury-w.png', 'wise-w.png', 'payoneer-w.png', 'relay-w.png'];


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
        <div style={{ position: 'relative' }}>
            <Slider ref={sliderRef} {...settings}>
                {bannerCarousel()}
            </Slider>
        </div>
    );
}