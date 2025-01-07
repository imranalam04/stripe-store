import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'


const NavigationSettings = ({ initialHeaderItems = [], initialFooterItems = [] }) => {
    const [activeTab, setActiveTab] = useState('navigation')
    const [headerItems, setHeaderItems] = useState(initialHeaderItems)
    const [heroContent, setHeroContent] = useState({
        heading: 'Discover Our unique offerings',
        description: 'We specialize in providing top-tier digital products—from software and subscriptions to creative assets and tools—crafted to empower your success. What sets us apart? Exceptional quality, customer-first support, and innovative solutions tailored to your needs.',
        buttonText: 'Explore Products'

    })
    const [footerItems, setFooterItems] = useState(initialFooterItems)


    const tabs = [
        { id: "general", label: "General" },
        { id: "custom domain", label: "Custom Domain" },
        { id: "checkout", label: "Checkout" },
        { id: "billing", label: "Billing" },
        { id: "navigation", label: "Navigation" },
    ]


    const addHeaderItem = () => {
        if (headerItems) {
            setHeaderItems([...headerItems, { label: '', url: '' }])
        }
    }

    const handleHeroChange = (field, value) => {
        setHeroContent(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const addFooterItem = () => {
        if (footerItems) {
            setFooterItems([...footerItems, { label: '', url: '' }])
        }
    }


    const updateHeaderItem = (index, field, value) => {
        const newItems = [...headerItems]
        newItems[index] = { ...newItems[index], [field]: value }
        setHeaderItems(newItems)
    }

    const updateFooterItem = (index, field, value) => {
        const newItems = [...footerItems]
        newItems[index] = { ...newItems[index], [field]: value }
        setFooterItems(newItems)
    }

    const removeHeaderItem = (index) => {
        setHeaderItems(headerItems.filter((_, i) => i !== index))
    }

    const removeFooterItem = (index) => {
        setFooterItems(footerItems.filter((_, i) => i !== index))
    }


    return (
        <div>
            <div className='text-white'>
                {/* Tabs */}
                <div className='border-b border-white/10 mb-8'>
                    <div className='flex gap-8'>
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 px-1 text-sm font-medium relative ${activeTab === tab.id ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
                                    }`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                {activeTab === 'navigation' && (
                    <div className="space-y-8">
                        {/* Hero Content */}

                        <div className='space-y-4'>

                            <h2 className='text-lg font-medium'>Hero Section</h2>
                            <div className='space-y-4'>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Heading</label>
                                    <input type='text' value={heroContent.heading}
                                        onChange={() => handleHeroChange('heading', e.target.value)}
                                        className='w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm text-gray-400 mb-2'>Description</label>
                                    <input type='text' value={heroContent.description}
                                        className='w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'

                                        onChange={() => handleHeroChange('description', e.target.value)} />
                                </div>

                                <div>
                                    <label className='block text-sm text-gray-400 mb-2'>Button Text</label>
                                    <input type='text' value={heroContent.buttonText}
                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={() => handleHeroChange('buttonText', e.target.value)} />
                                </div>
                            </div>
                        </div>


                        {/* Header Navigation */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Header</h2>
                            <div className="space-y-4">
                                {headerItems.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Label"
                                                value={item.label}
                                                onChange={(e) => updateHeaderItem(index, 'label', e.target.value)}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="URL"
                                                value={item.url}
                                                onChange={(e) => updateHeaderItem(index, 'url', e.target.value)}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeHeaderItem(index)}
                                            className="p-2 text-gray-400 hover:text-white"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                                {headerItems && (
                                    <button
                                        onClick={addHeaderItem}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add New Link
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Footer Navigation */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium">Footer</h2>
                            <div className="space-y-4">
                                {footerItems.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Label"
                                                value={item.label}
                                                onChange={(e) => updateFooterItem(index, 'label', e.target.value)}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="URL"
                                                value={item.url}
                                                onChange={(e) => updateFooterItem(index, 'url', e.target.value)}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <button
                                            onClick={() => removeFooterItem(index)}
                                            className="p-2 text-gray-400 hover:text-white"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                                {footerItems && (
                                    <button
                                        onClick={addFooterItem}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add New Link
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Save Button */}
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium">
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavigationSettings