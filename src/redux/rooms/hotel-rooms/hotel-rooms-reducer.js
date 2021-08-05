import {rooms} from "./hotel-rooms.data";

const INITIAL_STATE = {
    hotelRooms: [...rooms],
    hotelRoomsLoading: false,
    hotelRoomsError: ""
};

const hotelRoomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectHotelRooms = state => state.hotelRooms;


export default hotelRoomsReducer;