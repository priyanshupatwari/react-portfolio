import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Error() {
 return (
  <div>
   <h1>404 Not Found </h1>
   <h1>Sorry, this page does not exist</h1>
   <NavLink to="/">
    <button className="btn"> Go back</button>
   </NavLink>
  </div>
 )
}

export default Error
