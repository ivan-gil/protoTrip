import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import RouteNames from '../constants/route_names'
import { getUserInfo } from '../selectors/sign_selectors.es'
import { connect } from 'react-redux'


class Header extends Component {
    render() {
        if(this.props.authorized) {
            return (
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to={RouteNames.TRIP_CREATOR}>
                                <a href="#">ProtoTrip</a>
                            </LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <LinkContainer to={RouteNames.HOME}>
                            <NavItem>Log off</NavItem>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return (
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to={'/'}>
                                <a href="#">ProtoTrip</a>
                            </LinkContainer>
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
        }
    }
};

export default connect(getUserInfo)(Header)