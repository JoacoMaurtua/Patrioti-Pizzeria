import React, {useState} from 'react';
import axios from 'axios';

export default function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleOnSubmit = (event) =>{
      event.preventDefault();
      axios.post('/api/create', {
          firstName,
          lastName
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit = {handleOnSubmit}>
        <p>
            <label>First Name</label><br/>
            <input type="text" onChange = {e=>setFirstName(e.target.value)}/>
        </p>
        <p>
            <label>Last Name</label><br/>
            <input type="text" onChange = {e=>setLastName(e.target.value)} />
        </p>
        <input type="submit"/>
    </form>
  )
}
