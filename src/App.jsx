import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FeauturesGrid from './components/FeauturesGrid'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'
import LoginPage from './page/LoginPage'
import Dashboard from './dashboard/Dashboard'
import Order from './dashboard/Order'
import PreviewStore from './page/PreviewStore'
import ProductDetails from './page/ProductDetails'
import Settings from './dashboard/Settings'
import { CartProvider } from './context/CartContext'
import ComingSoon from './components/ComingSoon'

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className='min-h-screen bg-[#0a0b1a] text-white'>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
              <div className='sticky top-0 z-50'>
                <Navbar />
                </div>
                <div id='hero'>
                <Hero />
                </div>
                <div id='features'>
                <Features />
                </div>
                <div id='features'>
                <FeauturesGrid />
                </div>
                <div id='pricing'>
                <Pricing />
                </div>
                <div id='faq'>
                <Faq />
                </div>
                <Footer />
              </>
            }
          />
          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/order" element={<Order />} />
          <Route path="/dashboard/settings" element={<Settings />}/>
          <Route path="/preview" element={<PreviewStore />} />
          <Route path="/preview/:id" element={<ProductDetails />} />
          <Route path='*' element={<ComingSoon />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
