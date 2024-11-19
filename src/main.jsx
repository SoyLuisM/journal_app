import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* el BrowserRouter debe de estar en el punto mas alto de la app */}
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp/>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
