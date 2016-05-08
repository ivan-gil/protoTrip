import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header.es'

class MainLayout extends Component  {
    render () {
        return (
            <div className="app">
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default MainLayout;