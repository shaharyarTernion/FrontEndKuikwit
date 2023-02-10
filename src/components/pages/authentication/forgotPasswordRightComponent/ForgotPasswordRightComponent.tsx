import React from 'react'
import Box from '@mui/material/Box/Box';
import useStyles from './Styles';
// import Logo from '../../../../assets/images/logo.svg'
import AuthButton from '../../../shared/atoms/button/AuthButton';
import Heading from '../../../shared/atoms/heading/Heading';
import SignUpFooter from '../../../shared/atoms/signUpFooter/SignUpFooter';
import {Text} from '../../../shared/atoms/text/Text';
import KuikTextField from '../../../shared/atoms/kuikTextField/TextField';
import SignUpTop from '../../../shared/atoms/signUpTop/SignUpTop';
const ForgotPasswordRightComponent: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <SignUpTop />
                <Heading heading="Forgot Password" />
                <Text text="No worries, we’ll send you reset instructions" />
                <Box className={classes.form}>
                    <KuikTextField id="email"
                        label="Email Address"
                        name="email" />

                    <AuthButton text='Sign In'/>
                    <SignUpFooter />
                </Box>
            </Box>
        </>
    )
}

export default ForgotPasswordRightComponent