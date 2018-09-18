import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

// Redux
import { connect } from 'react-redux';
import { login, signUp } from './actions/userAction'

// Components
import Message from './components/message/Message';

let email = "";
let password = "";
let name = "";
let lastname = "";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.updateEmail} placeholder="email"/><br/>
        <input onChange={this.updatePassword} placeholder="password"/><br/>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }

  updateEmail(event){
    console.log(event.target.value);
    email = event.target.value;
  }

  updatePassword(event){
    console.log(event.target.value);    
    password = event.target.value;
  }
}

// Internamente es el que hace la subscripcion al store
const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login(email, password)),
    signUp: () => dispatch(signUp(name, lastname, email, password))
  }
};

// Connect Inyecta el state y los disptach como props
export default connect(mapStateToProps, mapDispatchToProps)(App);
