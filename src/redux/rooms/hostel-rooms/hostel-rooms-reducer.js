import {rooms} from "./hostel-rooms.data";

const INITIAL_STATE = {
    hostelRooms: [...rooms],
    hostelRoomsLoading: false,
    hostelRoomsError: ""
};

const hostelRoomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectHostelRooms = state => state.hostelRooms;


export default hostelRoomsReducer;