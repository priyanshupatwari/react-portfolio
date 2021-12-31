import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import Select from './compnt/Select'
import './index.css'

export default function SimpleSelect() {
 const [num, setNum] = useState(null);
 const [showLoad, setShowLoad] = useState(true)
 const [name, setName] = useState(null);
 const [moves, setMoves] = useState(null);
 const handleChange = (event) => {
  setShowLoad(true);
  setNum(event.target.value);
 }

 useEffect(() => {
  async function getData() {
   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
   setShowLoad(false);
   // console.log(res);
   setName(res.data.name)
   setMoves(res.data.moves.length)
  }
  num && getData();
 }, [num]
 )
 return (
  <div>
   <div className="container">
   {
    !num ? <h5>Choose your number to display POKEMON characters' detail</h5> :
     [showLoad ? <CircularProgress /> :
      (<>
       <div>You chose <span>{num}</span></div>
       <div>My name is <span>{name}</span> </div>
       <div>I have <span>{moves}</span> moves</div>
       </>)
     ]
   }
   </div>
   <Select
    num={num}
    handleChange={handleChange}
   // passing function as argument 
   />
  </div>
 );
}

