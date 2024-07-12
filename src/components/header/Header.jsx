import React, { useContext } from 'react'
import Search from '../../icons/Search.png'
import Cart from '../../icons/Cart.png'
import Avatar from '../../icons/Avatar.png'
import "./Header.scss"
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/AppContext'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const context = useContext(DataContext)
  const { changL, active } = context
  const { t } = useTranslation()
  return (

    <div className='header'>
      <div className="logo">
        <img className='search' src={Search} alt="" />
        <NavLink to={"/"}> <h4>{t ("Avion")}</h4></NavLink>
        <NavLink to={'cart'}><img className='cart' src={Cart} alt="" /></NavLink>
        <img className='avatar' src={Avatar} alt="" />
      </div>
      <hr />
      <div className="cate">
        <p><NavLink to={"all"}>{t("All Products")}</NavLink></p>
        <p>{t("Plant pots")}</p>
        <p>{t("Ceramics")}</p>
        <p>{t("Tables")}</p>
        <p>{t("Chairs")}</p>
        <p>{t("Crockery")}</p>
        <p>{t("Tableware")}</p>
        <p>{t("Cutlery")}</p>
      </div>
      <button onClick={(e) => changL(e.target.innerText)}>en</button>
      <button onClick={(e) => changL(e.target.innerText)}>ru</button>
    </div>
  )
}

export default Header