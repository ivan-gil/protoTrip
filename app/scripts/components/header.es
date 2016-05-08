import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <header>
                <ul className="sign-buttons">
                    <li><button>Sign In</button></li>
                    <li><button>Sign Up</button></li>
                </ul>
            </header>
        );
    }
};

export default Header;