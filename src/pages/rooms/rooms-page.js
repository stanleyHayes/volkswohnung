import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@material-ui/styles";
import {Button, Container, Divider, Grid, LinearProgress, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";
import {selectHotelRooms} from "../../redux/rooms/hotel-rooms/hotel-rooms-reducer";
import {Link} from "react-router-dom";
import {selectHostelRooms} from "../../redux/rooms/hostel-rooms/hostel-rooms-reducer";
import Carousel from 'react-multi-carousel';
import {responsive} from "../../utils/utils";
import HotelRoom from "../../components/shared/hotel-room";
import HostelRoom from "../../components/shared/hostel-room";
import {blue} from "@material-ui/core/colors";
import {ChevronRight} from "@material-ui/icons";

const RoomsPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
            },
            header: {
                textTransform: 'uppercase'
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            emptyText: {
                textTransform: 'uppercase'
            },
            link: {
                textDecoration: 'none'
            },
            itemContainer: {
                marginRight: 8,
                marginLeft: 8
            },
            roomsContainer: {
                paddingTop: 32,
                paddingBottom: 32
            },
            moreContainer: {
                paddingTop: 32
            },
            moreButton: {
                color: blue['600'],
                fontWeight: 'bold'
            }
        }
    });

    const classes = useStyles();

    const {hotelRoomsError, hotelRoomsLoading, hotelRooms} = useSelector(selectHotelRooms);

    const {hostelRoomsError, hostelRoomsLoading, hostelRooms} = useSelector(selectHostelRooms);

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography className={classes.header} variant="h4">Rooms</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} className={classes.roomsContainer}>
                    <Grid item={true} xs={12}>
                        <Typography className={classes.header} variant="h4">Hotel Rooms</Typography>
                        <Divider variant="fullWidth" className={classes.divider}/>
                        {hotelRoomsLoading && <LinearProgress variant="query"/>}
                        {hotelRoomsError &&
                        <Alert variant="standard" severity="error" elevation={1}>{hotelRoomsError}</Alert>}
                    </Grid>
                    <Grid item={true} xs={12}>
                        {hotelRooms && hotelRooms.length === 0 ? (
                            <Grid>
                                <Grid>
                                    <Typography variant="h6" className={classes.emptyText}>
                                        No hotel rooms available
                                    </Typography>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item={true} xs={12}>
                                <Carousel
                                    arrows={true}
                                    showDots={false}
                                    autoPlay={true}
                                    infinite={true}
                                    autoPlaySpeed={3000}
                                    responsive={responsive}>
                                    {hotelRooms.map((hotelRoom, index) => {
                                        return (
                                            <div key={index} className={classes.itemContainer}>
                                                <HotelRoom hostelRoom={hotelRoom}/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item={true} className={classes.moreContainer} container={true} justifyContent="flex-end">
                        <Link to="/" className={classes.link}>
                            <Button className={classes.moreButton} endIcon={<ChevronRight/>} variant="text">See all hotel Rooms</Button>
                        </Link>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} className={classes.roomsContainer}>
                    <Grid item={true} xs={12}>
                        <Typography className={classes.header} variant="h4">Hostel Rooms</Typography>
                        <Divider variant="fullWidth" className={classes.divider}/>
                        {hostelRoomsLoading && <LinearProgress variant="query"/>}
                        {hostelRoomsError &&
                        <Alert variant="standard" severity="error" elevation={1}>{hostelRoomsError}</Alert>}
                    </Grid>
                    <Grid item={true} xs={12}>
                        {hostelRooms && hostelRooms.length === 0 ? (
                            <Grid>
                                <Grid>
                                    <Typography variant="h6" className={classes.emptyText}>
                                        No hostel rooms available
                                    </Typography>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item={true} xs={12}>
                                <Carousel
                                    arrows={true}
                                    showDots={false}
                                    autoPlay={true}
                                    infinite={true}
                                    autoPlaySpeed={3000}
                                    responsive={responsive}>
                                    {hostelRooms.map((hostelRoom, index) => {
                                        return (
                                            <div key={index} className={classes.itemContainer}>
                                                <HostelRoom hostelRoom={hostelRoom}/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item={true} className={classes.moreContainer} container={true} justifyContent="flex-end">
                        <Link to="/" className={classes.link}>
                            <Button className={classes.moreButton} endIcon={<ChevronRight/>} variant="text">See all hostel Rooms</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default RoomsPage;