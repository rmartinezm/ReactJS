import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input,  Row, Col } from 'react-materialize';
import './LoginComponent.css';

class LoginComponent extends Component {

    render () {
        return (
            <div>
                <Row>
                    <Input s={6} type="text" label="Full name"/>
                    <Input s={6} type="email" label="Email"/>                                
                    <Input s={6} type="password" label="Password"/>
                    <Input s={6} type="password" label="Confirm Password"/>
                </Row>
                <Button className="signUpButton" waves='light'>Sign Up</Button>                
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(LoginComponent);