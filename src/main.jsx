import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import UserContext from './context/UserContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <BrowserRouter>
  //   <App /> 
  // </BrowserRouter>
  // </StrictMode>

  <UserContext>
    <App/>
  </UserContext>


)
