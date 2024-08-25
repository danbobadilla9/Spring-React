import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ProductApp } from './components/ProductApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductApp />
  </StrictMode>,
)
