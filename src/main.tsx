import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import './Styles/tokens.css'
import './Styles/glass.css'
import { router } from './App'
import { initWallpaper } from './Utilities/ambient'

initWallpaper()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
