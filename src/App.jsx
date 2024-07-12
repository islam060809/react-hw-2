import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HomeV1 from './components/home/HomeV1'
import Layout from './components/layout/Layout'
import { DataContext } from './context/AppContext'
import './i18n/i18n.js'

const App = () => {

  return (
    <div>
      <Layout/>
    </div>
  )
}

export default App