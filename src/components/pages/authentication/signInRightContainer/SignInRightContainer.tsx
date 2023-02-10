import React from 'react'
import Box from '@mui/material/Box/Box';
import useStyles from './Styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import SignUpTop from '../../../shared/atoms/signUpTop/SignUpTop';
import Heading from '../../../shared/atoms/heading/Heading';
import {Text} from '../../../shared/atoms/text/Text';
import KuikTextField from '../../../shared/atoms/kuikTextField/TextField';
import AuthButton from '../../../shared/atoms/button/AuthButton';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/system';
import ThirdPartyLoginButton from '../../../shared/atoms/thirdPartyLoginButton/ThirdPartyLoginButton';

const GoogleSvgComponent: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.501 12.2332C22.501 11.3699 22.4296 10.7399 22.2748 10.0865H12.2153V13.9832H18.12C18.001 14.9515 17.3582 16.4099 15.9296 17.3898L15.9096 17.5203L19.0902 19.935L19.3106 19.9565C21.3343 18.1249 22.501 15.4298 22.501 12.2332Z" fill="#4285F4" />
            <path d="M12.214 22.5C15.1068 22.5 17.5353 21.5666 19.3092 19.9567L15.9282 17.3899C15.0235 18.0083 13.8092 18.4399 12.214 18.4399C9.38069 18.4399 6.97596 16.6083 6.11874 14.0766L5.99309 14.0871L2.68583 16.5954L2.64258 16.7132C4.40446 20.1433 8.0235 22.5 12.214 22.5Z" fill="#34A853" />
            <path d="M6.12046 14.0767C5.89428 13.4234 5.76337 12.7233 5.76337 12C5.76337 11.2767 5.89428 10.5767 6.10856 9.92337L6.10257 9.78423L2.75386 7.2356L2.64429 7.28667C1.91814 8.71002 1.50146 10.3084 1.50146 12C1.50146 13.6917 1.91814 15.29 2.64429 16.7133L6.12046 14.0767Z" fill="#FBBC05" />
            <path d="M12.2141 5.55997C14.2259 5.55997 15.583 6.41163 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.2141 1.5C8.02353 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97598 7.39166 9.38073 5.55997 12.2141 5.55997Z" fill="#EB4335" />
        </svg>

    )
}

const LinkedinSvgComponent: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="white" />
            <path d="M18.3366 16.0159C18.3366 17.2946 17.3005 18.3307 16.0218 18.3307H3.98474C2.7065 18.3307 1.66992 17.2946 1.66992 16.0159V3.97888C1.66992 2.70017 2.7065 1.66406 3.98474 1.66406H16.0218C17.3005 1.66406 18.3366 2.70017 18.3366 3.97888V16.0159Z" fill="#0078D4" />
            <path d="M4.45312 7.68215H6.76794V15.5525H4.45312V7.68215ZM5.60359 6.75622H5.59063C4.89988 6.75622 4.45312 6.24141 4.45312 5.59835C4.45312 4.94141 4.91377 4.44141 5.61701 4.44141C6.32118 4.44141 6.75498 4.94141 6.76794 5.59835C6.76794 6.24094 6.32118 6.75622 5.60359 6.75622ZM15.5642 15.5525H13.2494V11.34C13.2494 10.3224 12.6823 9.62798 11.7716 9.62798C11.0767 9.62798 10.7008 10.0965 10.5184 10.5493C10.4517 10.7113 10.4716 11.1595 10.4716 11.3859V15.5525H8.15683V7.68215H10.4716V8.89326C10.8054 8.37659 11.3281 7.68215 12.6652 7.68215C14.3216 7.68215 15.5638 8.72381 15.5638 11.0497L15.5642 15.5525Z" fill="white" />
        </svg>

    )
}
const FacebookSvgComponent: React.FC = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.75 9.05347C17.75 4.19148 13.8325 0.25 9 0.25C4.16754 0.25 0.25 4.19141 0.25 9.05347C0.25 13.4475 3.44977 17.0896 7.63281 17.75V11.5982H5.41113V9.05347H7.63281V7.11396C7.63281 4.90759 8.93916 3.68886 10.9378 3.68886C11.8952 3.68886 12.8965 3.8608 12.8965 3.8608V6.02728H11.7932C10.7061 6.02728 10.3672 6.7059 10.3672 7.40213V9.05347H12.7939L12.406 11.5982H10.3672V17.75C14.5502 17.0896 17.75 13.4476 17.75 9.05347Z" fill="#1877F2" />
        </svg>


    )
}


const SignInRightContainer: React.FC = () => {
    const { classes } = useStyles();
    const theme = useTheme()
    console.log(theme, "themea")
    return (
        <>
            <Box className={classes.root}>
                <SignUpTop />
                <Heading heading="Hey, welcome Back"
                />
                <Text text="Enter your credentials to access your account" />
                <Box className={classes.form}>
                    <Box mt={1}>
                        <KuikTextField id="email"
                            label="Email Address"
                            name="email" />
                    </Box>
                    <Box mt={1}>
                        <KuikTextField id="password"
                            label="Password"
                            name="password"
                            typeField="password" />
                    </Box>
                    <Box className={classes.terms} >
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography className={classes.label}>Remember me
                                <Link >Forgot Password?</Link>
                            </Typography>}
                        />
                    </Box>
                    <AuthButton text='Sign In' />
                    <Box className={classes.divider}> <Divider className={classes.dividerText}>or</Divider></Box>
                    <ThirdPartyLoginButton text="Sign in with Google" icon={<GoogleSvgComponent />} />
                    <ThirdPartyLoginButton text="Sign in with Facebook" icon={<FacebookSvgComponent />} />
                    <ThirdPartyLoginButton text="Sign in with Linkedin" icon={<LinkedinSvgComponent />} />
                    <Box className={classes.footer}>
                        <Typography >Need new account?  &nbsp;   <Link >Sign up free</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default SignInRightContainer