import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Scroll, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='sticky top-0 z-40'>
            <div className="relative ">
                <nav className='flex items-center justify-between px-6 py-4 bg-slate-900 text-white '>
                    <div className='flex items-center gap-8'>
                        <ScrollLink to="hero" smooth={true} duration={500}>
                            <Link className='text-xl font-semibold'>Store</Link>
                        </ScrollLink>
                        <div className='hidden md:flex items-center gap-6'>
                            <ScrollLink to="features" smooth={true} duration={500}>
                                <Link className='hover:text-gray-300 transition-colors'>Features</Link>
                            </ScrollLink>
                            <ScrollLink to="pricing" smooth={true} duration={500}>
                                <Link className='hover:text-gray-300 transition-colors'>Pricing</Link>
                            </ScrollLink>
                            <ScrollLink to="faq" smooth={true} duration={500}>
                                <Link className='hover:text-gray-300 transition-colors'>FAQ</Link>
                            </ScrollLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors'>Login</Link>
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-6 py-4 space-y-4">
                        <ScrollLink smooth={true} duration={500} to="features" className='block hover:text-gray-300 transition-colors' onClick={toggleMenu}>Features</ScrollLink>
                        <ScrollLink smooth={true} duration={500} to="pricing" className='block hover:text-gray-300 transition-colors' onClick={toggleMenu}>Pricing</ScrollLink>
                        <ScrollLink smooth={true} duration={500} to="faq" className='block hover:text-gray-300 transition-colors' onClick={toggleMenu}>FAQ</ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

