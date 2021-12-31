import React from 'react'
import { FirstName, LastName } from './index.js'

const ComC = () => {
 return (
  <>
   <h1 className='red-200'>This is Component_C using this callback hell Of Consumer</h1>
   <FirstName.Consumer>
    {(fname) => {
     //takes callback func for accessing 
     //the value argument
     return (
      <LastName.Consumer>
       {(lname) => <h1 className='red-200'>Hello {fname + ' ' + lname}</h1>}
      </LastName.Consumer>
     )
    }}
   </FirstName.Consumer>
  </>
 )
}

export default ComC