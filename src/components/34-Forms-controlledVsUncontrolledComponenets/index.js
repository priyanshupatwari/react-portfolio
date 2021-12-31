import React, { useState } from 'react'
import "./style.css";
export default function Form_N_Hooks() {
 const [ name, setname]=useState("");
 const [ fullName, setFullName]=useState("");

function inputEvent(e) {
 console.log(e.target.value);
 setname(e.target.value)
}

function onSubmit() {
 setFullName(name);
}
 return (
  <>
   <div className="container">

    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter your name" value={name}  onChange={inputEvent}/>
    <button onClick={onSubmit}> Click me </button>
   </div>
  </>
 )
}
// You can't change the value of the input field after adding value attribute in it...of course by default
// This is because in JSX there is concept : controlled and uncontrolled 
// In controlled component, form data is handled by a React 
// componnent
// The alternative is uncontrolled components(In caseof HTML), 
// where form data is handled by the DOM itself 