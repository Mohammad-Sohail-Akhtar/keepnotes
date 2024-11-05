import React from 'react'

const Footer = () => {
    let time = new Date().getFullYear();
  return (
    <> 
    <div className='footer'>
      Made with love ❤️ {time}
    </div>
    </>
   
  )
}

export default Footer
