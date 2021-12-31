import React from 'react'
import { useParams } from 'react-router-dom'
// method 1
// function User({ match }) {
//  const { fname, lname } = match.params;
//  return (<h1 style={{ textAlign: 'center' }}>Hi there, {fname} {lname}</h1>)
// }
// ****
// method 2
function User() {
 const { fname, lname } = useParams();
 return (<h1 style={{ textAlign: 'center' }}>Hi there, {fname} {lname} </h1>)
}
export default User
