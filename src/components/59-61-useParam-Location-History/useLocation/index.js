import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './Menu'
import Location from './Location'

const App = () => {
 return (
  <>
   <Menu />
   <Switch>
    <Route path='/users/:fname/:lname' component={Location} />
   </Switch>
  </>
 )
}

export default App
