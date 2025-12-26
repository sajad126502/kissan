import Link from 'next/link'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const priceLabel = product.price && product.price > 0 ? `₹${product.price}` : 'Price on request'
  const rating = (product as any).rating ?? 4.5
  const reviews = (product as any).reviews ?? 120


  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition group overflow-hidden">
      <div>
        <div className="h-28 sm:h-32 md:h-28 overflow-hidden bg-gray-50">
          <img src={product.images?.[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-sm mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.name}</h3>
          <div className="bg-white/90 text-primary text-xs px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927C9.349 2.02 10.651 2.02 10.951 2.927l.625 2.056a1 1 0 00.95.69h2.156c.969 0 1.371 1.24.588 1.81l-1.744 1.287a1 1 0 00-.364 1.118l.666 2.04c.3.918-.755 1.67-1.54 1.118L10 12.347l-1.837 1.639c-.785.552-1.84-.2-1.54-1.118l.666-2.04a1 1 0 00-.364-1.118L5.192 7.483c-.783-.57-.381-1.81.588-1.81h2.156a1 1 0 00.95-.69l.625-2.056z" />
            </svg>
            <span className="font-semibold text-xs">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{priceLabel}</div>
            {product.price && product.price > 0 && (
              <div className="text-xs text-gray-500">Inclusive of taxes</div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <button onClick={(e)=>{ e.stopPropagation(); addItem({ id: product.id, name: product.name, price: product.price }) }} className="bg-primary text-white px-3 py-1 rounded-md text-sm">Add</button>
            <Link href={`/products/${product.slug}`} className="text-primary text-sm">View</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
