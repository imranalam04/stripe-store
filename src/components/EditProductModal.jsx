    import { useState, useEffect } from 'react'
    import { X, Upload, Wand2 } from 'lucide-react'

    export default function EditProductModal({ isOpen, onClose, product }) {
    // Initialize form data state
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        showInStore: false,
        featured: false,
        variants: [],
        collection: '',
        images: []
    })

    // Update form data when product changes
    useEffect(() => {
        if (product) {
        setFormData({
            name: product.name || '',
            description: product.description || '',
            price: product.price || '',
            showInStore: product.showInStore || false,
            featured: product.featured || false,
            variants: product.variants || [],
            collection: product.collection || '',
            images: product.images || []
        })
        }
    }, [product]) // This effect runs whenever the product prop changes

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Saving product:', formData)
        onClose()
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleGenerateDescription = () => {
        // AI description generation logic would go here
        console.log('Generating description...')
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-[#0a0b1a] text-white w-full max-w-2xl h-[600px] rounded-lg shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h2 className="text-xl font-semibold">Edit Product</h2>
            <div className="flex gap-2">
                <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
                >
                Save
                </button>
                <button
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                Cancel
                </button>
            </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-sm text-gray-400">
                Modify product details, variants, and images.
                </p>

                <div className="space-y-4">
                <label className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    name="showInStore"
                    checked={formData.showInStore}
                    onChange={handleChange}
                    className="rounded border-gray-400"
                    />
                    Show in store
                </label>

                <label className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="rounded border-gray-400"
                    />
                    Feature this product
                </label>
                </div>

                <div>
                <label className="block mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                />
                </div>

                <div>
                <label className="block mb-2">Description</label>
                <div className="relative">
                    <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                    />
                    <button
                    type="button"
                    onClick={handleGenerateDescription}
                    className="absolute bottom-2 right-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md text-black"
                    >
                    <Wand2 className="w-4 h-4" />
                    <span className="sr-only">Generate with AI</span>
                    </button>
                </div>
                </div>

                <div>
                <label className="block mb-2">Price</label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                />
                </div>

                <div>
                <label className="block mb-2">Variants</label>
                <div className="flex gap-2">
                    <input
                    type="text"
                    placeholder="Size/Color"
                    className="flex-1 px-4 py-2 bg-white text-black rounded-md"
                    />
                    <button
                    type="button"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md"
                    >
                    Add variant
                    </button>
                </div>
                </div>

                <div>
                <label className="block mb-2">Add to collection</label>
                <select
                    name="collection"
                    value={formData.collection}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white text-black rounded-md"
                >
                    <option value="">Choose a collection</option>
                    <option value="new">New Arrivals</option>
                    <option value="featured">Featured</option>
                </select>
                </div>

                <div>
                <label className="block mb-2">Images (500x500px)</label>
                <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-400">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Max 1MB</p>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
    }

