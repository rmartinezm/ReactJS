import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SignUpComponent from './components/signup-component/SignUpComponent';
import LoginComponent from './components/login-component/LoginComponent';
import configureStore from './store/configureStore';
import logoReact from './assets/img/react-logo.png';
import { Row, Col } from 'react-materialize';
import './App.css';
// Parse import
import { config as reactParseConfig, setReactParseDispatch } from 'react-parse'

// Inicialización del Store
const store = configureStore();

const APP_ID = "ReactDatabase";
const MASTER_KEY = "ReactDatabase123456";
const PARSE_SERVER = "http://localhost:1337/parse";
const apiConfig = { baseURL: PARSE_SERVER, appId: APP_ID }
reactParseConfig.init(apiConfig);
setReactParseDispatch(store.dispatch);

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
