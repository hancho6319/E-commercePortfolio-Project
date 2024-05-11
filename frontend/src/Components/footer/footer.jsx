import React from 'react'
import './footer.css'
import footer_logo from '../Assets/hancho-logo.jpeg'
import github from '../Assets/github-3023.png'
import tiktok from '../Assets/Tiktok-Logo-Black.png'
import facebook from '../Assets/Facebook-Icon-PNG-1.png'
import whatsapp from '../Assets/Whatsapp-Icon-PNG 2873.png'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>HANCHO</p>
        </div>
        <ul className='footerLinks'>
          <li>Company</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='footerSocialMedia'>
          <div className='footerIconContainer'>
            <img src={github} alt=''/>
          </div>
          <div className='footerIconContainer'>
            <img src={tiktok} alt=''/>
          </div>
          <div className='footerIconContainer'>
            <img src={facebook} alt=''/>
          </div>
          <div className='footerIconContainer'>
            <img src={whatsapp} alt=''/>
          </div>
        </div>
        <div className='copy_right'>
          <hr/>
          <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default footer