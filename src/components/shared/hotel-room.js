import React from "react";
import {Avatar, Card, CardContent, CardHeader, CardMedia, makeStyles, Typography} from "@material-ui/core";

const HotelRoom = ({hostelRoom}) => {
    const useStyles = makeStyles(theme => {
        return {
            card: {},
            divider: {},
            image: {},
            caption: {},
            value: {},
            occupied: {},
            available: {}
        }
    });

    const classes = useStyles();

    const getStatus = status => {
        switch (status) {
            case 'AVAILABLE':
                return <Typography className={classes.available} variant="body2">{status}</Typography>
            case 'OCCUPIED':
                return <Typography className={classes.occupied} variant="body2">{status}</Typography>
            default:
                return <Typography className={classes.available} variant="body2">{status}</Typography>
        }
    }
    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader
                title={<Typography variant="h6">{hostelRoom.hotel.name}</Typography>}
                subheader={getStatus(hostelRoom.status)}
                avatar={<Avatar src={hostelRoom.hotel.image}/>}/>
            <CardMedia className={classes.image} component="img" src={hostelRoom.image}/>
            <CardContent>
                <Typography
                    className={classes.value}
                    variant="h4">
                    {hostelRoom.price.currency} {parseFloat(hostelRoom.price.amount)}
                </Typography>

                <Typography
                    className={classes.value}
                    variant="h6">
                    {hostelRoom.bedCount} Beds
                </Typography>

            </CardContent>
        </Card>
    )
}

export default HotelRoom;