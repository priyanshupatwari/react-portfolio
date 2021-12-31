import React from 'react'
import Sdata from './Sdata'
import Card from "./Cards";
import './style.css';

function populate(eachObj, index) {
 return (
  <Card
   key={eachObj.id}
   images={eachObj.images}
   title={eachObj.title}
   seasons={eachObj.seasons}
   source={eachObj.source}
   link={eachObj.link}
  />
 )
}

export default function netflixSeries() {
 return (
  <div class="bigContainer">
   {Sdata.map(populate)}
  </div>
 )
}