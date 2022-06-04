import {useState} from 'react';
import './App.css';
import Table from './Table';
import {Users} from './users.js'



function App() {
  const[query, Setquery]=useState('');
 
  
  const filtered=(Users.filter((item)=>
  (
    item.address.includes(query)
  )))
   
  
  const onchange=(e)=>
  {
   Setquery(e.target.value);
  };
  
  
  

  return (
    <div className="App">
    <div className='search-bar'>
      <input type='text' placeholder='search here' onChange={onchange}/>
       <Table data={filtered} />
    </div>
    </div>
  );
}

export default App;
