import React from 'react';
import { Link } from 'react-router';

class Header extends React.component({
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
});

exports default Header;