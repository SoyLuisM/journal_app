import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* el BrowserRouter debe de estar en el punto mas alto de la app */}
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
  </StrictMode>,
)
