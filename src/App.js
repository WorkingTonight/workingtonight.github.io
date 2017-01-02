import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Working Tonight</h2>
        </div>
        <p className="App-intro">
          Who is Working Tonight?
        </p>
      </div>
    );
  }
}

export default App;
