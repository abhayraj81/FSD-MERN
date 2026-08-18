import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import './index.css'
import App from './App.jsx'
import { ApplicationContext } from './Context/AppContexts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicationContext>
  </StrictMode>,
)
