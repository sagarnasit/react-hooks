import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

const User = (props) => {
    const data = useFetch(`https://api.github.com/users/${props.username}`)

    return (
        <div>
            { !data.loading && data.login }
            <img src={!data.loading && data.avatar_url} alt='Image' />
        </div>
    )

}

export default User;
