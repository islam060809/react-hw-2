import React, { useTransition } from 'react'
import Search from '../../icons/Search.png'
import Cart from '../../icons/Cart.png'
import Avatar from '../../icons/Avatar.png'
import "./Header.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
  const {t}=useTransition()
  return (

    <div className='header'>
        <div className="logo">
        <img className='search' src={Search} alt="" />
        <h4>Avion</h4>
      <NavLink to={'cart'}><img className='cart' src={Cart} alt="" /></NavLink>
        <img className='avatar' src={Avatar} alt="" />
        </div>
        <hr />
        <div className="cate">
          <p><NavLink to={"all"}>{"All Products"}</NavLink></p>
            <p>Plant pots</p>
            <p>Ceramics</p>
            <p>Tables</p>
            <p>Chairs</p>
            <p>Crockery</p>
            <p>Tableware</p>
            <p>Cutlery</p>
        </div>
    </div>
  )
}

export default Header