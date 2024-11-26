import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>

          <img src={assets.logo} alt="" />
          <img src={assets.logo} alt="" />
          <p>Welcome to Tomato, where we bring the world's flavors to your doorstep. As passionate food enthusiasts, we curate a diverse range of cuisines, ensuring every meal is a delightful experience. With a commitment to quality and convenience, we strive to make ordering food effortless and enjoyable. Join us in exploring culinary delights from the comfort of your home!</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div >
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

          <h2>GET IN TOUCH</h2>
          <ul>
            <li>8409024185</li>
            <li>shoaibakhtar2910@gmail.com</li>
          </ul>

        </div >
      </div >
      <hr />
      <p>Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
      <p>Powered By <a href="https://shoaibakhtar.org" target="_blank">SHOAIBAKHTAR.ORG</a></p>
    </div >
  )
}

export default Footer
