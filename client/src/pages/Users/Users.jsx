import React from 'react';
import {LeftSidebar} from '../../components'
import {useLocation} from 'react-router-dom'
import UsersList from './UsersList';

const Users = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="home-container-1">
      <LeftSidebar/>

      <div className="home-container-2">
      <UsersList/>
    </div>
    </div>
  )
}

export default Users