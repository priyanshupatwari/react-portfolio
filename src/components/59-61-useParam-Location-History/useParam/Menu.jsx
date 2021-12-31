import React from 'react'
import { NavLink } from 'react-router-dom'
function Menu() {
 const style = {
  container: { display: 'flex', backgroundColor: "rgb(19,19,19)", color: "rgb(250,250,250)", height: '4rem', justifyContent: 'space-around', alignItems: 'center' },
  Link: { textDecoration: 'none', color: 'rgb(186, 185, 243)', cursor: 'pointer', padding: "5px", fontWeight: '400', fontSize: '1.3rem', letterSpacing: '1px' }
 }
 return (<>
  <div style={style.container}>
   <NavLink style={style.Link} to='/users/robert/shaw' >Users</NavLink>
  </div>
 </>
 )
}


export default Menu
