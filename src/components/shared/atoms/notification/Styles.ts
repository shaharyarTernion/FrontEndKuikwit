import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: '8px 0px 8px 8px !important',
    cursor: 'pointer',
    color: theme.palette.primary.main
  },
}))

export default useStyles
