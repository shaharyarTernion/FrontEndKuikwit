import React from 'react'
import Button from '@mui/material/Button';
// import { useTheme } from '@mui/system';
import Typography from '@mui/material/Typography';

interface Props {
  text: string
}

const AuthButton: React.FC<Props> = ({ text }) => {
  // const theme = useTheme()
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        width: '300px',
        height: '40px',
        margin: '10px 0px 10px 0px',
        borderRadius: '5px',
        textTransform: 'capitalize',
        
        // color: theme.palette.secondary.main
      }}    >
      <Typography sx={{fontWeight: 600, fontSize: "14px"}}>  {text}</Typography>

    </Button>
  )
}

export default AuthButton