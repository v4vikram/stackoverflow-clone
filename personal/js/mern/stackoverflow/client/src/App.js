import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './app.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar} from './components';
import AllRoutes from './AllRoutes';
import {fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users';

const App = () => {
  const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(fetchAllQuestions());
        dispatch(fetchAllUsers())
      },[dispatch])
  return (
    <div className='app'>
     
      <Router>
        <Navbar/>
        <AllRoutes />
      </Router>
      
    </div>
  )
}

export default App