import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './router.es';
import MainLayout from './scripts/components/main_layout.es';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import store from './scripts/store'



ReactDOM.render(<Provider store={store}>{ Router }</Provider>,
    document.getElementById('proto-trip'));