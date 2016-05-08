import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './scripts/components/main_layout.es';

// Pages
import Home from './scripts/components/home.es';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
        </Route>
    </Router>
);