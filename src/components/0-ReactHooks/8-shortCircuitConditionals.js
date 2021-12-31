import React from 'react'

const App = () => {
 const x = '', y = 'truthy value';
 return (
  <div>
   <p>{x || "This will show"}</p>
   <p>{y && "This will show"}</p>
  </div>
 )
}

export default App
