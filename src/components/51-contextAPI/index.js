import React, { createContext } from 'react'
import ComA from "./ComA";

const FirstName = createContext()
const LastName = createContext()

const App = () => {
 return (
  <>
   <FirstName.Provider value={'Robert'}>
    <LastName.Provider value='Shaw'>
     <ComA />
    </LastName.Provider>
   </FirstName.Provider>
   <h1>This is index</h1>
  </>
 )
}

export default App
export { FirstName, LastName }
// export for consumer i.e. ComC
