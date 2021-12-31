import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Error from './components/Error'
import Footer from './components/Footer'

const App = () => {
 useEffect(() => {
  document.title = "Tech Help"
 }, []);
 return (
  <>

   <Menu />
   <Switch>
    <Route exact path='/' component={() => <Home />} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/services' render={() => <Services />} />
    <Route component={Error} />

   </Switch>

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(30, 64, 255, 0.89)" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,197.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

   <Footer />
  </>
 )
}

export default App
