import React, { useState, useEffect } from 'react';

const EffectHook = () => {

    const [ username, setUsername ] = useState('sagarnasit');
    const [ userData, setUserData ] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(response => {
                setUserData(response);
            });

    }, [username]);

    return (
        <div>
            <div>
                Username: <input type='text' value={username} onChange={ e => setUsername(e.target.value)} />
            </div>

            <div>
                {Object.keys(userData).length ? (
                    <img src={userData.avatar_url} alt='User Avatar' />
                ) : (
                    "Loading"
                )}
            </div>
        </div>
    );
}

export default EffectHook;