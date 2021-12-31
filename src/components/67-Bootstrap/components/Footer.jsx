import React from 'react'

const Footer = () => {
 const CurrentYear = new Date().getFullYear();
 const fromYear = CurrentYear - 10 ;
 return (
  <div className="footer">
    © TechHelp | All Rights Reserved | {fromYear} to {CurrentYear}
  </div>
 )
}

export default Footer
