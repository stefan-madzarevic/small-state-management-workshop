import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {increment} from "./utils/calculations";

class App extends Component {
  state = { count: 0};
  onIncrementButtonClick = () => {
      this.setState(increment)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Clicking on increment button will change it to {this.state.count + this.props.step}.
              <br/>Now we have extracted state change logic to <code>utils/calculations.js</code>
            </p>
          <button className="pure-material-button-contained" onClick={this.onIncrementButtonClick}>Increment</button>
            <p> Current Count: {this.state.count}</p>
        </header>
      </div>
    );
  }
}

export default App;
