import React from 'react'
import './ContactUs.css'
import phone from '../../../assets/phone.png'
import custom from '../../../assets/custom.png'

const ContactUs = () => {
  return (
    <div className='contactus'>
    <h1>Get In touch</h1>
      <div className="contact-box">
        <div className="box11">
        <img src={phone} alt="" />
        <h2>Talk To Sales</h2>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, whe
          n an unknown printer took a galley of type and scrambled it to make a
          type specimen book.orem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's st
          andard dummy text ever since the 1500s..... </p>
          <h4>View all global Members</h4>
        </div>
        <div className="box11">
        <img src={custom} alt="" />
        <h2>Contact Customer support</h2>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, whe
          n an unknown printer took a galley of type and scrambled it to make a
          type specimen book.orem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's st
          andard dummy text ever since the 1500s..... </p>
        <button className='contbtn'>Customer Support</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
