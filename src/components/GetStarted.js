import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {

    const sliderRef = useRef(null);
    var navigate = useNavigate()
    const theme = useTheme();
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        focusOnSelect: false,
        autoplay: true,
        slidesToShow: matches_md ? 1 : 3.2,
        slidesToScroll: matches_md ? 1 : 1,
        arrows: false,
    }

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const step1Items = [
        {
            title: "Ideal company name"
        },
        {
            title: "Personal address (it can be anywhere in the world)"
        },
        {
            title: "Email address",
        }
    ]

    const step2Items = [
        {
            title: "A company formed with any state"
        },
        {
            title: "Employer Identification Number (EIN)"
        },
        {
            title: "Operating Agreement & Articles of Organization",
        },
        {
            title: "Registered Agent service",
        }
    ]

    const showStep1Items = () => {
        return (
            step1Items.map((item, i) => {
                return (
                    <div>
                        <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <span style={{ marginRight: '2%' }}><DoneIcon /></span>
                                <span className='pricingContent' style={{ fontSize: 15, padding: 0, margin: 0 }}>{item.title}</span>
                            </Grid>
                        </Grid>
                    </div>
                )
            })
        )
    }

    const showStep2Items = () => {
        return (
            step2Items.map((item, i) => {
                return (
                    <div>
                        <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0' }}>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <span style={{ marginRight: '2%' }}><DoneIcon /></span>
                                <span className='pricingContent' style={{ fontSize: 15, padding: 0, margin: 0 }}>{item.title}</span>
                            </Grid>
                        </Grid>
                    </div>
                )
            })
        )
    }


    const features = [
        {
            icon: 'company',
            title: 'Form Your Company 🚀',
            para: "What we need from you is your:",
            content: showStep1Items(),
            footerTitle: "Get your company formed in:",
            time: "1 week (on average)"
        },
        {
            icon: 'approve-file',
            title: 'Get everything needed 🤝',
            para: "What you get from us:",
            content: showStep2Items(),
            footerTitle: "Get your EIN in:",
            time: "3 weeks (on average) without SSN",
        },
        {
            icon: 'check',
            title: 'Set up your US bank account 🏦',
            para: "Once you get your EIN (required for a bank account), you're ready to apply for a US bank account through our banking partner. A passport is required for this step.",
            footerTitle: "Get your bank account in:",
            time: "3 - 5 business days",
        },
        {
            icon: 'money',
            title: 'Grow your business 💹',
            para: "You're ready to immerse yourself in your tasks, confident that your business meets compliance standards. Discover additional services such as Taxes, ITIN, Seller Permit, and more.",
            footerTitle: "Get Sarted"
        }
    ]

    const handleClick = () => {
        navigate('/pricing')
        window.scrollTo(0, 0)
    }

    const servicesSlider = () => {
        return features.map((item, i) => (
            <div>
                <div
                    key={i}
                    style={{
                        position: 'relative',
                        padding: '8% 6%',
                        height: 550,
                        borderRadius: 25,
                        margin: '5% 4%',
                        background: '#F7F0FF',
                        textAlign: 'left'
                    }}
                >
                    {/* <img src={`/images/${item.icon}.svg`} style={{ width: 50 }} /> */}
                    <div style={{ borderRadius: 50, padding: '3% 6%', width: 100, color: 'white', background: 'linear-gradient(to right, blue 20%, #8000ff 80%)' }}>Step {i + 1}</div>
                    <h3 style={{ margin: '10% 0 0', fontWeight: 600, fontSize: 25, }}>{item.title}</h3>
                    <p style={{ opacity: '80%', marginTop: '3%' }}>
                        {item.para}
                    </p>
                    {item.content}
                    <div style={{ background: '', position: 'absolute', bottom: '5%', width: '85%' }}>
                        {
                            i == 3 ?
                                <>
                                    <Button onClick={handleClick} endIcon={<ArrowForwardIosIcon />} variant='contained' style={{ padding: '5% 8%', borderRadius: 50, background: 'black', color: 'white', boxShadow: 'none', fontWeight: 500, fontSize: 14, display: 'flex', justifyContent: 'left', textAlign: 'left' }}>
                                        Get Started
                                    </Button>
                                </>
                                :
                                <>
                                    <p style={{ opacity: '80%', marginBottom: '3%' }}>{item.footerTitle}</p>
                                    <Button fullWidth variant='contained' style={{ padding: '4%', borderRadius: 10, background: 'white', color: 'black', boxShadow: 'none', fontWeight: 500, fontSize: 14, display: 'flex', justifyContent: 'left', textAlign: 'left' }}>
                                        <AccessTimeIcon style={{ marginRight: '2%' }} /> {item.time}
                                    </Button>
                                </>
                        }
                    </div>
                </div>
            </div>
        ));
    };




    return (
        <div style={{ padding: matches_md ? '3% 0' : '0 4% 3%', overflowX: 'hidden', position: 'relative' }}>
            <ArrowBackIosIcon
                fontSize='large'
                onClick={handlePrev}
                style={{ display: 'block', position: 'absolute', zIndex: 99, top: '55%', left: matches_md ? '3%' : '2%', cursor: 'pointer', opacity: '70%' }}
            />

            <Grid container spacing={0} className='getStartedSection' style={{ margin: 0 }}>
                <Grid item xs={12}>
                    <h2 className='featuresHeading' style={{ textAlign: matches_md ? 'left' : 'center', width: matches_md ? '95%' : '50%', margin: 'auto' }}>
                        Getting Started with <span className='gradientText'>Boosty</span> is Supper Simple!
                    </h2>

                    <div style={{ width: '100%', position: 'relative', background: '', padding: 0, marginTop: '2%' }}>
                        <Slider ref={sliderRef} {...settings}>
                            {servicesSlider()}
                        </Slider>
                    </div>

                </Grid>
            </Grid>
            <ArrowForwardIosIcon
                fontSize='large'
                onClick={handleNext}
                style={{ display: 'block', position: 'absolute', zIndex: 99, top: '55%', right: matches_md ? '3%' : '2%', cursor: 'pointer', opacity: '70%' }}
            />

        </div>
    )
}

