import React, {useState} from "react";
import {Grid, Toolbar, Typography, Menu, MenuItem, Button, Divider} from "@material-ui/core";
import {ExitToApp, Face, Favorite, Menu as MenuIcon, MoreHoriz} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const MobileHeader = ({handleOpen}) => {
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
            toolbar: {},
            divider: {}
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="dense" className={classes.toolbar}>
            <Grid container={true} alignItems="center">
                <Grid item={true} xs={1}>
                    <MenuIcon onClick={handleOpen} />
                </Grid>
                <Grid item={true} xs={10}>
                    <Typography className={classes.brand} variant="h5">VW</Typography>
                </Grid>
                <Grid item={true} xs={1}>
                    <MoreHoriz onClick={handleMenuOpen} />
                    <Menu
                        anchorOrigin={{vertical: "center", horizontal: "center"}}
                        anchorPosition={{left: 0, top: 0}}
                        variant="menu"
                        elevation={1}
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}>
                        <MenuItem>
                            <Link to="/profile" className={classes.link}>
                                <Button startIcon={<Face/>} fullWidth={true}>Profile</Button>
                            </Link>
                            <Divider variant="fullWidth" className={classes.divider}/>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/profile" className={classes.link}>
                                <Button startIcon={<Face/>} fullWidth={true}>Occupations</Button>
                            </Link>
                            <Divider variant="fullWidth" className={classes.divider}/>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/profile" className={classes.link}>
                                <Button startIcon={<Favorite/>} fullWidth={true}>Favorites</Button>
                            </Link>
                            <Divider variant="fullWidth" className={classes.divider}/>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/auth/login" className={classes.link}>
                                <Button startIcon={<ExitToApp/>} fullWidth={true}>Logout</Button>
                            </Link>
                            <Divider variant="fullWidth" className={classes.divider}/>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;