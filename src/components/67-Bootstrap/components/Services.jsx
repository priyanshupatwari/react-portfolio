import React, { useEffect } from 'react'
import Sdata from '../common/Sdata'
import MyCard from '../common/card'

function Services() {
  useEffect(() => {
    document.title = "Tech Help | Services";
    
   }, []);
  return (
    <>
      <div className="cardContainer">
      {
          Sdata.map((val, index) => {
            return (
              <MyCard
                key={index}
                imgSrc={`https://source.unsplash.com/400x200/?${val.title}`}
                title={val.title}
                desc={val.title}
              />
            )
          })
        }
      </div>
    </>
  )
}
export default Services