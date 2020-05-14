import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../../lib/ProtectedRoute";

import Home from "../Home";
import LandingPage from "../LandingPage";
import LandingDetail from "../LandingPage/LandingDetail";

const AppRoutes = props => {
    return (
        <Switch>
            <ProtectedRoute path="/landing/:slug" component={LandingDetail}/>
            <ProtectedRoute path="/landing" component={LandingPage}/>
            <Route path="/" component={Home}/>
        </Switch>
    )
}

export default AppRoutes;
