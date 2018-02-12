import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SignUpComponent from './components/signup-component/SignUpComponent';
import LoginComponent from './components/login-component/LoginComponent';
import configureStore from './store/configureStore';
import logoReact from './assets/img/react-logo.png';
import { Row, Col } from 'react-materialize';
import './App.css';

// Inicialización del Store
const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div>
              <img src={logoReact} className="rotateLogoReact" alt="logo" />
            </div>
            <h1 className="App-title">Chat made with<br />React-Firebase-Redux</h1>
            <div>
              <img src={logoReact} className="rotateLogoReact" alt="logo" />
            </div>
          </header>
          <Row>
            <Col s={6} className="accountText"><p>If you alredy have an account</p></Col>   
            <Col s={6} className="accountText"><p>Create a new account</p></Col>   
            <Col s={6}><LoginComponent /></Col>     
            <Col s={6}><SignUpComponent /></Col>
          </Row>
        </div>
      </Provider>
    );
  }
}

export default App;
