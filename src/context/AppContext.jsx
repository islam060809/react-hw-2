import axios from '../axios'
import React, { createContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const DataContext = createContext()

const AppContext = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartData, setCartData] = useState([])
  const [productD, setProductD] = useState(null)
  const [active, setActive] = useState('ru')
  const { i18n } = useTranslation()

  function changL(lng) {
    i18n.changeLanguage(lng)
    setActive(lng)
  }

  const getPro = async () => {
    try {
      const { data } = await axios.get()
      console.log(data);
      setProducts(data)
    } catch (error) {
      throw (error);
    }
  }

  const addToCart = (id) => {
    console.log(id);
    const LSData = JSON.parse(localStorage.getItem('carzina'))

    setCartData(LSData)
    let isCorzina = cartData.find(x => x.id === id);
    console.log(isCorzina);
    if (!isCorzina) {
      const element = products.filter(el => el.id === id)
      console.log(element);
      setCartData((prewData) => [...prewData, ...element])
      localStorage.setItem("carzina", JSON.stringify(cartData))

      // console.log(LSData);
    } else {
      const newData = { ...productD, count: Number(productD.count) + 1 }
      setProductD(newData)
      console.log(isCorzina);
      // localStorage.setItem("carzina", JSON.stringify(cartData))
      // const LSData= JSON.parse( localStorage.getItem('carzina'))
      // setCartData(LSData)
    }
  }
  console.log(cartData.length, 'rrrr');
  // localStorage.setItem("carzina", JSON.stringify(cartData))
  const LSData = JSON.parse(localStorage.getItem('carzina'))
  // console.log(LSData);
  // if(cartData.length===0){
  // setCartData(LSData)

  // }


  function plus(i) {
    console.log(i);
    const newData = { ...productD, count: Number(productD.count) + 1 }
    setProductD(newData)
    // let isCorzina = cartData.find(x => x.id === i.id);

  }

  function minus(i) {
    console.log(i);
    const newData = { ...productD, count: Number(productD.count) - 1 }
    setProductD(newData)
  }


  useEffect(() => {
    getPro();
    // setCartData(LSData)
  }, [])

  // const newCartData = JSON.parse(localStorage.getItem("carzina"))
  // setCartData(newCartData)
  // console.log(cartData, "cart");
  // if (productD===null) {
  //   return <h1>Loud</h1>
  // }
  // useEffect(()=>{
  //   setCartData(newCartData)
  //   console.log(cartData, "cart");

  // },[])
  console.log(cartData, 'dddd');
  const value = {
    products,
    addToCart,
    productD,
    setProductD,
    plus,
    minus,
    cartData,
    active,
    changL,
  }
  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  )
}

export default AppContext