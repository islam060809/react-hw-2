import React, { useContext } from 'react'
import { DataContext } from '../context/AppContext'
import './Cart.scss'
const Cart = () => {
  const context = useContext(DataContext)
  const {cartData}=context
  console.log(cartData, 'islam');
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
          <p>Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />
        <div className="products">
          {cartData.map((el) => (
            <h3>{el.title}</h3>
          ))}
        </div>
        <hr />
        <div className="end">
          <p>Taxes and shipping are calculated at checkout</p>
          <div className="">
            <h4>Subtotal <span>£210</span></h4>
            <button>Go to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart