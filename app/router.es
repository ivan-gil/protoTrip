import React from 'react';
import { IndexRedirect, Router, Route, IndexRoute, browserHistory } from 'react-router'
import RouteNames from './scripts/constants/route_names'
import SignUp from './scripts/components/sign/sign_up'
import SignIn from './scripts/components/sign/sign_in'
import TripCreator from './scripts/components/trip_creator/trip_creator'

// Layouts
import MainLayout from './scripts/components/main_layout';

// Pages
import Home from './scripts/components/home.es';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRedirect to={"/" + RouteNames.HOME}/>
            <Route path={RouteNames.HOME} component={Home}/>
            <Route path={RouteNames.SIGN_IN} component={SignIn}/>
            <Route path={RouteNames.SIGN_UP} component={SignUp}/>
            <Route path={RouteNames.TRIP_CREATOR} component={TripCreator}/>
        </Route>
    </Router>
);