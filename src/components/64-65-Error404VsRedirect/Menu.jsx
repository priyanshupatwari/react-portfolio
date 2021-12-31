import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
function Menu() {
 const style = { container: { display: 'flex', backgroundColor: "rgb(19,19,19)", color: "rgb(250,250,250)", height: '4rem', justifyContent: 'space-around', alignItems: 'center' }, Link: { textDecoration: 'none', color: 'rgb(186, 185, 243)', cursor: 'pointer', padding: "5px", fontWeight: '400', fontSize: '1.3rem', letterSpacing: '1px' } }
 const home = { ...style.Link, fontWeight: 'medium', }
 return (
  <div style={style.container}>
   <NavLink style={home} activeClassName="activeClass" exact to='/' >Home</NavLink>
   <NavLink style={style.Link} activeClassName="activeClass" exact to='/services' >Services</NavLink>  
   <NavLink style={style.Link} activeClassName="activeClass" to='/about' >About Us</NavLink>
   <NavLink style={style.Link} activeClassName="activeClass" to='/contact' >Contact Us</NavLink>
  </div>
 )
}


export default Menu
