import React from 'react'
import { Sparkles, Rocket, Banknote, Phone } from 'lucide-react'

const FeauturesGrid = () => {

    const features = [
        {
            icon: <Sparkles className='w-8 h-8 text-yellow-400' />,
            title: "No-code",
            description: "We are No-code friendly. There is no coding required to get your store up and running."
        },
        {
            icon: <Rocket className='w-8 h-8 text-pink-500' />,
            title: "Fast by design",
            description: "Reetail is built to be fast. We use the latest technologies to make sure your store loads up instantly."
        },
        {
            icon: <Banknote className='w-8 h-8 text-green-500' />,
            title: "Multi-currency support",
            description: "Reetail supports 135+ currencies. You can sell to customers all over the world."
        },
        {
            icon: <Phone className='w-8 h-8 text-green-500' />,
            title: "Apple Pay & Google Pay",
            description: "Customers can seamlessly pay with their Apple Pay or Google Pay."
        }

    ]

    return (
        <div className='bg-[#0a0b1a] py-16 px-6'>
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {features.map((feature, index) => {
                    return (
                        <div key={index} className='text-white'>
                         <div className='mb-4'>{feature.icon}</div>
                         <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                         <p className='text-gray-300'>{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default FeauturesGrid