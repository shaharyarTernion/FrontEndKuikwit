import React from 'react'
import { Grid, } from '@mui/material';
import useStyles from './Styles'
import LeftCardDashboard from '../../components/pages/dashboard/leftCardDashboard/LeftCardDashboard';
import RightCardDashboard from '../../components/pages/dashboard/rightCardDashboard/RightCardDashboard';
import TotalChatsChart from '../../components/pages/dashboard/totalChatsChart/TotalChatsChart';
import TotalNoOfPages from '../../components/pages/dashboard/chatsByPages/ChatsByPages';
import Header from '../../components/layouts/header/Header';

const Dashboard: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            {/* header added */}
            <Grid className={classes.dashboard}>
            <Header />
            {/* Dashboard starts */}
            <Grid pt={2} pl={3} mt={0} className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6} xs={12}>
                            <LeftCardDashboard />
                        </Grid>
                        <Grid item lg={4} md={6} xs={12} >
                            <LeftCardDashboard />
                        </Grid>
                        <Grid item lg={4} md={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={12}>
                                    <RightCardDashboard />
                                </Grid>
                                <Grid item xs={12} md={6} lg={12} mr={8}>
                                    <RightCardDashboard />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid p={2} item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <TotalChatsChart />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TotalNoOfPages />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid p={2} item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <TotalChatsChart />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TotalNoOfPages />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Dashboard Footer */}
            <Grid className={classes.bottom}>

            </Grid>
            {/* Dashboard ends here */}
            </Grid>
           
        </>

    )
}

export default Dashboard