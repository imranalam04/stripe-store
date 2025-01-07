import React from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function Cart({ isOpen, setIsOpen, cart, removeFromCart, updateQuantity, clearCart }) {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

    return (
        <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
            <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-semibold text-black">My Cart</h2>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-5 h-5 text-red-500" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
                    ) : (
                        <>
                            <button
                                onClick={clearCart}
                                className="w-full mb-4 text-red-500 hover:text-red-600 flex items-center justify-center gap-2"
                            >
                                Clear Cart
                            </button>
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-700">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{item.price}</p>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                    className="p-1 hover:bg-gray-700 bg-gray-800  rounded"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-8 text-center text-black font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 hover:bg-gray-700 bg-gray-800 rounded"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1 hover:bg-gray-200 rounded ml-auto"
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t p-4 space-y-4 text-black">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                            <Link to="https://stripe.com/in/payments/checkout" target='_blank'>
                                Checkout
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

