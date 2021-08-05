import React, {useState} from "react";
import {Button, Divider, Grid, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {ExitToApp, Face, Favorite, KeyboardArrowDown} from "@material-ui/icons";

const DesktopHeader = () => {
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
                textDecoration: "none",
                display: 'block',
                width: '100%'
            },
            brand: {},
            toolbar: {},
            divider: {}
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="dense" className={classes.toolbar}>
            <Grid container={true} alignItems="center" justify="space-around">
                <Grid item={true} lg={2}>
                    <Link to="/" className={classes.link}>
                        <Typography className={classes.brand} variant="h4">VW</Typography>
                    </Link>
                </Grid>
                <Grid item={true} container={true} lg={7} alignItems="center" justify="center">
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Button variant="text" size="large">
                                Home
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/hotels" className={classes.link}>
                            <Button variant="text" size="large">
                                Hotels
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/apartments" className={classes.link}>
                            <Button variant="text" size="large">
                                Apartments
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Button variant="text" size="large">
                                Hostels
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/rooms" className={classes.link}>
                            <Button variant="text" size="large">
                                Rooms
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item={true} lg={2} container={true} justify="flex-end">
                    <Button
                        startIcon={<Face/>}
                        size="large"
                        variant="outlined"
                        onClick={handleMenuOpen}
                        endIcon={<KeyboardArrowDown/>}>
                        Stanley Hayford
                    </Button>
                    <Menu
                        anchorOrigin={{vertical: "center", horizontal: "left"}}
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

export default DesktopHeader;