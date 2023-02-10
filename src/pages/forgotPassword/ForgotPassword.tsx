import React from 'react'
import ForgotPasswordRightComponent from '../../components/pages/authentication/forgotPasswordRightComponent/ForgotPasswordRightComponent'
import LoginLeftContainer from '../../components/shared/molecules/loginLeftContainer/LoginLeftContainer'
import { Grid } from '@mui/material';
const ForgotPassword: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <LoginLeftContainer />
                </Grid>
                <Grid item md={6}>
                    <ForgotPasswordRightComponent />
                </Grid>
            </Grid>


        </>
    )
}

export default ForgotPassword