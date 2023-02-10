import React from 'react'
import Typography from '@mui/material/Typography';
import theme from '../../../../style/theme';

interface Props {
  text: string
}

export const Text: React.FC<Props> = ({text}) => {
  return (
    <Typography sx={{
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.palette.text.secondary
    }}>{text}
    </Typography>
  )
}

export const EmailText: React.FC<Props> = ({text}) => {
  return (
    <Typography sx={{
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.palette.text.primary
    }}>{text}
    </Typography>
  )
}
