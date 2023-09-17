import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Avatar, AvatarGroup } from "@mui/material";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiveG } from '@mui/icons-material';

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

    return (
        <div className='faqSection'>
            <div className='faq'>
                <center><h2 className='bigHeading' style={{ fontSize: '45px', marginBottom: '7%' }}>Frequenly Asked Questions</h2></center>
                <Accordion className='faqItem' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{ fontSize: '30px', fontWeight: '600' }}>
                            Do I need to be a US citizen to incorporate with Micahguru?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontSize: '20px' }}>
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='faqItem' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{ fontSize: '30px', fontWeight: '600' }}>
                            Can you explain the process of incorporating with Micahguru?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontSize: '20px' }}>
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='faqItem' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{ fontSize: '30px', fontWeight: '600' }}>
                            What does LLC (Limited Liability Company) mean?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontSize: '20px' }}>
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='faqItem' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography style={{ fontSize: '30px', fontWeight: '600' }}>
                            Can you explain the process of incorporating with Micahguru?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontSize: '20px' }}>
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='faqItem' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography style={{ fontSize: '30px', fontWeight: '600' }}>
                            What is the role of a Registered Agent?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ fontSize: '20px' }}>
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally, irrespective of their citizenship.
                            You do not need to be a US citizen to incorporate.Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                            Micahguru welcomes entrepreneurs internationally,
                            irrespective of their citizenship. You do not need to be a US citizen to incorporate.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}