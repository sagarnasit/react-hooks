import React, { useState } from 'react';

const FunctionalComponent = () => {

    const [count, setCount] = useState(0);
    
    return(
    <>
        <p>You have clicked {count} times</p>
        <button onClick={ () => setCount(count + 1) }>Click Me</button>
    </>
    );
}

export default FunctionalComponent;