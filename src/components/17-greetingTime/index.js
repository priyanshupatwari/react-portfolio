import React from 'react'

// let currentDate = new Date(2020, 5, 7, 1);
let currentDate = new Date(2020, 5, 7, 1);
let currentHour = currentDate.getHours();
let greeting = '';
let styleSheet = {}

if (currentHour >= 0 && currentHour < 12) {
 greeting = ' Good Morning'
 styleSheet.color = 'green'
} else if (currentHour >= 12 && currentHour < 19) {
 greeting = ' Good Afternoon'
 styleSheet.color = 'orange'
} else {
 greeting = ' Good Night'
 styleSheet.color = 'black'
}
export default function GreetingFunc() {
 return (
  <>
   <h1>Hi Coder,
  <span style={styleSheet}>{greeting}</span>
   </h1>
  </>

 );
}