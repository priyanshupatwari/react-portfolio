import React, { useState, useEffect } from 'react'
import Hello from './Hello'
import useFetch from '../useFetch'
const Effect = () => {
 const [showHello, setShowHello] = useState(true);

 function localStore() {
  if (localStorage.getItem('count')) {
   return JSON.parse(localStorage.getItem('count'))
  }else{
   return 0;
  }
 }
 const [count, setCount] = useState(localStore);
 const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
 useEffect(() => {
  localStorage.setItem('count', JSON.stringify(count))
 }, [count])

 return (
  <>
   <h1>useEffect</h1>

   <i>Decrement</i>
   <button onClick={() => setCount(count - 1)}>
    Count :  {count}
   </button>
   <i>Increment</i>
   <button onClick={() => setCount(count + 1)}>
    Count :  {count}
   </button>
   <div>{!data ? "loading..." : data}</div>
   <div>{loading ? "loading..." : data}</div>

   <i>see console</i>
   {/* toggleButton */}
   <button onClick={() => setShowHello(!showHello)}>
    toggle Hello.jsx
  </button>
   {showHello && <Hello />}

  </>
 );
}

export default Effect