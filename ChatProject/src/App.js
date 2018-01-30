import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LoginComponent  from './components/login-component/LoginComponent'
import configureStore from './store/configureStore'
import logoReact from './assets/img/react-logo.png';
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
          <div className="ComponentContent">
            <LoginComponent />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
