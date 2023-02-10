import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({

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
  },


}))

export default useStyles
