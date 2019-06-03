import React, { useState } from 'react';

const FunctionWithState = () => {

    const [count, setCount] = useState(0);
    
    return(
    <>
        <p>You have clicked {count} times</p>
        <button onClick={ () => setCount(count + 1) }>Click Me</button>
    </>
    );
}

export default FunctionWithState;