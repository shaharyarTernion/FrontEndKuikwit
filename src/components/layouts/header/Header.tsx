import React from 'react'
import { Grid, } from '@mui/material';

import Notification from '../../shared/atoms/notification/Notification';
import useStyles from './Styles'
import ProfileSection from '../../shared/atoms/profileSection/ProfileSection';
import Typography from '@mui/material/Typography';
const Header: React.FC = () => {
    const { classes } = useStyles();
    return (

        <Grid container className={classes.header}>
            <Grid item md={4} pt={3} pl={4} pr={3}>

                <Typography className={classes.typography} >Dashboard</Typography>
                <Typography className={classes.text}>Check your stats and suggestions for using Kuikwit</Typography>
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item md={2} pt={3} pl={3} pr={4}>
                <Grid container wrap="nowrap">
                    <Grid item xs={7}> </Grid>
                    <Grid item xs={2}> <Notification /></Grid>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}><ProfileSection /></Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Header