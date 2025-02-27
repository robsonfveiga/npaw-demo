import './styles/variables.css'
import './styles/animations.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App.tsx'
import { Analytics } from "@vercel/analytics/react"


// Create root element and render the app in strict mode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
