import React from 'react';
import './user.css'
import {Link} from 'react-router-dom'; 

const User = ({user}) => {
    console.log(user.user)
  return (
    <Link to={`/users/${user._id}`} className='user-profile-link'>
            <h3>{ user.user.charAt(0).toUpperCase() }</h3>
            <h5>{ user.user }</h5>
    </Link>
  )
}

export default User