import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    background: "#fff",
    padding: 15,
    marginLeft: -20,
    marginBottom: 5,
    height: "75px",
    width: "430px",
    borderRadius: "10px",
    boxShadow: "43px 58px 29px rgba(0, 0, 0, 0.01), 24px 32px 24px rgba(0, 0, 0, 0.03), 11px 14px 18px rgba(0, 0, 0, 0.04), 3px 4px 10px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)"

  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    fontSize: '16px',
    color: theme.palette.text.secondary,
    // marginTop: 5,
    padding: 10,
  },
  figure: {
    position: 'absolute',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    fontSize: '30px',
    fontStyle: 'normal',
    marginLeft: -10,
    color: theme.palette.text.primary,


  },
}))

export default useStyles
