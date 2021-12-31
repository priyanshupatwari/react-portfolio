import React from 'react'
import { Route, Redirect, Switch, useHistory } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/' component={() => <Home name="home" />} />
          <Route exact path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/services' render={() => <Services name='services' />} />
          {/* *****it's here***** */}
          <Route component={Error} />
          <Redirect to='/' />
          {/* *****it's here***** */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
