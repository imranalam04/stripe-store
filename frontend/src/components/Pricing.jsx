import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Pricing() {
    const features = [
        "Access to all features",
        "1% transaction fee",
        "Support Reetail",
        "Support Reetail",
        "Support Reetail",
        "Support Reetail"
    ]

    return (
        <div className="min-h-screen bg-[#0a0b1a] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">
                    Simple Pricing
                </h1>

                <div className="inline-block mb-12">
                    <div className="bg-blue-900 text-white text-xl px-20 py-1 rounded-md">
                        Life time deal
                    </div>
                </div>

                <div className="max-w-sm mx-auto relative">
                    {/* Most Popular Badge */}
                    <div className="absolute -top-3 right-[-1rem] bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                    </div>

                    {/* Pricing Card */}
                    <div className="bg-[#0d2847] rounded-lg p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Free</h2>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-gray-400">/month</span>
                            </div>
                            <div className="text-gray-400 mt-2">
                                Paid Annually
                            </div>
                        </div>

                        <Link
                            to="/signup"
                            className="block w-full bg-white text-blue-900 hover:bg-gray-100 py-3 px-4 rounded-md font-semibold mb-8 transition-colors"
                        >
                            Start for free
                        </Link>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-left">
                                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

