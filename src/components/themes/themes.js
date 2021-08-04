import {createTheme} from "@material-ui/core";
import {
    BLUE_GREY_THEME,
    BLUE_THEME,
    BROWN_THEME,
    DARK_THEME,
    DEEP_PURPLE_THEME,
    GREY_THEME,
    LIGHT_THEME,
    PURPLE_THEME,
    TEAL_THEME
} from "../../constants/constants";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const purpleTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const blueTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const tealTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const deepPurpleTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const blueGreyTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const greyTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

const brownTheme = createTheme({
    typography: {
        fontFamily: 'Nunito'
    }
});

export const selectTheme = theme => {
    switch (theme) {
        case LIGHT_THEME:
            return lightTheme;
        case DARK_THEME:
            return darkTheme;
        case PURPLE_THEME:
            return purpleTheme;
        case BLUE_THEME:
            return blueTheme;
        case TEAL_THEME:
            return tealTheme;
        case DEEP_PURPLE_THEME:
            return deepPurpleTheme;
        case BLUE_GREY_THEME:
            return blueGreyTheme;
        case GREY_THEME:
            return greyTheme;
        case BROWN_THEME:
            return brownTheme;
        default:
            return lightTheme;
    }
}