import React from 'react'
import Surveyitem from './MyComponents/Surveyitem'
import surveyData from './surveyData'
import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([]);
  
  let url = "https://jsonplaceholder.typicode.com/users";
  const getUsers = () => {
    axios.get(url)
    .then((response)=>{
      const allUsers = response.data;
      setUsers(allUsers);
      console.log(allUsers);  
    })
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div>
      {
      users.map((item)=>{
      return (<Surveyitem key = {item.id} questionData = {item}/> )  
      })
      }
    </div>
  );
}

export default App;
