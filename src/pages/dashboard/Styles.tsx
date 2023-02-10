import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    root: {
        // background: theme.custom?.background,
        // height: 1100
    },
    root2: {
        border: "1px solid black"
    },
    bottom: {
        height: 50,
    },
    dashboard: {
        background: theme.custom?.background,
    }

}))

export default useStyles
