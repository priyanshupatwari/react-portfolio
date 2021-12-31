import React, { useState } from 'react'
import "./style.css";
export default function FormSubmit() {
 const [fullname, setFullname] = useState({
  fname: "",
  lname: '',
  email: '',
  phone: '',
 })

 function inputEvent(e) {
  e.preventDefault();
  const { name, value } = e.target;
  // destructuring e.target.name & e.target.value into { name, value }
  // console.log(e.target.name);
  setFullname((prevValue) => {
   // console.log(prevValue);
   return {
    ...prevValue,
    [name]: value
    // dynamically typed data e.g.[name] => fname : it's value, lname : it's value
    //                                      email : it's value, phone : it's value
   }
  })
 }
 let { fname, lname } = fullname;
 return (
  <>
   <div className="container">
    <form>
     <h1>Hello <span>{fname + " " + lname}</span></h1>
     <input type="text" placeholder="Enter your name" name='fname' value={fullname.fname} onChange={inputEvent} />
     <input type="text" placeholder="Enter your lastname" name='lname' value={fullname.lname} onChange={inputEvent} />
     <input type="text" placeholder="Enter your email" name='email' value={fullname.email} onChange={inputEvent} />
     <input type="text" placeholder="Enter your phone" name='phone' value={fullname.phone} onChange={inputEvent} />

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