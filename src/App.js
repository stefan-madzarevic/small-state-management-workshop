import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0};
  increment = () => {
    this.setState((state) => { return {count: state.count + 1}});
    this.setState((state) => { return {count: state.count + 1}});
    this.setState((state) => { return {count: state.count + 1}});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Clicking on increment button will change it to {this.state.count + 3}.
              <br/>That is happening because when we pass function to setState it will play through each of them.
            </p>
          <button className="pure-material-button-contained" onClick={this.increment}>Increment</button>
            <p> Current Count: {this.state.count}</p>
        </header>
      </div>
    );
  }
}

export default App;
