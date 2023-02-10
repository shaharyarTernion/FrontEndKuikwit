import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    transition: 'all .2s ease-in-out',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
    '&[aria-controls="menu-list-grow"],&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
  label: {
    color: '#fff',
  },
}))

export default useStyles
