import React from 'react'
import { Box, } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useStyles from './Styles';

const Notification: React.FC = () => {
    const { classes } = useStyles();
    return (
        <Box
        >
            <Box
                className={classes.root}>

                <NotificationsIcon />
            </Box>



        </Box >
    )
}

export default Notification