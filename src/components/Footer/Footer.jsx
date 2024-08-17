import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quod quis, necessitatibus cumque eveniet mollitia dicta sed provident magnam, aliquid ea dolore maiores! Voluptatum dolores id blanditiis voluptate ad temporibus!</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>8409024123</li>
            <li></li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
