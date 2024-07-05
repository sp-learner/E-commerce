import React from 'react'
import './AboutUs.css'
import about from '../../../assets/aboutus.png'

const AboutUs = () => {
  return (
    <div className='aboutus'>

<h1>About Us</h1>
      <div className="container11">
        <div className="box-mission">
          <h2 className='about'>Mission Statement</h2>
          <p className='about2'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..... </p>
        </div>
        <div className="box-vision">
          <h2 className='about'>Vision Statement</h2>
          <p className='about2'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className="box-target-market">
          <h2 className='about'>Target Market Summary</h2>
          <img src={about} alt="Target Market" />
        </div>

        <div className="box-values">
          <div className="box-core-values">
          <h2 className='about'>Core Values</h2>
          <p className='about2'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..... </p>
        </div>
        <div className="box-company-history">
          <h2 className='about'>Brief Company History</h2>
          <p className='about2'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..... </p>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default AboutUs
