import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0};
  increment = () => {
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Clicking on increment button will change it to {this.state.count + 1}.
              <br/>That is happening because state changes will be queued up.
            </p>
          <button className="pure-material-button-contained" onClick={this.increment}>Increment</button>
            <p> Current Count: {this.state.count}</p>
        </header>
      </div>
    );
  }
}

export default App;
