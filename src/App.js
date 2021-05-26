import React from 'react';
import Header from './MyComponents/Header';
function App() {
  let data = [
		{
    "id": "1",
    "question": "what is your name?",
    "answer_type": "text",
  },
  {
    "id": "2",
    "question": "what is your age?",
    "answer_type": "text",
  },
  {
    "id": "3",
    "question": "have you graduated?",
    "answer_type": "checkbox",
  },
  {
    "id": "4",
    "question": "what is your graduation school name?",
    "answer_type": "text",
  }
];
  return (
    <div>
      {
      data.map((item)=>{
      return (<Header key = {item.id} question = {item.question} answer_type = {item.answer_type} question_id = {item.id}/> )  
      })
      }
    </div>
  );
}

export default App;
