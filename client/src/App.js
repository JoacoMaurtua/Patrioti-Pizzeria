import './App.css';
import axios from 'axios';
import React, {useState,useEffect} from 'react';

function App() {
  const [message, setMessage] = useState("...Loading");

  useEffect(()=>{
    axios.get('/api/message')
        .then(res=> setMessage(res.data.data))
        .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      <h1>This is my first full stack aplication</h1>
      <h2>This is my first message:{message}</h2>
    </div>
  );
}

export default App;
