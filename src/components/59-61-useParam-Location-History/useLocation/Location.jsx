import React from 'react'
import './style.css'

import { useLocation } from 'react-router-dom'

function Location() {
 
 const location = useLocation();
 // console.log(location);

 const path = location.pathname;
 let canSee = (path === '/users/robert/shaw') ? 'certainly' : 'NOT';
 return (
  <div>
   <h2>Your location is <span>{path}</span></h2>
   <span>So you can {canSee} see button</span>
   {
    (path === `/users/robert/shaw`) ? 
    (<button onClick={()=>alert('Hi')}>Only for /user/robert/shaw</button>):null
   }
  </div>
 )
}
export default Location
