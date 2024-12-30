import { Link } from 'react-router-dom'
import { Twitter, Facebook, Instagram, GitlabIcon as GitHub } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 px-6 rounded-t-[14px] ">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Reetail</h2>
            <p className="text-sm text-gray-400">
              Create a digital store from your Stripe products with ease.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Reetail. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GitHub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

