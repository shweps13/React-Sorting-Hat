import React, { Component } from 'react';
import logo from './hogwarts.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hogwarts</h1>
        </header>
        <p className="App-intro">
          You will know from which house you came...
        </p>
        <div className="Card">
          <p>ololo</p>
        </div>
      </div>
    );
  }
}

export default App;
