import {useState} from 'react';
import './App.css';
import {Users} from './users.js'

function App() {
  const[query, Setquery]=useState('');
 
  const onchange=(e)=>
  {
   Setquery(e.target.value);
  };


  return (
    <div className="App">
    <div className='search-bar'>
      <input type='text' placeholder='search here' onChange={onchange}/>
      <ul>
 {
   Users.filter((user)=> user.address.includes(query)).map((user)=>
   (
     <li key={user.id}>{user.address}</li>
   ))
 }
       
      </ul>

    </div>
    </div>
  );
}

export default App;
