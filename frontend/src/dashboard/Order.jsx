import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, User, Palette, Star, FolderOpen, ShoppingCart, Navigation, Settings, HelpCircle, Search, Bell, MessageCircle, LogOut } from 'lucide-react'


const Order = () => {

    const orders = [
        {
            name: 'Test Product',
            price: '$20.00',
            rating: 5,
            reviews: 120,
            image: 'https://picsum.photos/200/300'
        },
        {
            name: 'Digital Product',
            price: '$150.00',
            rating: 4,
            reviews: 85,
            image: 'https://picsum.photos/201/300'
        },
        {
            name: 'Subscription Product',
            price: '$500.00/month',
            rating: 5,
            reviews: 230,
            image: 'https://picsum.photos/202/300'
        }
    ]


    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
            />
        ))
    }



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
            <div className='flex flex-1'>
                {/* Sidebar */}
                <aside className='w-64 bg-[#0a0b1a] text-white p-6 flex flex-col'>
                    <Link to="/preview">
                        <div className='mb-6 flex items-center gap-4'>

                            <h2 className='text-sm font-semibold'>Preview your store</h2>
                            <Navigation />
                        </div>
                    </Link>
                    <nav className='flex-1 space-y-1'>
                        <Link to="/dashboard" className='flex items-center gap-3 px-4 py-2 text-white rounded-md'>
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
                        <Link to="/dashboard/order" className="flex items-center bg-white/10 gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            <ShoppingCart className="w-5 h-5" />
                            Orders
                        </Link>
                        <Link to="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            <Settings className="w-5 h-5" />
                            Settings
                        </Link>
                        <Link to="/feedback" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
                            <HelpCircle className="w-5 h-5" />
                            Have Feedback?
                        </Link>
                    </nav>
                    <button className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md mt-auto">
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </aside>
                {/* Main Content */}
                <main className='flex-1 bg-slate-800'>
                    <div className="min-h-screen bg-slate-900 p-8">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-3xl font-bold text-white mb-8">My Orders</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {orders.map((order, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                                    >
                                        <div className="aspect-square bg-gray-100">
                                            <img
                                                src={order.image}
                                                alt={order.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 text-slate-700">{order.name}</h3>
                                            <div className="flex items-center gap-1 mb-2">
                                                {renderStars(order.rating)}
                                                <span className="text-sm text-gray-500 ml-1">
                                                    ({order.reviews})
                                                </span>
                                            </div>
                                            <div className="text-xl font-bold text-slate-800">{order.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Order