import React from "react";
import {AppBar, Hidden} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import TabletHeader from "./tablet-header";

const Header = () => {
    return (
        <AppBar variant="outlined">
            <Hidden mdDown={true}>
                <DesktopHeader />
            </Hidden>

            <Hidden mdUp={true}>
                <MobileHeader />
            </Hidden>

            <Hidden only={['sm', 'xs', 'lg', 'xl']}>
                <TabletHeader />
            </Hidden>
        </AppBar>
    )
}

export default Header;