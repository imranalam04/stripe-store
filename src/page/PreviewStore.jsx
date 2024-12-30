import React, { useMemo, useState } from 'react'
import { Star, ShoppingCart, Search, ChevronLeft, ChevronRight, User } from 'lucide-react'
import ShuffleHero from '../preview/ShuffleHero'
import Footer from '../preview/Footer'
import Cart from '../components/Cart'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'



const PreviewStore = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortOrder, setSortOrder] = useState('default')
    const [isCartOpen, setIsCartOpen] = useState(false)
    const navigate = useNavigate()
    const { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartItemsCount } = useCart()


    const products = [
        {
            id: 1,
            name: 'Chocolate Cheesecake',
            price: '$20.00',
            rating: 5,
            reviews: 120,
            image: 'https://picsum.photos/seed/cake/200/300'
        },
        {
            id: 2,
            name: 'Vanilla Ice Cream',
            price: '$15.00',
            rating: 4,
            reviews: 85,
            image: 'https://picsum.photos/seed/icecream/200/300'
        },
        {
            id: 3,
            name: 'Strawberry Tart',
            price: '$18.00',
            rating: 4,
            reviews: 92,
            image: 'https://picsum.photos/seed/tart/200/300'
        },
        {
            id: 4,
            name: 'Blueberry Muffin',
            price: '$12.00',
            rating: 3,
            reviews: 78,
            image: 'https://picsum.photos/seed/muffin/200/300'
        },
        {
            id: 5,
            name: 'Apple Pie',
            price: '$22.00',
            rating: 5,
            reviews: 150,
            image: 'https://picsum.photos/seed/pie/200/300'
        },
        {
            id: 6,
            name: 'Lemon Sorbet',
            price: '$14.00',
            rating: 4,
            reviews: 65,
            image: 'https://picsum.photos/seed/sorbet/200/300'
        },
        {
            id: 7,
            name: 'Chocolate Chip Cookie',
            price: '$10.00',
            rating: 4,
            reviews: 110,
            image: 'https://picsum.photos/seed/cookie/200/300'
        },
        {
            id: 8,
            name: 'Red Velvet Cupcake',
            price: '$16.00',
            rating: 5,
            reviews: 95,
            image: 'https://picsum.photos/seed/cupcake/200/300'
        }
    ]



    const filteredAndSortedProducts = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', ''))
                const priceB = parseFloat(b.price.replace('$', ''))
                if (sortOrder === 'lowToHigh') {
                    return priceA - priceB
                } else if (sortOrder === 'highToLow') {
                    return priceB - priceA
                }
                return 0
            })
    }, [products, searchTerm, sortOrder])

    const featuredProducts = filteredAndSortedProducts.slice(currentFeaturedIndex, currentFeaturedIndex + 4)

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star key={index} className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
        ))
    }

    return (
        <div className='min-h-screen bg-[#0a0b1a]'>
            {/* Header */}
            <header className='bg-[#0a0b1a] border-b border-white/10 px-6 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='rounded px-2 py-1 text-xl font-medium text-white'>
                        PandaLabs LLC
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsCartOpen(true)} className='relative'>
                        <ShoppingCart className="w-5 h-5 text-white" />
                        {cartItemsCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>{cartItemsCount}</span>
                        )}
                    </button>
                    <User className="w-5 h-5 text-white" />
                </div>
            </header>

            {/* Cart Component */}
            <Cart
                isOpen={isCartOpen}
                setIsOpen={setIsCartOpen}
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
            />

            {/* Overlay when cart is open */}
            {isCartOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setIsCartOpen(false)} />
            )}

            {/* Hero Section */}
            <ShuffleHero />

            {/* Featured Products */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-white">Featured Products</h2>
                        <div className="flex gap-2">
                            <button
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => setCurrentFeaturedIndex(prev => Math.max(0, prev - 1))}
                                disabled={currentFeaturedIndex === 0}
                            >
                                <ChevronLeft className="w-4 h-4 text-white" />
                            </button>
                            <button
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => setCurrentFeaturedIndex(prev => Math.min(filteredAndSortedProducts.length - 4, prev + 1))}
                                disabled={currentFeaturedIndex >= filteredAndSortedProducts.length - 4}
                            >
                                <ChevronRight className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg overflow-hidden cursor-pointer" onClick={() => navigate(`/preview/${product.id}`)}>
                                <div className="aspect-square bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium mb-2 text-black">{product.name}</h3>
                                    <div className="flex items-center gap-1 mb-2">
                                        {renderStars(product.rating)}
                                        <span className="text-xs text-gray-500">({product.reviews})</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-black">{product.price}</span>
                                        <button
                                            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                addToCart(product)
                                                if (addToCart) {
                                                    alert('Product added to cart')
                                                }
                                            }}
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for a product..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="default" className='text-black'>Sort by</option>
                        <option value="lowToHigh" className='text-black'>Price: Low to High</option>
                        <option value="highToLow" className='text-black'>Price: High to Low</option>
                    </select>
                </div>
            </section>

            {/* All Products */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold text-white mb-6">All Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {filteredAndSortedProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg overflow-hidden cursor-pointer" onClick={() => navigate(`/preview/${product.id}`)}>
                                <div className="aspect-square bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium mb-2 text-black">{product.name}</h3>
                                    <div className="flex items-center gap-1 mb-2">
                                        {renderStars(product.rating)}
                                        <span className="text-xs text-gray-500">({product.reviews})</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-black">{product.price}</span>
                                        <button
                                            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                addToCart(product)
                                                if (addToCart) {
                                                    alert('Product added to cart')
                                                }
                                            }
                                            }
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default PreviewStore

