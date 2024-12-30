import React, { useState, useEffect } from 'react'
import { Star, ShoppingCart, ChevronLeft, User } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import Cart from '../components/Cart'
import { toast } from 'react-hot-toast'
import { useCart } from '../context/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [reviewText, setReviewText] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartItemsCount } = useCart()


  // Find the product based on ID (you would typically fetch this from an API)
  const products = [
    {
      id: 1,
      name: 'Chocolate Cheesecake',
      price: '$20.00',
      rating: 5,
      reviews: 120,
      image: 'https://picsum.photos/seed/cake/200/300',
      description: 'A rich and creamy chocolate cheesecake that melts in your mouth.'
    },
    {
      id: 2,
      name: 'Vanilla Ice Cream',
      price: '$15.00',
      rating: 4,
      reviews: 85,
      image: 'https://picsum.photos/seed/icecream/200/300',
      description: 'Smooth and creamy vanilla ice cream made with real Madagascar vanilla.'
    },
    // ... other products
  ]

  const product = products.find(p => p.id === Number(id))

  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "Amazing product! Would definitely buy again.",
      rating: 5,
      user: "John Doe",
      date: "2 days ago"
    },
    {
      id: 2,
      text: "Good quality and fast delivery.",
      rating: 4,
      user: "Jane Smith",
      date: "1 week ago"
    }
  ])



  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (!reviewText.trim()) return

    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
      rating: 5,
      user: "Guest User",
      date: "Just now"
    }

    setReviews([newReview, ...reviews])
    setReviewText('')
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white">
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

      <div className="p-6">
        <button
          onClick={() => navigate('/preview')}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to store
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white/5 rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-white/60">({product.reviews} reviews)</span>
              </div>
              <p className="text-2xl font-bold mb-4">{product.price}</p>
              <p className="text-white/80 mb-6">{product.description}</p>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-semibold mb-6">Reviews</h2>

            {/* Add Review Form */}
            <form onSubmit={handleSubmitReview} className="mb-8">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Add a review</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your thoughts..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Post review
                </button>
              </div>
            </form>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm font-medium">{review.user}</span>
                  </div>
                  <p className="text-white/80 mb-2">{review.text}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

