import React from 'react';
import Surveyitem from './MyComponents/Surveyitem';
import surveyData from './surveyData'
function App() {
  
  return (
    <div>
      {
      surveyData.map((item)=>{
      return (<Surveyitem key = {item.id} question = {item.question} answer_type = {item.answer_type} question_id = {item.id}/> )  
      })
      }
    </div>
  );
}

export default App;
