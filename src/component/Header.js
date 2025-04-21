import React from 'react'
import logo from '../image/logo.png'
import '../index.css'

const Header = () => {
  return (
    <>
    <div className='header'>
        <img src={logo} alt='logo' width={35} height={50}/>
        <h1>Google Keep</h1>
    </div>
      
    </>
  )
}

export default Header
