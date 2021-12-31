import React, {useContext} from 'react'
import ComC from './ComC'
import { FirstName, LastName } from './index'
const ComB = () => {
 const fname = useContext(FirstName)
 const lname = useContext(LastName)
 return (
  <>

   <h1 className='blue'>This is Component_B using useConext Hook</h1>
   <h1 className='blue'>Hello {fname + ' ' + lname}</h1>

   <ComC />
  </>
 )
}

export default ComB