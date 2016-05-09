import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import RouteNames from '../constants/route_names'

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
                <LinkContainer to={RouteNames.SIGN_IN}>
                    <NavItem>Sign in</NavItem>
                </LinkContainer>
                <LinkContainer to={RouteNames.SIGN_UP}>
                    <NavItem>Sign up</NavItem>
                </LinkContainer>
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