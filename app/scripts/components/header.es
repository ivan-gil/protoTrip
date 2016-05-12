import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import RouteNames from '../constants/route_names'
import { getUserInfo } from '../selectors/sign_selectors.es'
import { connect } from 'react-redux'


class Header extends Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to={this.getUrl()}>
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

    getUrl() {
        if(this.props.authorized) {
            return RouteNames.TRIP_CREATOR
        } else {
            return '/'
        }
    }
};

export default connect(getUserInfo)(Header)