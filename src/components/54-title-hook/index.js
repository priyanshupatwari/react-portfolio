import React, { useState, useEffect } from 'react'
import './style.css'
let clear = false;
const Main = () => {
 const [num, setNum] = useState(0)
 useEffect(() => {
  document.title = `You clicked me ${num} times `;
  document.getElementById('heading').innerText = ` You clicked me ${num} times`;
 })
 function clickIt(params) {
  if (clear === false) {
   clear = true;
   setTimeout(() => {
    clear = false;
    document.getElementById('heading').innerText = ``;
   }, 3000);
  }
  setNum(num + 1);
 }

 return (
  <div>
   <h1 id="heading"></h1>
   <button onClick={clickIt}>
    Click me {num}
   </button>
  </div>
 )
}

export default Main
