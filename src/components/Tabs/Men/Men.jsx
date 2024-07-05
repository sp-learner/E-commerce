import React from 'react'
import './Men.css'
import card2 from '../../../assets/card2.png'
import lcard2 from '../../../assets/lcard2.png'
import lcard3 from '../../../assets/lcard3.png'
import lcard4 from '../../../assets/lcad4.png'
import lcard5 from '../../../assets/lcard5.png'
import fcard1 from '../../../assets/fcard1.png'
import fcard2 from '../../../assets/fcard2.png'
import fcard3 from '../../../assets/fcard3.png'
import fcard4 from '../../../assets/fcad4.png'
import fcard5 from '../../../assets/fcard5.png'
import fcard6 from '../../../assets/fcard6.png'
import fcard7 from '../../../assets/fcard7.png'
import fcard8 from '../../../assets/fcard8.png' 
import mkid from '../../../assets/mkid.png'
import mkid2 from '../../../assets/mkid2.png'
import heart from '../../../assets/heart.png'
import shop from '../../../assets/shop.png'
import { Link } from 'react-router-dom'

const Mens = () => {
  
  return (
    <div className='men'>
      <h2>Men's Latest</h2>
      <div className="card-container2">
        <div className="card2">
          <Link to='/menproduct'>
          <img src={card2} alt="Men's Fashion" />
          </Link>
          
          <div className="card-content">
            <div className="rating2">
              <h2>Classic Spring</h2>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div className="card-actions">
              <p>$120.00</p>
              <div className="btn">
                <img src={heart} alt="" / >
                <img src={shop} alt="" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="card2">
          <img src={lcard2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating2">
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
        <div className="card2">
          <img src={lcard3} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating2">
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
      <div className="card-container3">
        <div className="card2">
          <img src={lcard4} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating2">
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
        <div className="card2">
          <img src={card2} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating2">
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
        <div className="card2">
          <img src={lcard5} alt="Men's Fashion" />
          <div className="card-content">
            <div className="rating2">
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

      <div className="featured">
        <h3>Featured</h3>
        <div className="card-container2">
          <div className="card2">
            <img src={fcard1} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={fcard2} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={fcard3} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
        <div className="card-container3">
          <div className="card2">
            <img src={fcard4} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={fcard5} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={fcard6} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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

      <div className="casual">
      <h3>Casual</h3>
        <div className="card-container2">
          <div className="card2">
            <img src={fcard7} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={fcard8} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={lcard2} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
        <div className="card-container3">
          <div className="card2">
            <img src={card2} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={lcard2} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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
          <div className="card2">
            <img src={lcard3} alt="Men's Fashion" />
            <div className="card-content">
              <div className="rating2">
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

      <div className="kid">
        <div className="left-sec">
          <img src={mkid} alt="" />
          <img src={mkid2} alt="" />
        </div>
        <div className="right-sec">
          <h1>Kid’s Collection</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged.
           </p>
          <p> It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className='btnbox'>Discover More</button>
        </div>
      </div>
    </div>
  )
}

export default Mens
