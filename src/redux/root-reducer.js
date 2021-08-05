import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import hostelRoomsReducer from "./rooms/hostel-rooms/hostel-rooms-reducer";
import hotelRoomsReducer from "./rooms/hotel-rooms/hotel-rooms-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    hostelRooms: hostelRoomsReducer,
    hotelRooms: hotelRoomsReducer
});

export default rootReducer;