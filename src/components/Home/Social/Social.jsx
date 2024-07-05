import React from 'react'
import './Social.css'
import scard1 from '../../../assets/scard1.png'
import scard2 from '../../../assets/scard2.png'
import scard3 from '../../../assets/scard3.png'
import card4 from '../../../assets/card4.png'
import scard4 from '../../../assets/scard4.png'
import scard5 from '../../../assets/scard5.png'
import {motion} from 'framer-motion'


const Social = () => {
  return (
    <div className='social'>

      <div className="content2">
        <h1>Social Media</h1>
        <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry.</p>
      </div>
      <div className="image-row">
        <img src={scard1} alt="Image 1" />
        <img src={scard2} alt="Image 2" />
        <img src={scard3} alt="Image 3" />
        <img src={card4} alt="Image 4" />
        <img src={scard4} alt="Image 5" />
        <img src={scard5} alt="Image 6" />
      </div>
        
    </div>
  )
}

export default Social
