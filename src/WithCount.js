import React, { Component } from 'react';
import {increment} from "./utils/calculations";

const WithCount = (WrappedComponent) => class extends Component {
    state = { count: 0 };
    onIncrementButtonClick = () => {
        this.setState(increment)
    }
    render() {
        return <WrappedComponent count={this.state.count} onIncrement={this.onIncrementButtonClick} step={this.props.step}/>
    }
};

export default WithCount;