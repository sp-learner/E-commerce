import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="content">
            <div className="row1">
                <img src={logo2} alt="" />
                <h4>Address: Lahore Road, Sheikhupura</h4>
                <h4>E-mail: Example@gmail.com</h4>
                <h4>Phone: 0092 356 3656210</h4>
                
            </div>
            <div className="row1">
                <h2>Shopping and Categories</h2>
                <p>Men’s Shopping</p>
                <p>Women’s Shopping</p>
                <p>Kid’s Shopping</p>
            </div>
            <div className="row2">
                <h2>Useful Links</h2>
                <p>Home Page</p>
                <p>About Us</p>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
            <div className="row2">
                <h2>Help & Information</h2>
                <p>FAQ'S</p>
                <p>Shipping</p>
                <p>Tracking ID</p>
            </div>
        </div>     
        <div className="footer-bottom">
        <p>© 2022 Hexashop. All Rights Reserved.</p>
            <div className="footer-social">
                <img src={linkedin} alt=""/>
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />

            </div>
        </div>
    </div>
  )
}

export default Footer
