import React from 'react';
import { LeftSidebar, RightSidebar } from '../../components';
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestions = () => {
  return (
    <div className="home-container-1" style={{marginTop: '50px'}}>
      <LeftSidebar/>
      <div className="home-container-2">
        <QuestionsDetails/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestions