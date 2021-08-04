import {CHANGE_THEME} from "./ui-action-types";
import {selectTheme} from "../../components/themes/themes";

const INITIAL_STATE = {
    theme: {}
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CHANGE_THEME:
            return {
                ...state,
                theme: selectTheme(action.payload)
            }
        default:
            return state;
    }
}

export default uiReducer;