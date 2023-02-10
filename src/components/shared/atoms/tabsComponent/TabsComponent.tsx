import React, { useState } from 'react'
import { Tabs, Tab, Grid, } from '@mui/material'
import useStyles from './Styles';

const TabsComponent: React.FC = () => {
    const [tabValue,] = useState(0);
    const { classes } = useStyles();
    return (
        <Grid item mt={2.5} >
            <Tabs value={tabValue} className={classes.tabs}>
                <Tab
                    label="My Chats"
                    className={classes.tab}
                />
                <Tab
                    label="Managers"
                    className={classes.tab}
                />
                <Tab
                    label="Agents"
                    className={classes.tab}
                />
            </Tabs>
        </Grid>)

}

export default TabsComponent