import React from 'react'
import { useSelector } from 'react-redux'

const Component = () => {
 const myState = useSelector((state) => state.changeTheNumber);

 return (
  <div className="comp">
   <p>This is another componenet</p>
   <h1>{myState}</h1>
   <p>this state has been fetched from redux store</p>
  </div>
 )
}

export default Component
