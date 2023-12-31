import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {

    const theme = useTheme()
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faqData = [

        {
            ques: "What is Boosty's main service?",
            ans: "Boosty specializes in helping individuals and businesses register their U.S. companies, unlocking access to a range of online services."
        },
        {
            ques: "How does the payment process work at Boosty?",
            ans: "Welcome to Boosty! We make paying easy for you. First, pay half for your Business or Premium package. This covers important things for your business. Once we get the money, we start making your company official. Get a certificate from us! Then, pay the other half to move to the next step, getting your EIN number. Boosty is here to help you every step of the way."
        },
        {
            ques: "What are the advantages of having a U.S. company?",
            ans: "A U.S. company opens the door to global business opportunities, including seamless payment processing and access to major e-commerce platforms."
        },
        {
            ques: "What Documentation is Required?",
            ans: "You will be asked to provide a copy of your ID card or passport and a recent bank statement displaying your name, address, and a date within the last 3 months (with a visible creation date)."
        },
        {
            ques: "How long does it take to get started with Boosty?",
            ans: "The timeline can vary, but we aim for a quick and efficient process so you can enjoy the benefits as soon as possible."
        },
        {
            ques: "How can I get started with Boosty?",
            ans: "To get started, simply reach out to our team, and we'll guide you through the process. Unlock global business potential with Boosty today!"
        }
    ];


    return (
        <div className='faqSection' style={{ position: 'relative' }}>
            <div className='faq' style={{ zIndex: 2, position: 'relative' }}>
                <center><h2 className='faqHeading' >Frequenly Asked <span className='gradientText'>Questions</span>❔</h2></center>

                {faqData.map((item, index) => (
                    <Accordion className='faqItem' onChange={handleChange(`panel${index + 1}`)} key={`accordion-${index}`}>
                        <AccordionSummary style={{ background: 'transparent' }} aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                            <Typography style={{ fontSize: '23px', fontWeight: '600', fontFamily: 'Inter' }}>
                                {item.ques}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '18px', fontFamily: 'Inter' }}>
                                {item.ans}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}