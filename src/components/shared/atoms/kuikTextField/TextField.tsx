import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FieldProps {
  name: string;
  id: string;
  label: string;
  typeField?: string
};


const KuikTextField: React.FC<FieldProps> = ({ id, label, name, typeField }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Box component="form" noValidate sx={{
      '& .MuiTextField-root': {
        width: '300px', background: "#fff"
      },
    }}>
      <TextField
        id={id}
        label={label}
        name={name}
        type={!showPassword ? typeField : 'text'}
        size="small"
        InputProps={{
          endAdornment: typeField ? <InputAdornment position="end" onClick={handleClickShowPassword}>{showPassword ? <Visibility sx={{ fontSize: 20 }} /> : <VisibilityOff sx={{ fontSize: 20 }} />}</InputAdornment> : null,
        }}
      />
    </Box>
  )
}

export default KuikTextField