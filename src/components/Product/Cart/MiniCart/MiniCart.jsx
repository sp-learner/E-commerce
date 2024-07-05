import React from 'react'
import './MiniCart.css'
import wcard1 from '../../../../assets/wcard1.png'
import quantity from '../../../../assets/quantity.png'

const MiniCart = () => {


  return (
    <div className='minicart'>
      <p>Shopping Cart</p>
      <div className="maincont">

        <div className="cartdetail">
          <h3>Product</h3>
          <h3>price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>

        </div>
        <hr />
        <div className="cartdetail2">
          <img src={wcard1} alt="" />
          
          <h2>$39.00</h2>
          <div className="qunt">
            <img src={quantity} alt="" />
          </div>
          <h2>$39.00</h2>

        </div>
        <hr />

        <div className="belowcont">
        <input type="checkbox" />
        <label>For $10.00 please wrap the product</label>
        <hr />
        <h2>SubTotal</h2>
        <h2>$50:00</h2>
        <button className=''>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default MiniCart
