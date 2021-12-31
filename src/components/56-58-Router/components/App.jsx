import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './Menu'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'

const App = () => {
 return (
  <>
   <Menu />
   <Switch>

    <Route exact path='/' component={() => <Home name="home" />} />
    {/* #()=>: can pass props argument */}
    <Route exact path='/about' component={About} />
    {/* #exact: works only with : /About */}
    <Route path='/contact' component={Contact} />
    {/* #no exact: works also with : /contact/anything; you will land on Contact page */}
    <Route exact path='/services' render={() => <Services name='services'/>} />
    {/* #render vs component: render ? updates modified value & component ? createsNewComponent every mount ;; use any cuz NO performance issue*/}
    <Route component={Error} />
    {/* if none exist */}
   </Switch>
  </>
 )
}

export default App
