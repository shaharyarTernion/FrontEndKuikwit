import React from 'react'
import LoginLeftContainer from '../../components/shared/molecules/loginLeftContainer/LoginLeftContainer'
import { Grid } from '@mui/material';
import SignInRightContainer from '../../components/pages/authentication/signInRightContainer/SignInRightContainer';
const SignIn: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <LoginLeftContainer />
                </Grid>
                <Grid item md={6}>
                    <SignInRightContainer />
                </Grid>
            </Grid>


        </>
    )
}

export default SignIn