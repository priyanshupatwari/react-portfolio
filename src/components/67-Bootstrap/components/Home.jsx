import React, { useEffect } from 'react'
import HomeImg from '../common/image/home-min.jpg'
import Body from '../common/Body'

function Home() {
  useEffect(() => {
    document.title = "Tech Help | Home"
   }, []);
  return (
    <Body
      title="Grow your bussiness with"
      imgsrc={HomeImg}
      btn="get started"
      visit="/services"
      btn_2="get to know us"
      visit_2="/about"
    />
  )
}
export default Home
