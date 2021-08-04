import React from "react";
import ScrollToTop from "./components/shared/scroll-top-top";
import {Route, Switch} from "react-router-dom";
import IndexPage from "./pages/index/index-page";
import {ThemeProvider} from "@material-ui/styles";
import {useSelector} from "react-redux";
import './App.css';
import ApartmentsPage from "./pages/apartments/apartments-page";
import HotelsPage from "./pages/hotels/hotels-page";
import RoomsPage from "./pages/rooms/rooms-page";
import HostelsPage from "./pages/hostels/hostels-page";

function App() {
    const {theme} = useSelector(state => state.ui);

    return (
        <ThemeProvider theme={theme}>
            <ScrollToTop>
                <Switch>
                    <Route exact={true} path="/" component={IndexPage}/>
                    <Route exact={true} path="/apartments" component={ApartmentsPage}/>
                    <Route exact={true} path="/hotels" component={HotelsPage}/>
                    <Route exact={true} path="/hostels" component={HostelsPage}/>
                    <Route exact={true} path="/rooms" component={RoomsPage}/>
                </Switch>
            </ScrollToTop>
        </ThemeProvider>
    );
}

export default App;
