import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const navbarInstance = (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
);

class Header extends Component {
    
    render() {
        return navbarInstance;
    }
};

export default Header;