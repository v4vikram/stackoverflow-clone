import React from 'react';
import { HomeMainbar, LeftSidebar, RightSidebar } from '../../components';

const Home = () => {
  return (
    <div className="home-container-1" style={{marginTop: '50px'}}>
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
    
  )
}

export default Home