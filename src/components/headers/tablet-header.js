import React, {useState} from "react";
import {Grid, Toolbar, Typography, Menu, MenuItem} from "@material-ui/core";
import {Face, Menu as MenuIcon} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const TabletHeader = ({handleOpen}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    const handleMenuOpen = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: "none"
            },
            brand: {},
            toolbar: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="dense" className={classes.toolbar}>
            <Grid container={true} alignItems="center">
                <Grid item={true}>
                    <MenuIcon onClick={handleOpen} />
                </Grid>
                <Grid item={true}>
                    <Typography className={classes.brand} variant="h4">VW</Typography>
                </Grid>
                <Grid item={true}>
                    <Face onClick={handleMenuOpen} />
                    <Menu
                        anchorOrigin={{vertical: "center", horizontal: "center"}}
                        anchorPosition={{left: 0, top: 0}}
                        variant="selectedMenu"
                        elevation={1}
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}>
                        <MenuItem>
                            <Link to="/" className={classes.link}>

                            </Link>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TabletHeader;