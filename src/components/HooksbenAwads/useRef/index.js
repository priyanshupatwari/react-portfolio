import React, { useRef } from 'react'
// useRef is F**king amazing; it's like querrySelector with some back and forth 
// syntax. You get access to the DOM node ie HTML element,
// then just play with it `just like we did in the querrySelector`
{ //In vanilla JS
 // const node = document.querySelector('#id');
 // node.object = 'xxx';
 // node.function(args);
}
{ //In React JS
 // refs.current.object = 'xx';
 // refs.current.function(arg);
}
const Ref = () => {
 const refs = useRef()
 return (
  <div>
  <h1>useRef</h1>
   <button onClick={() => console.log(refs.current)}>
    See the node in console
   </button>
   <button onClick={() => refs.current.focus()}>
    Focus the input field
   </button>
   <button onClick={() => refs.current.hidden = !refs.current.hidden ? true : false}>
    Toggle Hide
   </button>
   <input type="text" ref={refs}/>
  </div>
 )
}

export default Ref
