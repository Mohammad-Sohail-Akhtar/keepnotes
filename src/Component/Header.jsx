import React from 'react'
// import logo "../Images/loogo.jpg"
import img from "../Images/logo-removebg-preview.png"
const Header = () => {   
  return (
    <>
      <div className='head'>
        <img src={img} alt='noteimg'/>
        <h1>My Notes</h1>
      </div>
    </>
  )
}

export default Header
