import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0};
  increment = () => {
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Clicking on increment button will <code>console.log(this.state.count)</code> which will be 0.
              <br/>That is happening because setState is asynchronous function.
            </p>
          <button className="pure-material-button-contained" onClick={this.increment}>Increment</button>
        </header>
      </div>
    );
  }
}

export default App;
