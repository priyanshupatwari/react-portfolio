import React, { useEffect } from 'react'
import TeamImg from '../common/image/team2-min.jpg'
import Body from '../common/Body'

function Services() {
  useEffect(() => {
    document.title = "Tech Help | About Us"
   }, []);
  return (
    <Body
      title={<> We make your <span className='highlight'>business</span> look great. We are </>}
      imgsrc={TeamImg}
      btn="contact us"
      visit="/contact"
    />
  )
}
export default Services
