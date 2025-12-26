import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cart } = useCart()
  const cartCount = cart.length

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4  flex items-center justify-between">
        <Link href="/" className="block">
          <img src="/logo.png" alt="KISSAN COTTAGE GULMARG" className="h-14 sm:h-20 md:h-20 w-auto object-contain" />
          <span className="sr-only">KISSAN COTTAGE GULMARG</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/products" className="text-gray-700 hover:text-primary transition">Products</Link>
          </nav>

          <div className="flex items-center gap-3">
            <input placeholder="Search products" className="hidden sm:block px-3 py-2 rounded-md border text-sm" />
            <Link href="/cart" className="text-gray-700 hover:text-primary transition">Cart ({cartCount})</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
