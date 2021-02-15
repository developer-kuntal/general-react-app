import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, deepOrange, orange } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    root: {
        // color: green,
        margin: theme.spacing(1),
        backgroundColor: green
    },
    label: {
        textTransform: 'none'
    }
}))

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <MuiButton
                variant={variant || "contained"}
                size={size || "large"}
                color={color || "primary"}
                onClick={onClick}
                {...other}
                classes={{ root: classes.root, label: classes.label }}>
                {text}
            </MuiButton>
        </ThemeProvider>
    )
}
