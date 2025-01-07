import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white/5 text-white py-12 mt-12">
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4'>
                    <h1 className='text-lg'>&copy; 2024 PandaLabs, LLC</h1>
                </div>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4'>
                    <Link to="/">
                        <h1 className='text-md hover:underline'>Powered by Reetail</h1>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer