import React, { createContext } from 'react'
import ComA from "./ComA";
import './style.css';

const FirstName = createContext()
const LastName = createContext()

const App = () => {
 return (
  <>
   <h1 className="black-200">This is index</h1>
   <FirstName.Provider value={'Robert'}>
    <LastName.Provider value='Shaw'>
     <ComA />
    </LastName.Provider>
   </FirstName.Provider>
  </>
 )
}

export default App
export { FirstName, LastName }
// export for consumer i.e. ComC
