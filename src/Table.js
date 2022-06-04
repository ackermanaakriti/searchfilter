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
    </tr>
    {data.map((user)=>
    (
      <td>{user.name}</td>
    ))}
       
   
    </tbody>
  </table></div>
  )
}

export default Table