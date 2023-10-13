import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function PricingTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)

    }

    const gridStyle1 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0 2%',
        background: '#F2F2F2'
    }

    const gridStyle2 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0 2%',
        background: 'white'
    }

    return (
        <Box sx={{ width: '100%' }} className='pricingPackage'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                <Tabs scrollButtons="auto" variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example" className='pricingPackageBar'>
                <Tab className='tabBrand'
                        icon={<img src="/images/boosty-logo.svg"
                            width={'100px'} alt="Formy" />}
                        {...a11yProps(0)} />
                    <Tab className='tabBrand'
                        icon={<img src="https://www.doola.com/wp-content/themes/doola2/resources/images/header-logo.png"
                            width={'90px'} alt="Formy" />}
                        {...a11yProps(1)} />
                    <Tab className='tabBrand'
                        icon={<img src="https://res.cloudinary.com/zenbusiness/q_auto,w_40/v1/shared-assets/logo/circle-logo-teal.svg"
                            width={'45px'} alt="Formy" />}
                        {...a11yProps(2)} />
                    <Tab className='tabBrand'
                        icon={<img src="https://uploads-ssl.webflow.com/63f4ac2742efebb29fd0cdae/63f4ac2742efeb20c0d0cf78_mJX1RF-X4f3OIznyHvjikAwR2zfEjLFr8HaPx5_H_8k.jpeg"
                            width={'100px'} alt="Formy" />}
                        {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Company Formation</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$149</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Addres</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>EIN & Operating Agreement</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Business Bank Account</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent' style={{ fontWeight: '600', fontSize: '20px' }}>Your Total Cost</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$149</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>
            </CustomTabPanel>



            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Company Formation</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$299</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Addres</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>EIN & Operating Agreement</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Business Bank Account</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent' style={{ fontWeight: '600', fontSize: '20px' }}>Your Total Cost</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$149</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>
            </CustomTabPanel>



            <CustomTabPanel value={value} index={2}>
                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Company Formation</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$349</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Addres</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>EIN & Operating Agreement</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Business Bank Account</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent' style={{ fontWeight: '600', fontSize: '20px' }}>Your Total Cost</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$149</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>
            </CustomTabPanel>


            <CustomTabPanel value={value} index={3}>
                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Company Formation</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$549</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Registered Agent Addres</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>EIN & Operating Agreement</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle1}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent'>Business Bank Account</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><CheckIcon fontSize='large' /></p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={gridStyle2}>
                    <Grid item xs={8} className='tabLeftCol'>
                        <p className='pricingContent' style={{ fontWeight: '600', fontSize: '20px' }}>Your Total Cost</p>
                    </Grid>
                    <Grid item xs={4} className='tabRightCol'>
                        <p><span style={{ fontWeight: '600', fontSize: '20px' }}>$149</span> <br /><span style={{ fontSize: '14px' }}>+ State Fees</span></p>
                    </Grid>
                </Grid>
            </CustomTabPanel>
        </Box>
    );
}