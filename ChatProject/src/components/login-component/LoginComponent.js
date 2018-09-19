import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input,  Row } from 'react-materialize';
import './LoginComponent.css';

class LoginComponent extends Component {

    render(){
        return(
            <div>
                <Row className="content">
                    <Input s={9} type="email" label="Email"/>                                
                    <Input s={9} type="password" label="Password"/>
                </Row>
                <Button className="loginButton" waves='light'>Login</Button>  
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