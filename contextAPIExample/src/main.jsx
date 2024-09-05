import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { CounterProvider } from './context/Counter.jsx'
import { Cart } from './context/Cart.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cart>
      <App />
    </Cart>
  </StrictMode>,
)
