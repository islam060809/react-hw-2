import React from 'react'
import Search from '../../icons/Search.png'
import Cart from '../../icons/Cart.png'
import Avatar from '../../icons/Avatar.png'
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
        <img className='search' src={Search} alt="" />
        <h4>Avion</h4>
        <img className='cart' src={Cart} alt="" />
        <img className='avatar' src={Avatar} alt="" />
        </div>
        <hr />
        <div className="cate">
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