import React from 'react'
import Typography from '@mui/material/Typography';

interface Props {
  heading: string
}

const Heading: React.FC<Props> = ({ heading }) => {
  return (
    <Typography sx={{
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      textTransform: "capitalize"
    }}>{heading}
    </Typography>
  )
}

export default Heading