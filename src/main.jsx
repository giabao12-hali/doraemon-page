import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import HomePage from './components/home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    {/* <App/> */}
  </React.StrictMode>,
)
