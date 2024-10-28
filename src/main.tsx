import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { router } from './router/router.tsx';
import { StrictMode } from 'react'
import './globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
