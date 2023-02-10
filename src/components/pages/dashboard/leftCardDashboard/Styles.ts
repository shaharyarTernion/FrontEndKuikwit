import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
 
  paper: {
    // position: 'absolute',
    borderRadius: '10px',
    height: '170px',
    width: '415px',
    boxShadow:
      '43px 58px 29px rgba(0, 0, 0, 0.01), 24px 32px 24px rgba(0, 0, 0, 0.03), 11px 14px 18px rgba(0, 0, 0, 0.04), 3px 4px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '16px',
    color: theme.palette.text.secondary,
  },
  // menu: {
  //   color: '#272525',
  //   cursor: 'pointer',
  // },
  figure: {
    // position: 'absolute',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '48px',
    marginLeft: '3rem',
    marginTop: 70,
    color: theme.palette.text.primary
  },
}))

export default useStyles
