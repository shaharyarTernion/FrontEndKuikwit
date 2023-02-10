import React from 'react'
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
// import useStyles from './Styles';    

interface Props {
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
}


const ThirdPartyLoginButton: React.FC<Props> = ({ text, icon }) => {
    // const { classes } = useStyles()
    return (
        <Box sx={{
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            background: '#fff',
            boxShadow: '0px 1px 2px rgba(24, 24, 28, 0.1)',
            borderRadius: '5px',
        }} mt={1} >
            <Box sx={{ marginLeft: 8, fontSize: "12px", marginTop: 1  }} >
                <SvgIcon >
                    {icon}
                </SvgIcon>
            </Box>
            <Typography ml={1} sx={{
                color: "#272525",
                fontSize: "12px",
                fontWeight: "500"
            }}>{text}</Typography>
        </Box >
    )
}

export default ThirdPartyLoginButton