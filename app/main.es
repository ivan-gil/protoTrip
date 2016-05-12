import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './router.es';
import MainLayout from './scripts/components/main_layout.es';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './scripts/reducers/index'

var store = createStore(reducer);

ReactDOM.render(<Provider store={store}>{ Router }</Provider>,
    document.getElementById('proto-trip'));

export default store