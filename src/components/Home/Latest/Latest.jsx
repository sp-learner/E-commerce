import React from 'react'
import './Latest.css'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import lcard2 from '../../../assets/lcard2.png'
import lcard3 from '../../../assets/lcard3.png'
import wcard1 from '../../../assets/wcard1.png'
import wcard2 from '../../../assets/wcard2.png'
import kcard1 from '../../../assets/kcard1.png'
import kcard2 from '../../../assets/kcard2.png'
import kcard3 from '../../../assets/kcard3.png'
import heart from '../../../assets/heart.png'
import shop from '../../../assets/shop.png'



const Latest = () => {

  

  return (
    <div className='latest'>
        <div className="container2">
      <header>
        <h1>Men’s Latest</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </header>
      <div className="card-container">
        <div className="card">
          <img src={card2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="card">
          <img src={lcard2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={lcard3} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className="container2">
      <header>
        <h1>Women’s Latest</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </header>
      <div className="card-container">
        <div className="card">
          <img src={wcard1} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="card">
          <img src={card1} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={wcard2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className="container2">
      <header>
        <h1>Kid’s Latest</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </header>
      <div className="card-container">
        <div className="card">
          <img src={kcard1} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="card">
          <img src={kcard2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={kcard3} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" />
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        
    </div>
  )
}

export default Latest
