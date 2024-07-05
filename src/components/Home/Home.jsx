import React from 'react'
import './Home.css'
import Latest from './Latest/Latest'
import Explore from './Explore/Explore'
import Social from './Social/Social'


const Home = () => {
  return (
    <>
       <div className='home'>
        <div className="container">
      <div className="left-box">
        <h1>We are HexaShop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='btnbox' >Purchase Now</button>
      </div>
      <div className="right-boxes">
        <div className="right-row">
          <div className="right-box1">
            <h1>Women</h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <button className='btnbox'>Purchase Now</button>
          </div>
          <div className="right-box2">
            <h1>Men</h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <button className='btnbox'>Purchase Now</button>
          </div>
        </div>
        <div className="right-row">
          <div className="right-box3">
            <h1>Kids</h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <button className='btnbox' >Purchase Now</button>
          </div>
          <div className="right-box4">
            <h1>Accessories</h1>
            <p>Lorem ipsum dolor sit amet consectetur </p>
            <button className='btnbox'>Purchase Now</button>
          </div>
        </div>
      </div>
    </div> 
    </div>
    
    <Latest/>
    <Explore/>
    <Social/>

    </>
   

    
  )
}

export default Home



