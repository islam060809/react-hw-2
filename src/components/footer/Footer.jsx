import React from 'react'
import "./Footer.scss"
import Facebook from '../../icons/Facebook1.png'
import Instagram from '../../icons/Instagram1.png'
import Linkedin from '../../icons/Linkedin1.png'
import Pinterest from '../../icons/Pinterest1.png'
import Skype from '../../icons/Skype1.png'
import Twitter from '../../icons/Twitter1.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='bac'>
      <div className="footer">
        <div className="text">
          <div>
            <h6>{t("Menu")}</h6>
            <p>{t("New arrivals")}</p>
            <p>{t("Best sellers")}</p>
            <p>{t("Recently viewed")}</p>
            <p>{t("Popular this week")}</p>
            <p>{t("All Products")}</p>
          </div>
          <div>
            <h6>{t("Categories")}</h6>
            <p>{t("Crockery")}</p>
            <p>{t("Furniture")}</p>
            <p>{t("Homeware")}</p>
            <p>{t("Plant pots")}</p>
            <p>{t("Chairs")}</p>
            <p>{t("Crockery")}</p>
          </div>
          <div >
            <h6>{t("Our company")}</h6>
            <NavLink to={'about'}><p>{t("About us")}</p></NavLink>
            <p>{t("Vacancies")}</p>
            <p>{t("Contact us")}</p>
            <p>{t("Privacy")}</p>
            <p>{t("Returns policy")}</p>
          </div>
          <div className="join">
            <h6>{t("Join our mailing list")}</h6>
            <div className="">
              <input type="text" placeholder='your@email.com' />
              <button>{t("Sign up")}</button>
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