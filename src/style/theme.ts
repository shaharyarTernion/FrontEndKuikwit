import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import pxToRem from './functions/pxToRem'
declare module '@mui/material/styles' {
  // fix the type error when referencing the Theme object in your styled component
  interface Theme {
    custom?: {
      boxShadow?: string
      background?: string
      opacity?: number
    }
  }
  // fix the type error when calling `createTheme()` with a custom theme option
  interface ThemeOptions {
    custom?: {
      boxShadow?: string
      background?: string
      opacity?: number
    }
  }
}
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      main: '#4D1277',
      // main: '#008E8E',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#6BE900',
    },
    common: {
      black: '#272525',
      white: '#fff',
    },
    text: {
      primary: "#272525", 
      secondary: "#838383"
    },
    success: {
      main: '#4D1277',
    },
    error: {
      main: 'rgba(0, 142, 142, .1)',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  custom: {
    boxShadow:
      '43px 58px 29px rgba(0, 0, 0, 0.01), 24px 32px 24px rgba(0, 0, 0, 0.03), 11px 14px 18px rgba(0, 0, 0, 0.04), 3px 4px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
    background:
      'linear-gradient(219.01deg, rgba(127, 63, 152, .1), rgba(77, 18, 119, .1) 100%)',
    opacity: 0.1,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          position: 'relative',
          backgroundColor: grey[100],
          borderRadius: pxToRem(12),
          minHeight: 'unset',
          padding: pxToRem(4),
        },

        flexContainer: {
          height: '100%',
          position: 'relative',
          zIndex: 10,
        },

        vertical: {
          '& .MuiTabs-indicator': {
            width: '100%',
          },
        },

        indicator: {
          height: '100%',
          borderRadius: pxToRem(8),
          backgroundColor: 'white',
          // boxShadow: boxShadow([0, 1], [5, 1], "#ddd" , 1),
          transition: 'all 500ms ease',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '1 1 auto',
          textAlign: 'center',
          maxWidth: 'unset !important',
          minWidth: 'unset !important',
          minHeight: 'unset !important',
          // fontSize: size.md,
          fontWeight: 400,
          textTransform: 'none',
          lineHeight: 'inherit',
          padding: pxToRem(4),
          borderRadius: pxToRem(8),
          // color: `${dark.main} !important`,
          opacity: '1 !important',

          '& .material-icons, .material-icons-round': {
            marginBottom: '0 !important',
            marginRight: pxToRem(4),
          },

          '& svg': {
            marginBottom: '0 !important',
            marginRight: pxToRem(6),
          },
        },

        labelIcon: {
          paddingTop: pxToRem(4),
        },
      },
    },
  },
})

export default theme
