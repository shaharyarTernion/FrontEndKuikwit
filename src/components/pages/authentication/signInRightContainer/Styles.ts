import { makeStyles } from 'tss-react/mui'
import theme from '../../../../style/theme'

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // marginTop: 120,
    height: '100vh',
    flexDirection: 'column',
    boxSizing: 'border-box',
    background: 'rgba(127, 63, 152, 0.05)',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'column',
  },

  label: {
    fontSize: '11px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '15px',
    fontWeight: 450,
    '& .MuiLink-root': {
      WebkitAlignItems: 'flex-end',
      textDecoration: 'none',
      marginRight: 25,
    },
  },
  terms: {
    width: '300px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    '& .MuiSvgIcon-root': { fontSize: 20 },
  },
  divider: {
    width: '100%',
    alignItems: 'center',
    color: '#B7B7B7',
  },
  dividerText: {
    color: theme.palette.text.secondary,
  },
  footer: {
    display: "flex" ,
    bottom: 0,
    position: "fixed",
    cursor: "pointer",  
    '& .MuiTypography-root': {
      fontSize: '12px',
      color: theme.palette.text.primary,
      fontWeight: 500,
      lineHeight: '18px',
    },
    '& .MuiLink-root': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
}))

export default useStyles
