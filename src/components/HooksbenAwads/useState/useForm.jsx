import { useState } from 'react'

export function useForm(initialeValue) {
 // useState
 const [values, setValues] = useState(initialeValue)

 return [
  values,
  (e) => {
   setValues({
    ...values,
    [e.target.name]: e.target.value
   })
  }
 ]
}

