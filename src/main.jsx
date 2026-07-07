import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import Redirect from './Redirect.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Redirect/>
  </StrictMode>,
)
