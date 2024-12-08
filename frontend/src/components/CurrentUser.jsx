import React from 'react';
import { useSelector } from 'react-redux';

const CurrentUser = () => {
    const userName = useSelector((state) => state.user.userName);
    return (<p>Performing User: <b>{userName}</b></p>)
}

export default CurrentUser;