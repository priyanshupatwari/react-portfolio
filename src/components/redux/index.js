import React from 'react'
import { Provider } from 'react-redux'
// custom defined funcs
import store from './store'
import App from './App'
// for redux dev tool
store.subscribe(() => console.log(store.getState()))

const Main = () => {
 return (
  <Provider store={store}>
   <App />
  </Provider>
 )
}

export default Main