import React, { useEffect } from 'react'

const Hello = () => {
 // UseEffect  = ComponentDidMount() or ComponentWillUnmount() or ComponentDidUpdate()
 // DependencyList: []                  return()=>{}              nothing
 useEffect(() => {
  console.log('render : Hello.jsx');
  return () => {
   console.log('Unmounted : Hello.jsx')
  }
 }, [])
 
 return (<h3><i> Hello.jsx </i> Mounted</h3>)
}

export default Hello
