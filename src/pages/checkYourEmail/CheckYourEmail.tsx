import React from 'react'
import { Grid } from '@mui/material';
import CheckYourEmailRightComponent from '../../components/pages/authentication/checkYourEmailRightComponent/CheckYourEmailRightComponent';
import LoginLeftContainer from '../../components/shared/molecules/loginLeftContainer/LoginLeftContainer';
const CheckYourEmail: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <LoginLeftContainer />
                </Grid>
                <Grid item md={6}>
                    <CheckYourEmailRightComponent />
                </Grid>
            </Grid>


        </>
    )
}

export default CheckYourEmail