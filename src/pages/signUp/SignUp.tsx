import React from 'react'
import LoginLeftContainer from '../../components/shared/molecules/loginLeftContainer/LoginLeftContainer'
import { Grid } from '@mui/material';
import SignUpRightContainer from '../../components/pages/authentication/signUpRightContainer/SignUpRightContainer';
const SignUp: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <LoginLeftContainer />
                </Grid>
                <Grid item md={6}>
                    <SignUpRightContainer />
                </Grid>
            </Grid>


        </>
    )
}

export default SignUp