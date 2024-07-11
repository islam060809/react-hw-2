import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../icons/AllProductImg.png'
import ich from '../icons/icheikaa.png'
import './AllPro.scss'

const AllPro = () => {
  const [products, setProducts] = useState(null)
  async function getPro() {
    try {
      const { data } = await axios.get()
      setProducts(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPro();
  }, [])

  if (products === null) {
    return <h2>Loading</h2>
  }
  return (
    <div className='AllPro'>
      <img src={img} alt="" />
      <div className="hero">
        <div className="filtr">
          <div class="product-type">
            <h2>Product type</h2>
            <ul class="checklist">
              <li>
                <input type="checkbox" />
                <label>Furniture</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Homeware</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Sofas</label>
              </li>
              <li>
                <input type="checkbox"  />
                <label >Homeware</label>
              </li>
              <li>
                <input type="checkbox"  />
                <label >Light fittings</label>
              </li>
              <li>
                <input type="checkbox"/>
                <label>Accessories</label>
              </li>
            </ul>
          </div>
          <div class="product-type">
            <h2>Price</h2>
            <ul class="checklist">
              <li>
                <input type="checkbox" />
                <label>0 - 100</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>101 - 250</label>
              </li>
              <li>
                <input type="checkbox" />
                <label >250 +</label>
              </li>
            </ul>
          </div>
          <div class="product-type">
            <h2>Designer</h2>
            <ul class="checklist">
              <li>
                <input type="checkbox"  />
                <label >Robert Smith</label>
              </li>
              <li>
                <input type="checkbox"  />
                <label >Liam Gallagher</label>
              </li>
              <li>
                <input type="checkbox" />
                <label >Biggie Smalls</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Thom Yorke</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="carts">
          {products.map((el) => (
            <NavLink to={`/deteil/${el.id}`}>
              <div className='cart'>
                <img src={el.image} alt="" />
                <h3>{el.title}</h3>
                <p>£{el.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllPro