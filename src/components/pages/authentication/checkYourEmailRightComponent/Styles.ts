import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // marginTop: 120,
    flexDirection: 'column',
    boxSizing: 'border-box',
    // background: 'rgba(127, 63, 152, 0.05)',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'column',
    '& .MuiTypography-root': {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: theme.palette.text.primary,
      marginBottom: 10,

    },
    '& .MuiLink-root': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      fontWeight: 600,
      cursor: "pointer"
    },
  },
}))

export default useStyles
