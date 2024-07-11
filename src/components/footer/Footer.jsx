import React from 'react'
import "./Footer.scss"
import Facebook from '../../icons/Facebook1.png'
import Instagram from '../../icons/Instagram1.png'
import Linkedin from '../../icons/Linkedin1.png'
import Pinterest from '../../icons/Pinterest1.png'
import Skype from '../../icons/Skype1.png'
import Twitter from '../../icons/Twitter1.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bac'>
      <div className="footer">
        <div className="text">
          <div>
            <h6>Menu</h6>
            <p>New arrivals</p>
            <p>Best sellers</p>
            <p>Recently viewed</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>
          <div>
            <h6>Categories</h6>
            <p>Crockery</p>
            <p>Furniture</p>
            <p>Homeware</p>
            <p>Plant pots</p>
            <p>Chairs</p>
            <p>Crockery</p>
          </div>
          <div >
            <h6>Our company</h6>
          <NavLink to={'about'}><p>About us</p></NavLink>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>
          <div className="join">
            <h6>Join our mailing list</h6>
            <div className="">
            <input type="text" placeholder='your@email.com' />
          <button>Sign up</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="end">
<p>Copyright 2022 Avion LTD</p>
<div className="icons">
  <img src={Linkedin} alt="" />
  <img src={Facebook} alt="" />
  <img src={Instagram} alt="" />
  <img src={Skype} alt="" />
  <img src={Twitter} alt="" />
  <img src={Pinterest} alt="" />
</div>
        </div>
      </div>
     </div>
  )
}

export default Footer