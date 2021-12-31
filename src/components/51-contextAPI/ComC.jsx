import React from 'react'
import { FirstName, LastName } from './index.js'

const ComC = () => {
 return (
  <>
   <FirstName.Consumer>
    {(fname) => {
     //takes callback func for accessing 
     //the value argument
     return (
      <LastName.Consumer>
       {(lname) => <h1>Hello {fname + ' ' + lname}</h1>}
      </LastName.Consumer>
     )
    }}
   </FirstName.Consumer>
   <h1>This is Component_C</h1>
  </>
 )
}

export default ComC