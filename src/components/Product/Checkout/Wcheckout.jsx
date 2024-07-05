import React, { useState } from 'react';
import './Checkout.css';
import wcard1 from '../../../assets/wcard1.png'


function App() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [subtotal, setSubtotal] = useState(100); // Assuming a default subtotal of 100
  const [saveDeliveryInfo, setSaveDeliveryInfo] = useState(false);
  const [savePaymentInfo, setSavePaymentInfo] = useState(false);

  const handlePayNow = () => {
    // Handle payment logic here
    alert('Payment Processed!');
  };

  const applyDiscount = () => {
    // Handle discount logic here
    if (discountCode === 'DISCOUNT10') {
      setSubtotal(subtotal * 0.9);
    }
  };

  return (
    <div className="checkout-page">
      <div className="left-section">
        <div className="section">
          <h2>Contact</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="section">
          <h2>Shipping Address</h2>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="row">
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="row checkbox-row">
            <input
              type="checkbox"
              checked={saveDeliveryInfo}
              onChange={(e) => setSaveDeliveryInfo(e.target.checked)}
            />
            <label>Save this info for next time</label>
          </div>
        </div>
        <div className="section">
          <h2>Payment Details</h2>
          <input
            type="text"
            placeholder="Card Holder Name"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="row">
            <input
              type="text"
              placeholder="Expiry Date"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
            <input
              type="text"
              value={cardName}
              placeholder="Card Number"
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="row checkbox-row">
            <input
              type="checkbox"
              checked={savePaymentInfo}
              onChange={(e) => setSavePaymentInfo(e.target.checked)}
            />
            <label>Save this info for next time</label>
          </div>
          <button onClick={handlePayNow}>Pay Now</button>
        </div>
      </div>
      <div className="right-section">
      <div className="imgcont">
        <img src={wcard1} alt="Product" />
        <h3>Denim Jacket</h3>
        <div className="price">Price: $100</div>
      </div>
       

        <div className="coupan">
        <input
          type="text"
          placeholder="Discount Code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={applyDiscount} >Apply</button>
        </div>
        <div className="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>

      </div>
    </div>
  );
}

export default App;
