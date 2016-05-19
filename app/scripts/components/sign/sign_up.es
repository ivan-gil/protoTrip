import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap'
import browserHistory from 'react-router/lib/hashHistory'
import RouteNames from '../../constants/route_names'
import Actions from '../../actions/sign_actions'
import store from  '../../../main'

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            passValue: this.props.initialPassValue,
            repeatPassValue: this.props.initialPassValue
        };
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeRepeatPass = this.handleChangeRepeatPass.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
    };

    static propTypes = { initialPassValue: React.PropTypes.string};

    static defaultProps = { initialPassValue: '' };

    render() {
        return (
            <div id="sign-form">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                        Email
                        </Col>
                        <Col sm={10}>
                        <FormControl
                            type="text"
                            placeholder="Nickname"
                            value={this.state.userName}
                            onChange={this.handleChangeUserName}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Password
                        </Col>
                        <Col sm={10}>
                            <FormControl
                            value={this.state.passValue}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChangePass}

                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formHorizontalRepPassword"
                        validationState={this.getValidationState()}
                    >
                        <Col componentClass={ControlLabel} sm={2}>
                        Repeat password
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                value={this.state.repeatPassValue}
                                type="password"
                                placeholder="Repeat password"
                                onChange={this.handleChangeRepeatPass}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button
                                type="submit"
                                onClick={() => { this.registerUser()}}>
                            Sign Up
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    };

    registerUser() {
        store.dispatch({
            type: Actions.REG_USER_SUCCESS,
            payload: {
                username: this.state.userName,
                password: this.state.passValue,
                authorized: true
            }

        })
        browserHistory.push('/TRIP_CREATOR@RouteNames');
    };

    getValidationState() {
        if(this.state.userName && this.state.passValue && this.state.passValue === this.state.repeatPassValue ) {
            return 'success'
        } else {
            return 'error'
        }
    };

    handleChangeUserName(e) {
        this.setState({ userName: e.target.value })
    };

    handleChangePass(e) {
        this.setState({ passValue: e.target.value })
    };

    handleChangeRepeatPass(e) {
        this.setState({ repeatPassValue: e.target.value })
    }

}
export default SignUp;