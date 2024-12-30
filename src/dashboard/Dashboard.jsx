import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, User, Palette, FolderOpen, ShoppingCart, Navigation, Settings, HelpCircle, Search, Bell, MessageCircle, LogOut, X } from 'lucide-react'
import AddProductModal from '../components/AddProductModal'
import EditProductModal from '../components/EditProductModal'

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState([
        {
            name: 'Test Product',
            status: 'ACTIVE',
            price: '$20.00',
            description: 'A test product description',
            showInStore: true,
            featured: false,
            image: 'https://picsum.photos/200/300'
        },
        {
            name: 'Digital Product',
            status: 'ACTIVE',
            price: '$150.00',
            description: 'A digital product description',
            showInStore: true,
            featured: true,
            image: 'https://picsum.photos/201/300'
        },
        {
            name: 'Subscription Product',
            status: 'ACTIVE',
            price: '$500.00/month',
            description: 'A subscription product description',
            showInStore: true,
            featured: false,
            image: 'https://picsum.photos/202/300'
        }
    ]);


    const filterProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })


    const removeProduct = (productToRemove) => {
        setProducts(products.filter((product) => product.name !== productToRemove.name));
    };


    const handleRowClick = (product) => {
        setSelectedProduct(product)
        setIsEditModalOpen(true)
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
                    <Link to="/dashboard/settings">
                        <button className='p-2 hover:bg-gray-900 bg-gray-800 rounded-full'>
                            <Settings className='w-5 h-5' />
                        </button>
                    </Link>
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
                    <Link to="/preview" target='_blank'>
                        <div className='mb-6 flex items-center gap-4'>

                            <h2 className='text-sm font-semibold'>Preview your store</h2>
                            <Navigation />
                        </div>
                    </Link>

                    <nav className='flex-1 space-y-1'>
                        <Link className='flex items-center gap-3 px-4 py-2 text-white bg-white/10 rounded-md'>
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
                        <Link to="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md">
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
                            <h1 className="text-2xl font-semibold">Products</h1>
                            <div className="flex gap-3">
                                <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Add Product
                                </button>
                                {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Edit Product
                                </button> */}
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type="text"
                                placeholder="Search for a product..."
                                className="w-full text-black pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="bg-white text-black rounded-lg border">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Image</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Name</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Price</th>
                                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">Edit Product's</th>
                                        <th className='text-left px-6 py-3 text-sm font-semibold text-gray-600'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterProducts.map((product, index) => (
                                        <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full object-cover" />
                                            </td>
                                            <td className="px-6 py-4">{product.name}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">{product.price}</td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => handleRowClick(product)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                                    Edit
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => removeProduct(product)} className="px-4 py-2  text-red-500 hover:text-red-600 rounded-md ">
                                                    <X className="w-6 h-6" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
            <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <EditProductModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                product={selectedProduct}
            />
        </div>
    )
}

export default Dashboard