import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NoteProviderWrapper from './context/NoteContext.jsx'

createRoot(document.getElementById('root')).render(

  // Comentamos "<StricMode></StricMode>" para usar una API y evitar hacer muchas peticiones
  // <StrictMode>
    <BrowserRouter>
      <NoteProviderWrapper>
        <App />
      </NoteProviderWrapper>
    </BrowserRouter>
  // </StrictMode>,
)
