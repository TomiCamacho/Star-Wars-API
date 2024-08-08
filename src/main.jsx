import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SWCards } from './Components/SWCards/SWCards'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWCards/>
  </StrictMode>,
)
