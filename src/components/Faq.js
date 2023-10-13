import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button } from "@mui/material";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faqData = [
        {
            ques: "Do I need to be a US citizen to incorporate with Micahguru?",
            ans: "Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship. You do not need to be a US citizen to incorporate."
        },
        {
            ques: "Can you explain the process of incorporating with Micahguru?",
            ans: "Explanation of the process to incorporate with Micahguru."
        },
        {
            ques: "What does LLC (Limited Liability Company) mean?",
            ans: "Explanation of what LLC means."
        },
        {
            ques: "Can you explain the process of incorporating with Micahguru?",
            ans: "Explanation of the process to incorporate with Micahguru."
        },
        {
            ques: "What is the role of a Registered Agent?",
            ans: "Explanation of the role of a Registered Agent."
        }
    ];


    return (
        <div className='faqSection'>
            <div className='faq'>
                <center><h2 className='bigHeading' style={{ fontSize: '45px', marginBottom: '7%' }}>Frequenly Asked <span style={{ color: '#FF6326' }}>Questions</span></h2></center>

                {faqData.map((item, index) => (
                    <Accordion className='faqItem' onChange={handleChange(`panel${index + 1}`)} key={`accordion-${index}`}>
                        <AccordionSummary style={{ background: 'white' }} aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                            <Typography style={{ fontSize: '23px', fontWeight: '600' }}>
                                {item.ques}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '18px' }}>
                                {item.ans}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}