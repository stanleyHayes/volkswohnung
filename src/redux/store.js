import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import {LIGHT_THEME, VOLKSWOHNUNG_THEME_KEY} from "../constants/constants";
import {selectTheme} from "../components/themes/themes";

const theme = localStorage.getItem(VOLKSWOHNUNG_THEME_KEY) ? JSON.parse(localStorage.getItem(VOLKSWOHNUNG_THEME_KEY)): LIGHT_THEME;
const INITIAL_STATE = {
    ui: {theme: selectTheme(theme)}
};

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;