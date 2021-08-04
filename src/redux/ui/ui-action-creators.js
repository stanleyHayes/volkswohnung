import {CHANGE_THEME, GET_THEME} from "./ui-action-types";

export const changeTheme = theme => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}


export const getTheme = () => {
    return {
        type: GET_THEME
    }
}