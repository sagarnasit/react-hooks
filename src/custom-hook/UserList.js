import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

const UserList = () => {
    const data = useFetch('https://api.github.com/users');

    console.log(data);
    return (
        <div>
            
            <p>
            { data.loading && 'Loading...' }
            </p>
            <div>
            {!data.loading &&
            data.map( el => (
                <li key={el.id}>{el.login}</li>
            ))}
            </div>
            
        </div>
    )
}

export default UserList;