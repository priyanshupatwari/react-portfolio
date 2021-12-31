import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// custom defined funcs
import { incNumber, decNumber, incNumberByFive } from './actions'
import Header from './component'
import './App.css'

const Main = () => {
 const myState = useSelector((state) => state.changeTheNumber);
 // A hook to access the redux store's state. This hook takes a
 // selector function as an argument. The selector 
 // is called with the store state.
 const dispatch = useDispatch();
 // A hook to access the redux dispatch function
 // "to dispatch action functions " from './actions'
 // onClick={() => dispatch({ type: 'DECREMENT' })}
 return (
  <>
   <div className="container">
    <h1>Increment / Decrement</h1>
    <h4>Using react and redux</h4>
    <Header />
    
    <div>
     <button onClick={() => dispatch(decNumber(1))}>Decrement</button>
     {/* decNumber() returns object { type: "DECREMENT" } */}
     <input type="text" name="quantity" id="quantity" value={myState} />
     <button onClick={() => dispatch(incNumber())}>Increment</button>
    </div>
    <button onClick={() => dispatch(decNumber(5))}>Decrement By Five</button>
    <button onClick={() => dispatch(incNumberByFive())}>Increment By Five</button>
    
   </div>
  </>
 )
}

export default Main