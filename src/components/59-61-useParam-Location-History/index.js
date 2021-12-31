import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import UseParam from './useParam'
// import UseLocation from './useLocation'
import UseHistory from './useHistory'

const Main = () => {
 return (<>
  <Router>
   {/* <UseParam /> */}
   {/* <UseLocation /> */}
   <UseHistory/>
  </Router>
 </>
 )
}

export default Main
