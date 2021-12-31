import React, { useReducer } from 'react'
import  ReducerComplex from './useReducer_Todo'
function reducer(state, action) {
 switch (action.type) {
  case 'increment':
   return state + 1;
  case 'decrement':
   return state - 1;
  default:
   return state;
 }
}
const Reducer = () => {
 const [state, dispatch] = useReducer(reducer, 0)
 return (
  <>
  <h1>useReducer</h1>
  <h4>1<sup>st</sup></h4>
   <div>Count: {state}</div>
   <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
   <button onClick={() => dispatch({ type: "increment" })}>increment</button>
  <h4>2<sup>nd</sup></h4>
  <ReducerComplex/>
  </>
 ) 
}

export default Reducer
//1 23 00
