import React, { useEffect, useState } from 'react'
import './style.css'
const Main = () => {
 const [num, setNum] = useState(0)
 const [nums, setNums] = useState(0)

 useEffect(() => { 
  console.log('Called Only Once after the browser loads i.e. render method called for 1st time.');
 }, [])//Componnent Did Mount
 useEffect(() => {
  console.log('Called every time DOM loads i.e. render() method called');
 })//Component did update
 useEffect(() => {
  console.log('Called only when `num`\'s state changes.');
 }, [num])//num did update
 return (
  <div style={style}>
   <button onClick={() => setNum(num + 1)} >Clicked me {num} times</button>
   <button onClick={() => setNums(nums + 1)} >Clicked me {nums} times</button>
  </div>
 )
}
const style = {
 display: 'flex',
 flexDirection: 'column',
 width: '100vw',
 height: '50vh',
 alignItems: 'center',
 justifyContent: 'center',
}
export default Main
