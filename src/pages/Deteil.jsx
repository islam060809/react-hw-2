import axios from '../axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Deteil.scss"
import box1 from '../icons/about-box1.png'
import box2 from '../icons/about-box2.png'
import box3 from '../icons/about-box3.png'
import box4 from '../icons/about-box4.png'
import img from '../icons/ImageEndD.png'
import { DataContext } from '../context/AppContext'

const Deteil = () => {
    // const [product, setProduct] = useState(null)
    const [products, setProducts] = useState(null)
    const context = useContext(DataContext)
    const { addToCart, productD, setProductD, plus, minus } = context
    const params = useParams()
    async function getDeteilProduct(id) {
        const { data } = await axios.get(`/${id}`)
        setProductD(data)
    }
    async function getProducts() {
        const { data } = await axios.get()
        const newData = await data.slice(0, 4)
        setProducts(newData)
    }

    // async function setPro() {
    //     setProductD(product)
    // }

    useEffect(() => {
        getDeteilProduct(params.id)
        getProducts()
        // setPro()
    }, [params.id]);
    

    if (productD === null) {
        return <h1>Loading</h1>
    }

    if (products === null) {
        return <h1>Loading</h1>
    }
    // if (productD === null) {
    //     return <h1>Loading</h1>
    // }
    return (
        <div className='deteil'>
            <div className="pro">
                <div className="img">
                    <img src={productD.image} alt="" />
                </div>
                <div className="text">
                    <h2>{productD.title}</h2>
                    <h4>£{productD.price}</h4>
                    <div className="description">
                        <h3>Product description</h3>
                        <p>{productD.description}</p>
                    </div>
                    <h3>Dimensions</h3>
                    <div className="dimensions">
                        <div className="height">
                            <h4>height</h4>
                            <p>{productD.height}sm</p>
                        </div>
                        <div className="width">
                            <h4>width</h4>
                            <p>{productD.width}sm</p>
                        </div>
                        <div className="depth">
                            <h4>depth</h4>
                            <p>{productD.depth}sm</p>
                        </div>
                    </div>
                    <div className="count">
                        <p>Quantitity</p>
                        <div className="num"> <button onClick={()=>minus(productD)}>-</button>
                        {productD.count} 
                        <button onClick={()=>plus(productD)}>+</button></div>
                    </div>
                    <button onClick={() => addToCart(productD.id)} className='add-cart'>Add to cart</button>
                    <button className='save-favo'>Save to favorites</button>
                </div>
            </div>
            <div className="box">
                <h2>You might also love these</h2>
                <div className="carts">
                    {products.map((el) => {
                        return (<div className=" cart">
                            <img src={el.image} alt="" />
                            <h4>{el.title}</h4>
                            <p>£{el.price}</p>
                        </div>)
                    }
                    )}
                </div>
                <button>See collection</button>
            </div>
            <div className="about">
                <h2>What makes our brand different</h2>
                <div className="boxes">
                    <div className="box">
                        <img src={box1} alt="" />
                        <h6>Next day as standard</h6>
                        <p>Order before 3pm and get your order <br />
                            the next day as standard</p>
                    </div>
                    <div className="box">
                        <img src={box2} alt="" />
                        <h6>Made by true artisans</h6>
                        <p>Handmade crafted goods made with  <br />
                            real passion and craftmanship</p>
                    </div>
                    <div className="box">
                        <img src={box3} alt="" />
                        <h6>Unbeatable prices</h6>
                        <p>For our materials and quality you <br /> won’t find better prices anywhere</p>
                    </div>
                    <div className="box">
                        <img src={box4} alt="" />
                        <h6>Recycled packaging</h6>
                        <p>We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
            <div className="end">
                <img src={img} alt="" />
                <div className="text">
                    <h2>Join the club and get the benefits</h2>
                    <p>Sign up for our newsletter and receive exclusive offers on new <br />
                        ranges, sales, pop up stores and more</p>
                    <div className="join">
                        <input type="text" placeholder='your@email.com' />
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deteil
