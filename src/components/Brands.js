import * as React from 'react';

import { Grid, TextField, Button, Alert, AlertTitle, Rating, Typography, Avatar, AvatarGroup } from "@mui/material";

export default function Brands() {
    return (
        <div className='root'>

            <Grid container spacing={5} className='brandsBox'>
                <Grid item>
                    <img src='https://www.doola.com/wp-content/themes/doola2/resources/images/backed-by/y-combinator.png' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='https://www.doola.com/wp-content/themes/doola2/resources/images/backed-by/harvard-management-company.png' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='https://www.doola.com/wp-content/themes/doola2/resources/images/backed-by/nexus.png' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='https://www.doola.com/wp-content/themes/doola2/resources/images/backed-by/y-combinator.png' className='logo'/>
                </Grid>
                <Grid item>
                    <img src='https://www.doola.com/wp-content/themes/doola2/resources/images/backed-by/hustle-fund.png' className='logo'/>
                </Grid>
            </Grid>

        </div>
    )
}