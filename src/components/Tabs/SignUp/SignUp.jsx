import React from 'react'
import './SignUp.css'
import signup from '../../../assets/signup.png'
import logo from '../../../assets/logo.png'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className="sign-up-container">
      <div className="image-section">
        <img src={signup} alt="Sign Up" />
      </div>
      <div className="form-section">
        <img src={logo} alt="Logo" className="logo2"/>
        <h2>Create Account</h2>
        <button className="social-button google">Sign up with Google</button>
        <button className="social-button email">Sign up with Email</button>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="sign-up-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
          </div>
          <button type="submit" className="sign-up-button">Create Account</button>
        </form>
        <div className="additional-options">
          <span>Already have an account? <a href="#login" className="login-link">Login</a></span>
        </div>
        <div className="terms-conditions">
          <p>HEXASHOP Terms & Conditions</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
