import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Git2PostContext from './context/Git2PostContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Git2PostContext>
      <App />
    </Git2PostContext>
  </StrictMode>,
)
