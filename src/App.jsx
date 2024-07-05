import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomeV1 from './components/home/HomeV1'
import { CounterContext } from './context/AppContext'

const App = () => {
  // const context = useContext(CounterContext)
  // const { counter, isVisible, minus, plus, delCounter } = context
  const [products, setProducts] = useState(null)
  async function getPro() {
    try {
      const res = await fetch("https://6686930083c983911b02cbc5.mockapi.io/mebel")
      const data = await res.json()
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
    <div>
      {/* {!isVisible && (
        <div>
          <button onClick={plus}>+</button>
          <button>{counter}</button>
          <button onClick={minus}>{counter === 1 ? <i onClick={delCounter} className="bi bi-trash"></i> : '-'}</button>
        </div>)} */}
      <Header />
      <HomeV1 pro={products}/>
      <Footer/>
    </div>
  )
}

export default App