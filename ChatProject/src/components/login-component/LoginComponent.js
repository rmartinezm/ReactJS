import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginComponent.css';

class LoginComponent extends Component {

    render () {
        return (
            <div>
                <div className="container">
                    <input className="textInput" type="text" placeholder="Full name"/>
                    <input className="textInput" type="email" placeholder="Email"/>
                    <input className="textInput" type="password" placeholder="Password"/>
                    <input className="textInput" type="password" placeholder="Confirm Password"/>
                </div>
                <button className="signUpButton">Sign Up</button>                
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