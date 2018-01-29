import React, { Component } from 'react';
import logoReact from './images/react-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logoReact} className="rotateLogoReact" alt="logo" />
          </div>
          <h1 className="App-title">Chat made with<br />React-Firebase-Redux</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
