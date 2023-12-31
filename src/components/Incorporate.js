import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import StarsIcon from '@mui/icons-material/Stars';

export default function Incorporate() {

    const sliderRef = useRef(null);
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches_md ? 1 : 3,
        slidesToScroll: matches_md ? 1 : 1,
        arrows: false,
    };

    const features = [
        {
            icon: 'company',
            title: 'Global Business Opportunities:',
            para: "Incorporating in the USA enhances international credibility, attracting global clients and partners, expanding business opportunities globally."
        },
        {
            icon: 'approve-file',
            title: 'Asset Protection:',
            para: "Enjoy limited liability; your liability is generally confined to your business investment, safeguarding personal assets from business debts."
        },
        {
            icon: 'check',
            title: 'Trustworthiness with Financial Providers:',
            para: "Forming a US company is seen as more trustworthy by financial service providers, such as Stripe, PayPal, and banks."
        },
        {
            icon: 'money',
            title: 'Tax Optimization:',
            para: "Benefit from favorable tax structures, deductions, and incentives, optimizing your financial strategy and potentially reducing overall tax burdens."
        }
    ]

    const servicesSlider = () => {
        return features.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        padding: '8% 6%',
                        height: '350px',
                        borderRadius: 15,
                        margin: '5% 4%',
                        boxShadow: '10px 10px 25px #f2e4ff',
                        background: 'white',
                        textAlign: 'left'
                    }}
                >
                    <img src={`/images/${item.icon}.svg`} style={{ width: 50 }} />
                    <h3 style={{ margin: '10% 0 0', fontWeight: '600', }}>{item.title}</h3>
                    <p style={{ opacity: '80%', marginTop: '3%' }}>
                        {item.para}
                    </p>
                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '3% 0' : '0 10% 3%', overflowX: 'hidden' }}>

            <Grid container spacing={1} className='incorporateSection' style={{ margin: 0 }}>
                <Grid item xs={12}>
                    <h2 className='featuresHeading' style={{ textAlign: matches_md ? 'left' : 'center' }}>Why Incorporate in the <span className='gradientText'>USA</span></h2>

                    <div style={{ position: 'relative', background: '', borderRadius: 20, padding: matches_md ? '1% 0' : '2%', marginTop: '2%' }}>
                        <Slider ref={sliderRef} {...settings}>
                            {servicesSlider()}
                        </Slider>
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}

