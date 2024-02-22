import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "1", name: "italian"},
  { id: "2", name: "Chinese"},
  { id: "3", name: "Peruvian"},
  { id: "4", name: "Surprise"},
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
