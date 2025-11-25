
import React, {useContext} from 'react'
import Usercontext from '../context/Usercontext';
import Login from './Login';

function Profile() {
    const { user } = useContext(Usercontext);

    if (!user) return <div>Please login</div>

    return <div>welcome {user.username}</div>;
  return (
    <div>Profile</div>
  )
}

export default Profile