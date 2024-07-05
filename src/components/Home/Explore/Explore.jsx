import React from 'react'
import './Explore.css'
import ecard1 from '../../../assets/ecard1.png'
import ecard2 from '../../../assets/ecard2.png'
import ecard3 from '../../../assets/ecard3.png'
import ecard4 from '../../../assets/ecard4.png'


const Explore = () => {
  return (
    <div className='explore'>
      
      <div className="left-content">
        <h1>Explore Our Products</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged.
            <br />
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It 
            has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsu


            </p>
      </div>
      <div className="right-content">
        <div className="image-boxes">
          <div className="box">
            <img src={ecard1} alt="Placeholder" />
            <h1>Leather Bags</h1>
            <p>Lorem Ipsum is simply dummy text </p>
          </div>
          <div className="box">
            <img src={ecard2} alt="Placeholder" />
            <div className="overlay">
            </div>
          </div>
        </div>
        <div className="image-boxes">
          <div className="box">
            <img src={ecard3} alt="Placeholder" />
          </div>
          <div className="box">
            <img src={ecard4} alt="Placeholder" />
            <div className="overlay">
              <h1>Different Types</h1>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
