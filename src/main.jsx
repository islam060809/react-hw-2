import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AddPro from './components/AddPro.jsx'
import AppContext from './context/AppContext.jsx'
import './index.css'
import './i18n/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
        {/* <AddPro/> */}
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>,
)
