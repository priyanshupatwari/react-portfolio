import React, { useContext } from 'react'
import { UserContext } from './UserContext'
function About() {
 const { user } = useContext(UserContext)
 return (
  <>
   <h2>About</h2>
   <pre>{JSON.stringify(user, null, 2)}</pre>
  </>
 )
}

export default About

