import { makeStyles } from 'tss-react/mui'
// function pxToRem(number: number, baseNumber = 16) {
//   return `${number / baseNumber}rem`
// }
// import { grey } from '@mui/material/colors'

// import pxToRem from '../../../../style/functions/pxToRem'
const useStyles = makeStyles()((theme) => ({
  tabs: {
      color: theme.palette.text.primary
  },
  tab: {
    // width: '80px',
    // height: '24px',
    // borderRadius: '3px',
    // fontFamily: "Inter",
    // fontWeight: 500,
    // fontSize: "12px"

  },
  typography: {},
}))

export default useStyles
