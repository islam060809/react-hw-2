import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddPro from './components/AddPro.jsx'
import AppContext from './context/AppContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppContext> */}
      <App />
      {/* <AddPro/> */}
    {/* </AppContext> */}
  </React.StrictMode>,
)
