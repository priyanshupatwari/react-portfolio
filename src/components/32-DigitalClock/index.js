import React, { useState } from 'react'
import "./style.css";

export default function Counter() {
 let time = new Date().toLocaleTimeString();
 const [ctime, setTime] = useState(time);
 // useState returns `a variable` and `a funtion` that changes its
 // state even in the DOM
setInterval(() => {
 time = new Date().toLocaleTimeString();
 setTime(time)
}, 1000);

 return (
  <>
   <div className="container">
    <h1>{ctime}</h1>
   </div>
  </>
 )
}
