import React from 'react'
import Box from '@mui/material/Box/Box';
import useStyles from './Styles';
import SignUpTop from '../../../shared/atoms/signUpTop/SignUpTop';
import Heading from '../../../shared/atoms/heading/Heading';
import { Text, EmailText } from '../../../shared/atoms/text/Text';
import SignUpFooter from '../../../shared/atoms/signUpFooter/SignUpFooter';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link/Link';


const CheckYourEmailRightComponent: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <SignUpTop />
                <Heading heading="Check your email"
                />
                <Text text="We sent a password reset link to:" />
                <EmailText text="andrewjones@example.com" />
                <Box className={classes.form}>
                    <Typography >Didn’t receive the email? &nbsp; <Link>Click to resend
                    </Link> </Typography>
                </Box>
                <SignUpFooter />
            </Box>
        </>
    )
}

export default CheckYourEmailRightComponent