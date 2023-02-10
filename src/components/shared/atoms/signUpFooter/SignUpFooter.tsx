import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';

function SignUpFooter() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", }}>
      <Link>
        <KeyboardBackspaceIcon />
      </Link>&nbsp;
      <Typography sx={{
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "18px",
        color: theme.palette.text.primary,
        marginTop: 0.3
        
      }}>Back To Sign in</Typography>
    </Box>
  )
}

export default SignUpFooter