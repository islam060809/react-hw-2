import React, { useContext } from 'react'
import { DataContext } from '../context/AppContext'
import './Cart.scss'
import { useTranslation } from 'react-i18next'

const Cart = () => {
  const { t } = useTranslation()
  const context = useContext(DataContext)
  const {cartData}=context
  // const  cartData  = localStorage.getItem("carzina")
  // const lsData = JSON.parse(cartData)
  // console.log(lsData);
  // if (lsData === null) {
  //   return <h1>No</h1>
  // }
  return (
    <div className='corzina'>
      <div className='cart'>
        <div className="info">
          <p>{t("Product")}</p>
          <p>{t("Quantity")}</p>
          <p>{t("Total")}</p>
        </div>
        <hr />
        <div className="products">
          {cartData.map((el) => (
            <h3>{el.title}</h3>
          ))}
        </div>
        <hr />
        <div className="end">
          <p>{t("Taxes and shipping are calculated at checkout")}</p>
          <div className="">
            <h4>{t("Subtotal")} <span>£210</span></h4>
            <button>{t("Go to checkout")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart