import React from 'react'
import { Store, CreditCard, Percent } from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <div className='min-h-screen bg-[#0a0b1a] text-white'>
            { /* Header Section */}
            <section className='text-center md:pt-16 pb-16 px-6'>
                <div className='max-w-xl mx-auto'>
                    <Store size={74} className='mx-auto' />
                    <h1 className='text-2xl md:text-3xl pt-6'> Store is built specifically for small businesses like yours </h1>
                </div>
            </section>

            { /* Feature Section */}

            <div className='max-w-6xl mx-auto'>
                {/* Feature 1 */}
                <section className='grid md:grid-cols-2 gap-12 items-center py-16 sm:mx-2 md:mx-0 mx-6'>
                    <div className='bg-blue-600/10 p-6 rounded-lg'>
                        <div className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6
                    aspect-video flex items-center justify-center'>
                            <Store className="w-12 h-12" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold mb-4'>
                            Sell Your Products With A modern-Looking Stripe Store
                        </h2>
                        <p className='text-gray-300 mb-6'>
                            Your store comes with a professional theme, checkout, and payment processing right out of the box. Customize by adding your own logo, colors, fonts, and even add your own custom domain.
                        </p>
                        <Link to="/signup" className=" bg-blue-600 bg-gradient-to-br from-blue-400  hover:bg-blue-700 px-6 py-2 rounded-md inline-block transition-colors">
                            Try For Free
                        </Link>
                    </div>
                </section>

                {/* Feature 2 */}
                <section className="grid md:grid-cols-2 gap-12 items-center py-16">
                    <div className="order-2 md:order-1  sm:mx-2 md:mx-0 mx-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Create An Online Shop Linked To Stripe
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Reetail runs on Stripe. All your products, orders, customers are synced instantly to Stripe. Taxes are handled too.
                        </p>
                        <Link
                            to="/signup"
                            className="bg-blue-600 bg-gradient-to-br from-blue-400 hover:bg-blue-700 px-6 py-2 rounded-md inline-block transition-colors"
                        >
                            Try For Free
                        </Link>
                    </div>
                    <div className="order-1 md:order-2   p-6 rounded-lg">
                        <div className='bg-blue-600/10 p-6 rounded-lg'>
                            <div className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6
                    aspect-video flex items-center justify-center'>
                                <CreditCard className="w-12 h-12" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* feauture 3 */}
                <section className="grid md:grid-cols-2 gap-12 items-center py-16 sm:mx-2 md:mx-0 mx-6"> 
                    <div className="bg-blue-600/10 p-6 rounded-lg">
                        <div className=" bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 aspect-video flex items-center justify-center">
                            <Percent className="w-12 h-12" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Sell Your Products With A Modern-Looking Stripe Store
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Your store comes with a professional theme, checkout, and payment processing right out of the box. Customize by adding your own logo, colors, fonts, and even add your own custom domain.
                        </p>
                        <Link
                            to="/signup"
                            className="bg-blue-600 bg-gradient-to-br from-blue-400 hover:bg-blue-700 px-6 py-2 rounded-md inline-block transition-colors"
                        >
                            Try For Free
                        </Link>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Features