import { React, useState } from 'react'
import { Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className='min-h-screen bg-[#0a0b1a] flex flex-col items-center justify-center px-4'>
            <div className='w-full max-w-md space-y-8'>
                { /* Icon Header*/}
                <div className='flex flex-col items-center'>
                    <div className='bg-white/10 p-3 rounded-lg mb-6'>
                        <Store size={48} />
                    </div>
                    <h1 className='text-white text-3xl font-bold'>Welcome to Store</h1>
                </div>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='space-y-2'>
                        <label htmlFor='email' className='block text-white text-lg font-medium'>
                            Email Address
                        </label>
                        <p className='text-gray-400 text-sm'>
                            Use the email you log in to Stripe with
                        </p>
                        <input id="email" name='email' type='email' reuired value={formData.email}
                            onChange={handleChange} className='w-full px-4 py-3 rounded-md bg-white text-black border-0 focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block text-white text-lg font-medium"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-white text-black border-0 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    >
                        <Link to="/dashboard">
                        Log in
                        </Link>
                    </button>
                </form>
                {/* Footer Link */}
                <p className="text-center">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                        Forgot password? Update Reetail App Settings in your Stripe Dashboard
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage