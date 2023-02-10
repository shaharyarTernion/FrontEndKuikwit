import React from 'react'
import Box from '@mui/material/Box/Box';
import useStyles from './Styles';
import SignUpTop from '../../../shared/atoms/signUpTop/SignUpTop';
import Heading from '../../../shared/atoms/heading/Heading';
import {Text, EmailText} from '../../../shared/atoms/text/Text';
import KuikTextField from '../../../shared/atoms/kuikTextField/TextField';
import AuthButton from '../../../shared/atoms/button/AuthButton';
import { useTheme } from '@mui/system';


const ResetPasswordRightComponent: React.FC = () => {
    const { classes } = useStyles();
    const theme = useTheme()
    console.log(theme, "themea")
    return (
        <>
            <Box className={classes.root}>
                <SignUpTop />
                <Heading heading="Set new password"
                />
                <Text text="Set the new password for your account:" />
                <EmailText text="andrewjones@example.com" />
                <Box className={classes.form}>


                    <Box mt={1}>
                        <KuikTextField id="password"
                            label="Password"
                            name="password"
                            typeField="password" />
                    </Box>
                    <Box mt={1}>
                        <KuikTextField id="password"
                            label="Confirm password"
                            name="password"
                            typeField="password" />
                    </Box>

                    <AuthButton text='Reset password' />

                </Box>
            </Box>
        </>
    )
}

export default ResetPasswordRightComponent