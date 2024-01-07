import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";

export default function Brands() {

    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 70,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches_md ? 2.5 : 3,
        slidesToScroll: matches_md ? 1 : 1,
        arrows: false,
    };

    const data = ['stripe-logo.svg', 'paypal-logo.svg', 'mercury-logo.svg', 'wise-logo.svg', 'payoneer-logo.svg', 'relay-logo.svg'];


    const bannerCarousel = () => {
        return data.map((item, i) => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img
                        className='logo'
                        src={`/images/${item}`}
                    />
                </div>
            )
        })
    }

    return (
        <div style={{ maxWidth: matches_md ? '500px' : '', width: '100%' }}>
            <Slider ref={sliderRef} {...settings}>
                {bannerCarousel()}
            </Slider>
        </div>
    );
}