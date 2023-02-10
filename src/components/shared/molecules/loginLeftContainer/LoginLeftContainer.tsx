import { Grid, Typography, Container } from '@mui/material'
import React from 'react'
import Logo from '../../atoms/logo/Logo';
import useStyles from './Styles';

const LoginLeftContainer: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Container className={classes.root} >
                    <Logo />
                    <Grid item >
                        <Typography className={classes.heading} >
                            Get Started in a few clicks
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography className={classes.text}>
                            <span className={classes.green}>
                                Start your 14-day free trial today
                            </span> to boost your customer
                            service while discovering about Kuikwit's capabilities. &nbsp;
                            Chats from all channels at one place.
                        </Typography>
                    </Grid>
                </Container>


            </Grid>
        </>
    )
}

export default LoginLeftContainer