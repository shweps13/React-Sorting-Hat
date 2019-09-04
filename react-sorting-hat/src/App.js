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
          <h2>Answer the questions</h2>
          <p>Who was the house ghost in Slytherin? (Bloody Baron)</p>
          <p>Where are located Ravenclaw common room and dormitories? (in a tower)</p>
          <p>To which element corresponds Hufflepuff? (earth)</p>
          <p>Who was the house ghost in Gryffindor? (Sir Nicholas de Mimsy-Porpington)</p>
          <p>Who was the house ghost in Ravenclaw? (Grey Lady)</p>
          <p>Who was the house ghost in Hufflepuff? (Fat Friar)</p>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
