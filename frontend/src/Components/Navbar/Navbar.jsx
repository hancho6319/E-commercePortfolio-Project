import React, { useState } from 'react'
import './Navbar.css'

import logo from "../Assets/hancho-logo.jpeg"
import cart from "../Assets/cart-icons-shopping.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [menu, setmenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>HANCHO</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() =>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setmenu("males")}}><Link to='/males'>Males</Link>{menu==="males"?<hr/>:<></>}</li>
            <li onClick={() =>{setmenu("females")}}><Link to='/females'>Females</Link>{menu==="females"?<hr/>:<></>}</li>
            <li onClick={() =>{setmenu("accessories")}}><Link to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/signup'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
