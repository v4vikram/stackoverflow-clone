import React from 'react';
import { HomeMainbar, LeftSidebar, RightSidebar } from '../../components';

const Questions = () => {
  // console.log(question)
  return (
    <div className="home-container-1" style={{marginTop: '50px'}}>
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar/>
        {/* <p>{question.id}</p> */}
        <RightSidebar />
      </div>
    </div>
    
  )
}

export default Questions