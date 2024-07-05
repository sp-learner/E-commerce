import React from 'react'
import './SignIn.css'
import signin from '../../../assets/signin.png'
import logo from '../../../assets/logo.png'

const SignIn = () => {
  return (
    <div className='signin'>

<div className="sign-in-container">
      <div className="image-section">
        <img src={signin} alt="Sign In" />
      </div>
      <div className="form-section">
        <img src={logo} alt="Logo" className="logo2"/>
        <h2>Sign In To HEXASHOP</h2>
        <button className="social-button google">Sign up with Google</button>
        <button className="social-button email">Sign up with Email</button>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="sign-in-form">
          <div className="form-group2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <div className="additional-options2">
          <a href="#register" className="register-link">Register Now</a>
          <a href="#forgot-password" className="forgot-password-link">Forgot Password?</a>
        </div>
        <div className="terms-conditions">
          <p>HEXASHOP Terms & Conditions</p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default SignIn
