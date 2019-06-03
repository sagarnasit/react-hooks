import React, { useState, useEffect } from 'react';

const FunctionalExample = () => {

    const [ count, setCount ] = useState(0);

    useEffect( () => {
        document.title = `You have clicked ${count} times`;

    }, []);

    function increaseCount() {
        setCount( count + 1 );
    }

    return (
        <div>
            <p>You have clicked {count} times</p>
            <button onClick={increaseCount }>Click Me</button>
        </div>
    );
    
}

export default FunctionalExample;