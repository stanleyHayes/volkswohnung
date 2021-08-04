import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@material-ui/styles";
import {Container, Divider, Typography} from "@material-ui/core";

const RoomsPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {},
            header: {},
            divider: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container>
                <Typography className={classes.header} variant="h4">Rooms</Typography>
                <Divider variant="fullWidth" className={classes.divider} />
            </Container>
        </Layout>
    )
}

export default RoomsPage;