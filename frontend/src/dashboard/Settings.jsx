import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, User, Palette, FolderOpen, ShoppingCart, Navigation, Settings, HelpCircle, Search, Bell, MessageCircle, LogOut } from 'lucide-react'
import NavigationSettings from '../components/NavigationSettings'



const Setting = () => {
  return (

    <div className='min-h-screen flex flex-col'>
      {/* Top Header */}
      <header className='bg-[#0a0b1a] border-b px-6 py-3 flex items-center justify-between'>
        <h1 className='text-lg text-slate-100 font-semibold'>PandaLabs, LLC</h1>
        <div className='flex items-center gap-4'>
          <button className='p-2 hover:bg-gray-900 rounded-full'>
            <Bell className='w-5 h-5' />
          </button>
          <button className='p-2 hover:bg-gray-900 bg-gray-800 rounded-full'>
            <Settings className='w-5 h-5' />
          </button>
          <div className='w-8 h-8 bg-gray-500 rounded-full'>
            <div className='flex flex-col items-center justify-center h-full'>
              <User className='w-6 h-6' />
            </div>

          </div>
        </div>
      </header>
      {/* sidebar */}
      <div className='flex flex-1'>
        <aside className='w-64 bg-[#0a0b1a] text-white p-6 flex flex-col'>
          <Link to="/preview" target='_blank'>
            <div className='mb-6 flex items-center gap-4'>

              <h2 className='text-sm font-semibold'>Preview your store</h2>
              <Navigation />
            </div>
          </Link>

          <nav className='flex-1 space-y-1'>
            <Link to="/dashboard" className='flex items-center gap-3 px-4 py-2 text-white  rounded-md'>
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link to="/design" className='flex items-center gap-3 px-4  py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md'>
              <Palette className="w-5 h-5" />
              Design
            </Link>
            <Link to="/collections" className='flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md'>
              <FolderOpen className="w-5 h-5" />
              Collections
            </Link>
            <Link to="/dashboard/order" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
              <ShoppingCart className="w-5 h-5" />
              Orders
            </Link>
            <Link to="/dashboard/settings" className="flex items-center bg-white/10 gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
            <Link to="/feedback" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
              <HelpCircle className="w-5 h-5" />
              Have Feedback?
            </Link>
          </nav>
          <Link to="/login">
            <button className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md mt-auto">
              <LogOut className="w-5 h-5" />
              Logout

            </button>
          </Link>
        </aside>


        {/* Main Content */}
        <main className='flex-1 bg-slate-900'>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl mx-8 font-semibold">Settings</h1>

            </div>
            <div className="p-8">
              <NavigationSettings
                initialHeaderItems={[{ label: '', url: '' }]}
                initialFooterItems={[{ label: '', url: '' }]}
              />
            </div>

          </div>
        </main>

      </div>
    </div>
  )
}

export default Setting