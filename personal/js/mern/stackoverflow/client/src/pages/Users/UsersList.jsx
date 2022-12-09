import React from 'react'
import { useSelector } from 'react-redux'
import User from './User';
// import {fetchAllUsers} from '../../actions/users'
// import {useDispatch} from 'react-redux'
// fetchAllUsers();

const UsersList = () => {

    const users = useSelector((state)=> state.usersReducer);
    // console.log('users', users)

  return (
   <div className="user-list-container">
      {
        users.map((user)=>(
          <User user={user} key={user?._id}/>
        ))
      }
   </div>
  )
}

export default UsersList