import { useState } from 'react'
import App from './15.useEffectCleanUp'

function Main() {
 const [toggleBtn, setToggleBtn] = useState(true);

 return (
  <>
   <button onClick={() => setToggleBtn(!toggleBtn)}>Show / hide</button>
   {toggleBtn && <App />}
  </>
 )
}

export default Main
