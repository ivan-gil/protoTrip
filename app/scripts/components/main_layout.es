import React, { Component } from 'react'
import Header from './header'

class MainLayout extends Component {
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