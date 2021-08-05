import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/styles";
import Header from "../headers/header";

const Layout = ({children}) => {
    const useStyles = makeStyles(theme => {
        return {
            content: {
                paddingTop: 50,
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <div className={classes.content}>
                {children}
            </div>
        </Fragment>
    )
}

export default Layout;