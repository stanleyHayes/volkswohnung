import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@material-ui/styles";
import {Container, Divider, Typography} from "@material-ui/core";

const IndexPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {},
            header: {
                textTransform: 'uppercase'
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container>
                <Typography className={classes.header} variant="h4">Home</Typography>
                <Divider light={true} variant="fullWidth" className={classes.divider} />
            </Container>
        </Layout>
    )
}

export default IndexPage;