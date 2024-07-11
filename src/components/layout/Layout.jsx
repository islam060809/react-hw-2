import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import AllPro from '../../pages/AllPro'
import Cart from '../../pages/Cart'
import Deteil from '../../pages/Deteil'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import HomeV1 from '../home/HomeV1'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<HomeV1/>}/>
            <Route path='all' element={<AllPro/>}/>
            <Route path='/deteil/:id' element={<Deteil/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout