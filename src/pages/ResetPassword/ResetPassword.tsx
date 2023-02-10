import React from 'react'
import LoginLeftContainer from '../../components/shared/molecules/loginLeftContainer/LoginLeftContainer'
import { Grid } from '@mui/material';
import ResetPasswordRightComponent from '../../components/pages/authentication/setNewPasswordRightComponent/ResetPasswordRightComponent';
const ResetPassword: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <LoginLeftContainer />
                </Grid>
                <Grid item md={6}>
                    <ResetPasswordRightComponent /> 
                </Grid>
            </Grid>


        </>
    )
}

export default ResetPassword