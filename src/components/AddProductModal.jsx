import { useState } from 'react'
import { X } from 'lucide-react'

export default function AddProductModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('stripe')
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: 'onetime',
        amount: ''
    })

    const tabs = [
        { id: 'stripe', label: 'From Stripe' },
        { id: 'create', label: 'Create New' },
        { id: 'csv', label: 'Import CSV' }
    ]

    const dummyStripeProducts = [
        { id: 1, name: 'Basic Plan', price: '$9.99/month' },
        { id: 2, name: 'Premium Package', price: '$99.00' },
        { id: 3, name: 'Enterprise Solution', price: '$499.00/year' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        onClose()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#0a0b1a] text-white w-full max-w-2xl h-[600px] rounded-lg shadow-xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h2 className="text-xl font-semibold">Add Product</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-4 py-3 text-center transition-colors ${activeTab === tab.id
                                ? 'border-b-2 border-blue-500 text-blue-500'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content with fixed height and scrolling */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    {activeTab === 'stripe' && (
                        <div className="space-y-4">
                            <p className="text-gray-400">Select a product from your Stripe account:</p>
                            {dummyStripeProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                                >
                                    <div className="font-medium">{product.name}</div>
                                    <div className="text-sm text-gray-400">{product.price}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'create' && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter product name"
                                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Type</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 p-4 border border-white/10 rounded-lg cursor-pointer">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="onetime"
                                            checked={formData.type === 'onetime'}
                                            onChange={handleChange}
                                            className="text-blue-500"
                                        />
                                        <span>One Time</span>
                                    </label>
                                    <label className="flex items-center gap-2 p-4 border border-white/10 rounded-lg cursor-pointer">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="subscription"
                                            checked={formData.type === 'subscription'}
                                            onChange={handleChange}
                                            className="text-blue-500"
                                        />
                                        <span>Subscription</span>
                                    </label>
                                    {formData.type === 'subscription' && (
                                        <div className=' mt-2'>
                                            <select
                                                name="billingPeriod"
                                                value={formData.billingPeriod}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-white text-black rounded-md"
                                            >
                                                <option value="monthly">Monthly</option>
                                                <option value="yearly">Yearly</option>
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2">$</span>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                        className="w-full pl-8 pr-4 py-2 bg-white text-black rounded-md"
                                    />
                                </div>
                            </div>
                        </form>
                    )}

                    {activeTab === 'csv' && (
                        <div className="text-center py-8">
                            <p className="text-gray-400 mb-4">
                                Drag and drop your CSV file here, or click to select a file
                            </p>
                            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                Select File
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer - Only show for Create tab */}
                {activeTab === 'create' && (
                    <div className="p-4 border-t border-white/10">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                        >
                            Add Product
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

