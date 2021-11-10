import React, { useState } from 'react';
import './Count.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1  >{count}</h1>
            <button onClick={() => setCount(count + 1)}>Incresing Order</button>&nbsp;&nbsp;
            <button onClick={() => setCount(count - 1)}>Decresing Order</button>

        </div>
    );
};

export default Counter;