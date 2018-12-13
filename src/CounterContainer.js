import React, { Component } from 'react';
import {increment} from "./utils/calculations";
import Counter from "./Counter";

class CounterContainer extends Component {
    state = { count: 0 };
    onIncrementButtonClick = () => {
        this.setState(increment)
    }
    render() {
        return (
            <div>
                <Counter step={this.props.step} count={this.state.count} onIncrement={this.onIncrementButtonClick}/>
                <Counter step={this.props.step} count={this.state.count} onIncrement={this.onIncrementButtonClick}/>
            </div>
        );
    }
}

export default CounterContainer;
