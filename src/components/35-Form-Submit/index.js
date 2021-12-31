import React, { useState } from 'react'
import "./style.css";
export default function FormSubmit() {
 const [name, setName] = useState("");
 const [lastname, setLastname] = useState("");
 function inputEvent(e) {
  // console.log(e.target.value);
  setName(e.target.value)
 }
 function inputEvent2(e) {
  // console.log(e.target.value);
  setLastname(e.target.value);
 }
 
 const [fullName, setFullName] = useState("");
 function onSubmits(e) {
  e.preventDefault()
  setFullName(name + ' ' + lastname);
 }
 return (
  <>
   <div className="container">
    <form onSubmit={onSubmits}>

     <h1>Hello <span>{fullName}</span></h1>

     <input type="text" placeholder="Enter your name" value={name} onChange={inputEvent} />
     <input type="text" placeholder="Enter your lastname" value={lastname} onChange={inputEvent2} />
     <button type="submit"> Click me </button>

    </form>

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