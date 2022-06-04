import React from 'react'
import {Users} from './users.js'

function Table({data}) {
 
  return (
    <div> <table>
    <tbody>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>work</th>
      <th>Email</th>
    </tr>
    
    {data.map((user)=>
   
    ( 
      <tr>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td>{user.work}</td>
        <td>{user.email}</td>
      </tr>
   

    )
    )}
       
      
    </tbody>
  </table></div>
  )
}

export default Table