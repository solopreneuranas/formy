import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
            name: 'Mustufa',
            title: 'Boosty made my business soar',
            image: 'model-1.jpg',
            para: "Boosty made my business soar! With their expert guidance, I easily launched in the US, tapping into Amazon's marketplace. Their support transformed my dreams into reality. Boosty is the go-to for a smooth start and growth on platforms like Amazon. Grateful for their invaluable support!"
        },
        {
            name: 'Shoaib Fattani',
            title: 'Boosty exceeded my expectations',
            image: 'model-2.jpg',
            para: "Boosty exceeded my expectations. The quick setup and affordable pricing were impressive. Having a US business presence opened doors to big projects. Their dedication to helping Pakistani entrepreneurs is evident. Boosty truly empowered my software development business!"
        },
        {
            name: 'Muhammed Faraz',
            title: 'Boosty is a game-changer for entrepreneurs',
            image: 'model-1.jpg',
            para: "Boosty is a game-changer for global entrepreneurs! Their assistance in navigating the complexities of U.S. business was invaluable. Setting up my LLC, obtaining an EIN, and integrating with Stripe was a breeze with their step-by-step guidance.recommende. Trustworthy and highly recommended!"
        },
        {
            name: 'Idris Ali',
            title: "Setting up business in U.S. was seamless",
            image: 'model-2.jpg',
            para: "Boosty exceeded my expectations! Setting up my business in the U.S. was seamless with their expert guidance. From LLC formation to tax filings, they simplified every step. Highly recommend Boosty for entrepreneurs seeking a smooth entry into the U.S. market!"
        },
        {
            name: 'Arshad Ahmad',
            title: 'Choosing Boosty for website development',
            image: 'model-1.jpg',
            para: "Choosing Boosty for website development and branding was the best decision we made. Their talented team delivered a website that is both visually appealing and highly functional. The branding services helped us stand out in a competitive market. Working with Boosty was a breeze, and the results speak for themselves!"
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
                        height: matches_md ? 360 : 340,
                        borderRadius: 17,
                        position: 'relative',
                        margin: '10% 3%',
                        boxShadow: matches_md ? '0 5px 25px #f2e4ff' : 'none',
                        background: 'white',
                        textAlign: 'left'
                    }}
                >
                    <h3 style={{ margin: 0, fontWeight: 500, textAlign: 'left', fontSize: 22 }}>{item.title}</h3>

                    <p style={{ opacity: '70%', marginTop: '3%', fontSize: 15 }}>
                        {item.para}
                    </p>
                    <br />

                    <div style={{ display: 'flex', gap: '3%' }}>
                        <p style={{}}>-{item.name}</p>
                        <img src='/images/stars.svg' style={{ width: 140 }} />
                    </div>

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

