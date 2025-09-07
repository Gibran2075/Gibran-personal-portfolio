import React from 'react'
import "./styles/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='nav-background'>
                    <ul className='nav-list'>
                        <a className='nav-item' href="#Header">Home</a>
                        <a className='nav-item' href="#Header">About</a>
                        <a className='nav-item' href="#Header">Projects</a>
                        <a className='nav-item' href="#Header">Contact</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar