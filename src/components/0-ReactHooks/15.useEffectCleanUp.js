import React, { useEffect, useState } from 'react'

const App = () => {
 const [widthCount, setWidthCount] = useState(window.screen.width)
 function actualWidth() {
  console.clear();
  console.log(widthCount);
  setWidthCount(window.innerWidth);
 }
 useEffect(() => {
  console.log('mounted');
  window.addEventListener('resize', actualWidth)
  return () => {
   console.log('unmounted');
   window.removeEventListener('resize', actualWidth)
  }
 })
 // console.log(window.screen.width);
 return (
  <div>
   <pre> {widthCount}</pre>
  </div>
 )
}
export default App
// cleanup func removes the `EventListener` as soon as the component unmounts
// otherwise `EventListener` keeps running even after unmounting the component 