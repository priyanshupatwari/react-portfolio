import React from 'react'
import {NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function Menu() {
 return (
  <>
   <Navbar bg="light" expand="lg">
    <Navbar.Brand className='nav-brand px-2 rounded' href="#home">TechHelp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto mt-2">
      <NavLink className='mx-2 nav-link px-4 py-1 rounded' activeClassName="activeClass" exact to='/' >Home</NavLink>
      <NavLink className='mx-2 nav-link px-4 py-1 rounded' activeClassName="activeClass" to='/services' >Services</NavLink>
      <NavLink className='mx-2 nav-link px-4 py-1 rounded' activeClassName="activeClass" to='/about' >About Us</NavLink>
      <NavLink className='mx-2 nav-link px-4 py-1 rounded' activeClassName="activeClass" to='/contact' >Contact Us</NavLink>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  </>
 )
}


export default Menu
