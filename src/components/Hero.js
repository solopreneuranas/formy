import * as React from 'react';
import '../App.css';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';


export default function Hero() {
    const [value, setValue] = React.useState(5);
    return (
        <div className='root'>

            <Grid container spacing={3} className='heroSection'>
                <Grid item xs={12}>
                    <h2 className='bigHeading'>
                        <span style={{ fontWeight: '500', fontSize: '35px' }}> You're </span>Just a step away from having your very own <span style={{color: '#0069ff'}}>PayPal</span> account!
                    </h2>
                    <center><p className='globalPara'>
                        The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.
                    </p>
                    </center>
                    <Button endIcon={<SendIcon />} variant='contained' className='globalButton' style={{
                        background: '#0069ff',
                        padding: '1.5% 4%',
                        marginTop: '4%',
                    }}>GET STARTED</Button><br /><br />
                    <p>Start at $149 + State Fees</p>
                </Grid>
            </Grid>

        </div>
    )
}



// import * as React from 'react';
// import '../App.css';

// import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";
// import { useState } from "react";
// import SendIcon from '@mui/icons-material/Send';
// import zIndex from '@mui/material/styles/zIndex';


// export default function Hero() {
//     const [value, setValue] = React.useState(5);
//     return (
//         <div className='root'>

//             <Grid container spacing={3} className='heroSection'>
//                 <Grid item md={6}>
                    
//                     <h2 className='bigHeading'><span style={{ fontWeight: '500', fontSize: '35px' }}> You're </span>Just a step away from having your very own <span style={{color: '#F0562D'}}>PayPal</span> account!</h2>
//                     <p className='globalPara'>
//                         The all-in-one platform to automate your marketing campaigns over Email, SMS, WhatsApp or chat. Join the 500,000 companies who trust Brevo.
//                     </p>
//                     <Button endIcon={<SendIcon />} variant='contained' className='globalButton' style={{
//                         background: '#F0562D',
//                         padding: '2% 4%',
//                         marginTop: '4%',
//                     }}>GET STARTED</Button><br />
//                     <p>Start at $149 + State Fees</p>
//                 </Grid>

//                 <Grid item md={6} className='center'>
//                     <img src="/images/hero-img-2.svg" style={{ width: '100%' }} />
//                 </Grid>
//             </Grid>

//         </div>
//     )
// }