import React, { useState } from 'react'
import "./style.css";

export default function Counter() {
 const [count, setCount] = useState(0);
 // useState returns `a variable` and `a funtion` that changes its
 // state even in the DOM
 // here, count is set to 0 initially
 const IncNum = () => {
  setCount(count+1);
 }
 return (
  <>
   <div className="container">
    <h1>{count}</h1>
    <button onClick={IncNum} className="btn"> Click me </button>
   </div>
  </>
 )
}
