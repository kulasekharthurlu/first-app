import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => console.log(count), [count])
    return (
        <div>
            <p>your clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Here</button>
        </div>
    );
};

export default UseEffect;