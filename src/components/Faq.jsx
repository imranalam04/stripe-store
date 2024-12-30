import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const faqs = [
        {
            question: "How is Reetail different from Shopify, Wix, Squarespace?",
            answer: "Reetail is specifically built for Stripe users, offering a simpler, more streamlined approach to creating an online store. Unlike other platforms, we focus on making it easy to sell products directly from your Stripe account with no complex setup or technical knowledge required."
        },
        {
            question: "Do I need a Stripe account to use Reetail?",
            answer: "Yes, a Stripe account is required as Reetail is built on top of Stripe's infrastructure. This allows for seamless integration with your existing Stripe products and provides reliable payment processing out of the box."
        },
        {
            question: "How much does Reetail cost?",
            answer: "Reetail offers a free plan to get started, with paid plans available for businesses that need more features. Our pricing is transparent with no hidden fees - you only pay the standard Stripe processing fees for transactions."
        },
        {
            question: "How many products can I add?",
            answer: "There's no limit to the number of products you can add to your Reetail store. You can sync all your existing Stripe products and add as many new ones as you need, regardless of which plan you're on."
        },
        {
            question: "Can I sell subscriptions?",
            answer: "Yes! Reetail fully supports subscription-based products. You can easily set up recurring payments, manage subscription tiers, and handle billing cycles - all powered by Stripe's subscription infrastructure."
        }
    ]
    return (
        <div className='min-h-screen bg-[#0a0b1a] text-white py-20 px-6'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-4xl md:text-5xl font-bold text-center mb-12'>FAQ</h1>

                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='border-b border-white/10 last:border-b-0'>
                            <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className='w-full flex items-center justify-between py-6 text-left text-lg
                        hover:text-white/80 transition-colors'>
                                <span>{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`grid transition-all duration-200 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}>
                                <div className='overflow-hidden'>
                                    <p className='text-gray-400 pb-6'>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq