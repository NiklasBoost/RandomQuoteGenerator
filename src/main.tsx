import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/frontend/quotes/Header.tsx'
import { MiddlePart } from './components/frontend/quotes/MiddlePart.tsx'
import { Footer } from './components/frontend/quotes/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
    <Header />
    <MiddlePart />
    <Footer />
  </React.StrictMode>,
)
