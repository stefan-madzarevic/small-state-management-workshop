import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from "./CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CounterContainer step={3}/>
        </header>
      </div>
    );
  }
}

export default App;
