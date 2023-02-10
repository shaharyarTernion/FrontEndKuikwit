import React from 'react'
import { Avatar, Box } from '@mui/material';
import useStyles from './Styles';
// import profile from 'src/assets/images/profile.jpg'

const ProfileSection: React.FC = () => {
    const {classes} = useStyles()
    return (
        <Box sx={{
            display: 'inline',
           
        }}
            className={classes.profile}>
            <Avatar
            />
        </Box>

    )
}

export default ProfileSection