import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fe6b8b',
        },
        secondary: {
            main: '#fff',
        },
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
        },
        MuiPaper: {
            root: {
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                borderRadius: '0px',
                height: 'fit-content',
                // width: '400px',
                // minWidth: '100%',
            },
            rounded: {
                borderRadius: '0px',
            },
        },
        MuiDialog: {
            container: {
                height: 'unset',
            },
            paperWidthSm: {
                width: '100%',
                maxWidth: '400px',
            },
            paper: {
                margin: 'unset',
            },
        },
    },
})

export default theme
