import React, { useState } from 'react';
import useFetch from './useFetch';

const UserList = () => {

    const [user, setUser] = useState('sagarnasit')
    
    const users = useFetch('https://api.github.com/users');
    const userData = useFetch(`https://api.github.com/users/${user}`)

    return (
        <div>
            <div>
                {
                    Object.keys(userData).length ?
                    <img src={userData.avatar_url} alt='User Avatar' />
                    : ''
                }
            </div>
            <div>
                <select onChange={e => setUser(e.target.value)}>
                    <option value='sagarnasit'>sagarnasit</option>
                    {
                        users.length ?
                        users.map( user => (
                            <option key={user.id} value={user.login}>
                                {user.login}
                            </option>
                        )) : 'Loading'
                    }
            </select>
            </div>
            
        </div>
    )
}

export default UserList;