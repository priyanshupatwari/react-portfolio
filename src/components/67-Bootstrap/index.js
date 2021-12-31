import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { BrowserRouter } from 'react-router-dom'
const Main = () => {
 // let showFooter = true;
 return (
  <BrowserRouter>
   <App /> 
  </BrowserRouter>
 )
}

export default Main
