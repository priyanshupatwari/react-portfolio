import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
function Menu() {
 const style = { container: { display: 'flex', backgroundColor: "rgb(19,19,19)", color: "rgb(250,250,250)", height: '4rem', justifyContent: 'space-around', alignItems: 'center' }, Link: { textDecoration: 'none', color: 'rgb(186, 185, 243)', cursor: 'pointer', padding: "5px", fontWeight: '400', fontSize: '1.3rem', letterSpacing: '1px' } }
 const home = { ...style.Link, fontWeight: 'medium', }
 return (<>
  <div style={style.container}>
   {/* NavLink Does have activeClassName */}
   <NavLink style={home} activeClassName="activeClass" exact to='/' >Home</NavLink>
   <NavLink style={style.Link} activeClassName="activeClass" exact to='/services' >Services</NavLink>
   {/* active class will be applied only for /services; Not for /services/anything */}
   <NavLink style={style.Link} activeClassName="activeClass" to='/about' >About Us</NavLink>
   {/* active class will be applied not only for /services But also
    for /services/anything */}
   <NavLink style={style.Link} activeClassName="activeClass" to='/contact' >Contact Us</NavLink>
   
   {/* Link DoesNot have activeClassName */}
   {/* <Link to='/services' style={style.Link}>Services</Link>
   <Link to='/' style={style.Link}>About Us</Link>
   <Link to='/contact' style={style.Link}>Contact Us</Link> */}
   {/* <a href="/contact">f</a> */}
  </div>
 </>
 )
}


export default Menu
