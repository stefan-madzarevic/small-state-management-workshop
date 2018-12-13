import React, { Component } from 'react';
import {increment} from "./utils/calculations";

class WithCount extends Component {
    state = { count: 0 };
    onIncrementButtonClick = () => {
        this.setState(increment)
    }
    render() {
        return (
            <div>
                {
                    this.props.render(
                        this.state.count,
                        this.onIncrementButtonClick,
                        this.props.step
                    )
                }
            </div>
        )
    }
};

export default WithCount;