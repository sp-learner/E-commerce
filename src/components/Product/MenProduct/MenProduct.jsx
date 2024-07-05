import React from 'react'
import { useState } from 'react';
import './MenProduct.css'
import side1 from '../../../assets/side1.png'
import side2 from '../../../assets/side2.png'
import side3 from '../../../assets/side3.png'
import side4 from '../../../assets/side4.png'
import side5 from '../../../assets/side5.png'
import card3 from '../../../assets/card2.png'
import hurry from '../../../assets/hurry.png'
import hurry2 from '../../../assets/hurry2.png'
import arrow from '../../../assets/arrow.png'
import ask from '../../../assets/ask.png'
import delivery from '../../../assets/delivery.png'
import share from '../../../assets/share.png'
import shipping from '../../../assets/shipping.png'
import cards from '../../../assets/cards.png'
import { Link } from 'react-router-dom';


const MenProduct = () => {

  


  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState('description');

  return (
    <>
      <div className='menproduct'>
      <div className="image-gallery">
        <div className="thumbnails">
          <img className="thumbnail" src={side1} alt="Thumbnail" />
          <img className="thumbnail" src={side2} alt="Thumbnail" />
          <img className="thumbnail" src={side3} alt="Thumbnail" />
          <img className="thumbnail" src={side4} alt="Thumbnail" />
          <img className='thumbnail'  src={side5} alt="" />
        </div>
        <img className="main-image" src={card3} alt="Product" />

      </div>
      <div className="details">
        <h1>FASCO</h1>
        <h2 className='rate'>Denim Jacket</h2>
        <div className='rate'>★★★★☆ (3)</div>
        <div className="price-section">
          <span className="current-price">$39.00</span>
          <span className="original-price">$59.00</span>
          <span className="discount">SAVE 33%</span>
        </div>

        <div className="hurry">
          <img src={hurry2} alt="" />
          <img src={hurry} alt="" />
        </div>
        
        <div className='sizes'>
          <label>Size:</label>
          {['M', 'L', 'XL', 'XXL'].map(size => (
            <button
              key={size}
              className={selectedSize === size ? "selected-button" : "button"}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div>
          <label>Color:</label>
          {['Blue', 'Pink', 'Black'].map(color => (
            <button
              key={color}
              className={selectedColor === color ? "selected-button" : "button"}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
        <div className="actions">
          <div className="quantity">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <Link to="/checkout">
            <button className="add-to-cart">Add to cart</button>
          </Link>
        </div>
        <div className="custom-sec">
            <p><img src={arrow} alt="" /> Compare</p>
            <p><img src={ask} alt="" />Ask a Question?</p>
            <p><img src={share} alt="" />Share</p>
        </div>

        <div className="del">
        <p><img src={delivery} alt="" />Estimated Delivery: Jul 30 - Aug 03</p>
        <p><img src={shipping} alt="" />Free Shipping & Returns: On all orders over $75</p>
        </div>
        

        <div className="cards">
            <img src={cards} alt="" />
            <h3>Guarantee safe & secure checkout</h3>
        </div>
      </div>

          
      </div>

      <div className="page">
      <div className="tabs">
        <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {activeTab === 'description' && (
        <div className="content2">
          <h2>Product Description</h2>
          <p>
            This Casual Solid shirt has a Slim fit, Spread collar, full button Placket, Full Sleeves, and a curved hemline Size and Fit Slim Fit The Model (height 6 foot and shoulders 18 inches is wearing size 40/M Please check the size chart for more details before ordering Material & Care 100% Premium Cotton (Machine Wash Regular) Style Tip Enhance your look by wearing this Casual Stylish Men's shirt, Team it with a pair of Chinos or Tapered Denim and Sneakers for a fun Smart Casual look About the Brand DENNIS LINGO Finding Basic Menswear for daily use can be hard among todays Fast fashion world, where trends change daily. That’s why we started Dennis Lingo, to create a one stop shop for premium essential clothing for everyday use at lowest prices
          </p>

          <h2>Product Details</h2>
          <div className="product-detail2">
            <strong>Product Dimensions:</strong> 25 x 20 x 4.5 cm; 500 g
          </div>
          <div className="product-detail">
            <strong>Date First Available:</strong> 4 June 2018
          </div>
          <div className="product-detail">
            <strong>Manufacturer:</strong> Swastik Creation
          </div>
          <div className="product-detail">
            <strong>ASIN:</strong> B0795SGVRX
          </div>
          <div className="product-detail">
            <strong>Item model number:</strong> C301
          </div>
          <div className="product-detail">
            <strong>Country of Origin:</strong> India
          </div>
          <div className="product-detail">
            <strong>Department:</strong> Men
          </div>
          <div className="product-detail">
            <strong>Manufacturer:</strong> Swastik Creation, Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742
          </div>
          <div className="product-detail">
            <strong>Packer:</strong> Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742
          </div>
          <div className="product-detail">
            <strong>Item Weight:</strong> 500 g
          </div>
          <div className="product-detail">
            <strong>Item Dimensions LxWxH:</strong> 25 x 20 x 4.5 Centimeters
          </div>
          <div className="product-detail">
            <strong>Net Quantity:</strong> 1 count
          </div>
          <div className="product-detail">
            <strong>Included Components:</strong> Casual Shirt
          </div>
          <div className="product-detail">
            <strong>Generic Name:</strong> Casual Shirts
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="content">
          <h2>Reviews</h2>
          <p>No reviews yet.</p>
        </div>
      )}
      </div>

    </>
    

    
  )
}

export default MenProduct
