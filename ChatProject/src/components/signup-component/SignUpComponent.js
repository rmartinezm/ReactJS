import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input,  Row } from 'react-materialize';
import './SignUpComponent.css';

class SignUpComponent extends Component {

    render () {
        return (
            <div>
                <Row className="content">
                    <Input s={9} type="text" label="Full name"/>
                    <Input s={9} type="email" label="Email"/>                                
                    <Input s={9} type="password" label="Password"/>
                    <Input s={9} type="password" label="Confirm Password"/>
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

export default connect(mapStateToProps)(SignUpComponent);