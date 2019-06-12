import React, { useState } from 'react';

const CounterWithFunction = () => {

    const [count, setCount] = useState(0);
    
    return(
    <div>
        <h1>Counter: {count}</h1>

        <button onClick={ () => setCount(count - 1) }>Decrement</button>
        <button onClick={ () => setCount(count + 1) }>Increment</button>
    </div>
    );
}

export default CounterWithFunction;