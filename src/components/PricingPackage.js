import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button } from "@mui/material";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function PricingTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box className='pricingPackage'>
            <AppBar position="static">
                <Tabs className='pricingPackageBar'
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Formy" {...a11yProps(0)} />
                    <Tab label="Doola" {...a11yProps(1)} />
                    <Tab label="Zen Business" {...a11yProps(2)} />
                    <Tab label="Atlas" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className='pricingTab' value={value} index={0} dir={theme.direction}>
                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Company Formation</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Addres</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>EIN & Operating Agreement</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Business Bank Account</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent' style={{fontWeight: '600', fontSize: '20px'}}>Your Total Cost</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>
                </TabPanel>


                <TabPanel value={value} index={1} dir={theme.direction}>
                                       <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Company Formation</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Addres</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>EIN & Operating Agreement</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Business Bank Account</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent' style={{fontWeight: '600', fontSize: '20px'}}>Your Total Cost</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>
                </TabPanel>



                <TabPanel value={value} index={2} dir={theme.direction}>
                                       <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Company Formation</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Addres</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>EIN & Operating Agreement</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Business Bank Account</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent' style={{fontWeight: '600', fontSize: '20px'}}>Your Total Cost</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>
                </TabPanel>



                <TabPanel value={value} index={3} dir={theme.direction}>
                                       <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Company Formation</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Service For 1 Year</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Registered Agent Addres</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>EIN & Operating Agreement</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CheckIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent'>Business Bank Account</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><CloseIcon fontSize='large'/></p>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{margin: '0', padding: '0'}}>
                        <Grid item xs={8} className='tabLeftCol'>
                            <p className='pricingContent' style={{fontWeight: '600', fontSize: '20px'}}>Your Total Cost</p>
                        </Grid>
                        <Grid item xs={4} className='tabRightCol'>
                            <p><span style={{fontWeight: '600', fontSize: '20px'}}>$149</span> <br/><span style={{fontSize: '14px'}}>+ State Fees</span></p>
                        </Grid>
                    </Grid>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}