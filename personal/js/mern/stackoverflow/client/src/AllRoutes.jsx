import React from 'react';
import {Routes, Route} from "react-router-dom";
import { Home, Auth,Questions, AskQuestions, DisplayQuestions, Tags, Users, UserProfile } from './pages';

const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/questions' element={<Questions/>} />
            <Route path='/askquestions' element={<AskQuestions/>} />
            <Route path='/displayquestions/:id' element={<DisplayQuestions/>} />
            <Route path='questions/get'  element={<AskQuestions/>}/>
            <Route path='/tags'  element={<Tags/>}/>
            <Route path='/getallusers'  element={<Users/>}/>
            <Route path='/users/:id'  element={<UserProfile/>}/>
        </Routes>
   
      
 
  )
}

export default AllRoutes