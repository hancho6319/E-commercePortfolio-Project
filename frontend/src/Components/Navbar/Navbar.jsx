import React from 'react'
import './Navbar.css'

import logo from "../Assets/hancho-logo.jpeg"
import cart from "../Assets/cart-icons-shopping.png"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>HANCHO</p>
        </div>
        <ul className='nav-menu'>
            <li>Shop <hr/></li>
            <li>Males</li>
            <li>Females</li>
            <li>Accessories</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart} alt="" />
        </div>
    </div>
  )
}
