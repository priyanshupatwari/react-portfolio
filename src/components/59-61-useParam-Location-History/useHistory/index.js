import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './style.css'
import Menu from './Menu'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'

const App = () => {
 const history = useHistory();
 console.log(history);
 return (
  <>
   <Menu />
   <Switch>
    <Route exact path='/' component={() => <Home name="home" />} />
    <Route exact path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route exact path='/services' render={() => <Services name='services' />} />
    <Route component={Error} />
   </Switch>
   <div className="btnGroup">
    <button className="btn"
     onClick={() => history.goBack()
     }>Go Back
   </button>
    <button className="btn"
     onClick={() => history.push('/')
     }>Homepage
   </button>
    <button className="btn"
     onClick={() => history.goForward()
     }>Go Forward
   </button>
   </div>

  </>
 )
}

export default App
