import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WithCount from "./WithCount";
import Counter from "./Counter";
const CounterWithCount = WithCount(Counter);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CounterWithCount step={1}/>
          <CounterWithCount step={3}/>
        </header>
      </div>
    );
  }
}

export default App;
