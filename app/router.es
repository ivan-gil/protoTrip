import React from 'react';
import { IndexRedirect, Router, Route, IndexRoute, DefaultRoute } from 'react-router'
import browserHistory from 'react-router/lib/hashHistory'
import RouteNames from './scripts/constants/route_names'
import SignUp from './scripts/components/sign/sign_up'
import SignIn from './scripts/components/sign/sign_in'
import PlacesContainer from './scripts/components/trip_creator/places_container'

// Layouts
import MainLayout from './scripts/components/main_layout';

// Pages
import Home from './scripts/components/home.es';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route path={RouteNames.SIGN_IN} component={SignIn}/>
            <Route path={RouteNames.SIGN_UP} component={SignUp}/>
            <Route path={RouteNames.TRIP_CREATOR} component={PlacesContainer}/>
        </Route>
    </Router>
);