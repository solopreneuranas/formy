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

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [value, setValue] = useState(5);

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
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

    const rating = () => {
        return (
            <Box>
                <Rating name="read-only" value={value} readOnly style={{ color: '#00B67A' }} />
            </Box>
        )
    }

    const servicesSlider = () => {
        return features.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '8%',
                        height: '350px',
                        borderRadius: 17,
                        position: 'relative',
                        margin: '17% 5%',
                        boxShadow: '0 0 25px #c4dcff',
                        background: 'white',
                        textAlign: 'center'
                    }}
                >
                    <center>
                        <AvatarGroup style={{ display: 'flex', justifyContent: 'center', marginBottom: '4%', marginTop: '-25%' }}>
                            <Avatar src={`/images/${item.image}`} style={{ width: 100, height: 100, border: '7px solid white' }} />
                        </AvatarGroup>

                        <h3 style={{ margin: '8% 0 0', fontWeight: '600' }}>{item.title}</h3>

                        {/* <div style={{ position: 'absolute', bottom: '8%' }}>
                            <h3 style={{ margin: '10% 0 0', fontWeight: '600' }}>{item.title}</h3>
                        </div> */}

                        <p style={{ opacity: '70%', marginTop: '3%', fontSize: 15 }}>
                            <FormatQuoteIcon style={{ transform: 'rotateY(180deg)' }} />{item.para}
                        </p>

                        <div style={{ position: 'absolute', bottom: '8%', width: '100%', left: 0 }}>
                            {rating()}
                        </div>

                    </center>

                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '8% 0 3%' : '2% 4%', background: '#E3F1FD', borderRadius: matches_md ? '50px 50px 0 0' : '100px 100px 0 0', borderTop: '8px solid #0069FF' }}>

            <Grid container spacing={1} className='testimonialsSection'>
                <Grid item xs={12}>
                    <h2 className='featuresHeading'>See what people say about <span className='gradientText'>Boosty</span></h2><br />

                    <div style={{ position: 'relative', borderRadius: 20, padding: matches_md ? '1%' : '2% 4%', marginTop: '2%' }}>
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

