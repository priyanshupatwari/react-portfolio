import React, { useEffect } from 'react'
import { useForm } from './useForm'
const Main = () => {
 // Custom made Hook
 const [values, handleChange] = useForm({ email: '', password: '' })

 return (
  <>
  <h1>useState / Custom Hook</h1>
   <input type="text" name='email' value={values.email} onChange={handleChange} />
   <input type="password" name='password' value={values.password} onChange={handleChange} />
  </>
 )
}

export default Main
