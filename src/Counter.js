import React  from 'react';

const Counter = ({ count, step, onIncrement }) => (<div>
    <p>
        Clicking on increment button will change it to {count + step}.
        <br/>Now we have extracted state change logic to <code>utils/calculations.js</code>
    </p>
    <button className="pure-material-button-contained" onClick={onIncrement}>Increment</button>
    <p> Current Count: {count}</p>
</div>);

export default Counter;
