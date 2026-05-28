import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

export function Header({ totalItems }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tighter">
          STOREFRONT.
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
            Catálogo
          </Link>
          
          <Link 
            to="/checkout" 
            className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors flex items-center justify-center"
            aria-label="Carrinho de compras"
          >
            <ShoppingCart className="w-6 h-6" />
            
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}