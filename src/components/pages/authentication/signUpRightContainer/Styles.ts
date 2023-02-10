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
    marginTop: 10,
    fontSize: '12px',
    width: '300px',
    display: 'flex',
    lineHeight: '15px',
    fontWeight: 450,  
  },
  terms: {
    width: '300px',
  },
  party: {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    // justifyContent  : 'center',
    // flexDirection: 'column'  ,
    height: '40px',
    background: '#fff',
    boxShadow: '0px 1px 2px rgba(24, 24, 28, 0.1)',
    borderRadius: '5px',
  },
  divider: {
    width: '100%',
    alignItems: "center",
    color: "#B7B7B7"
  },
  dividerText:{
    color: theme.palette.text.secondary 
  },
  footer: {
    fontSize: '12px',
    color: theme.palette.text.primary,
    fontWeight: 500,
    lineHeight: '18px',
  },
}))

export default useStyles
