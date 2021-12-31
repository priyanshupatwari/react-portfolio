import React, { useState, useMemo } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { UserContext } from './UserContext'

const Context = () => {
 const style = { container: { display: 'flex', backgroundColor: "rgb(19,19,19)", color: "rgb(250,250,250)", height: '4rem', justifyContent: 'space-around', alignItems: 'center' }, Link: { textDecoration: 'none', color: 'rgb(186, 185, 243)', cursor: 'pointer', padding: "5px", fontWeight: '400', fontSize: '1.3rem', letterSpacing: '1px' } }

 const [user, setUser] = useState(null)
 const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
 
 return (
  <>
   <BrowserRouter>

    <h1>useContext : User Login</h1>
    <nav style={style.container}>
     <NavLink exact to='/' style={style.Link} activeClassName='active'>Home</NavLink>
     <NavLink to='/about' style={style.Link} activeClassName='active'>About</NavLink>
    </nav>
    {/* ********************************* */}
    <UserContext.Provider value={providerValue}>
     <Route exact path='/' component={Home}></Route>
     <Route path='/about' component={About}></Route>
    </UserContext.Provider>
    {/* ********************************* */}

   </BrowserRouter>

  </>
 )
}

export default Context
