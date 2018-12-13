import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WithCount from "./WithCount";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WithCount step={1} render={
              (count, onIncrement, step) => (
                  <Counter count={count} onIncrement={onIncrement} step={step}/>
              )
            }
          />
        </header>
      </div>
    );
  }
}

export default App;
