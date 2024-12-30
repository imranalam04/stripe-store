import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <main className='max-w-4xl mx-auto px-6 py-20 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-2 leading-tight'>
                    Create a Digital store from your
                </h1>
                <div className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
                    <span>Stripe products</span>
                </div>
                <p className='text-lg md:text-xl mb-4 text-gray-300'>
                    Connect your Stripe account, add existing products, and start selling.
                </p>
                <p className='text-lg md:text-xl mb-12 text-gray-300'>
                    No complicated setup, no coding knowledge required.
                </p>
                <div className='flex flex-col items-center gap-6'>
                    <Link to="/signup" className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg transition-colors inline-flex items-center gap-2'>
                        Try free for 15 days
                        <span aria-hidden="true">→</span>
                    </Link>
                    <Link to="/demo" className='text-gray-300 hover:text-white'>View a Demo store</Link>
                </div>
                <p className='mt-7 text-sm text-gray-400'>
                    No credit card required. Ready in 2 mins. Questions? Email: support@stripe.store
                </p>
            </main>
        </div>
    )
}

export default Hero