import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './Menu'
import User from './User'

const App = () => {
 return (
  <>
   <Menu />
   <Switch>
    <Route path='/users/:fname/:lname' component={User} />
   </Switch>
  </>
 )
}

export default App
