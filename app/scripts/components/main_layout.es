import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header } from './header'

class MainLayout extends Component  {
    render () {
        return (
            <Header></Header>
            <main>
                {this.props.children}
            </main>
        );
    }
};

export default MainLayout;