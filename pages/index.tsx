import Link from 'next/link'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { site } from '../lib/siteConfig'

export default function Home() {
  const featured = products.slice(0, 6)
  return (
    <div>
      <section className="hero relative overflow-hidden rounded-lg p-6 md:p-10 bg-gradient-to-r from-primary to-yellow-400 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="inline-block text-sm bg-white/10 px-3 py-1 rounded-full mb-4">KASHMIR · AUTHENTIC PRODUCTS</div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">Kashmiri Products & Stays</h1>
            <p className="text-base md:text-lg text-white/95 mb-6">Authentic Kashmiri goods and warm cottage stays near Gulmarg — order on WhatsApp for quick confirmation.</p>
            <div className="flex gap-3">
              <Link href="/products" className="btn-primary">Shop Collection</Link>
              <Link href="/booking" className="btn-accent">Book a Room</Link>
            </div>
          </div>

          <div className="hidden md:block w-80 h-56 rounded-lg overflow-hidden shadow-lg">
            <img src="/images/kashmiri-saffron.jpg" className="w-full h-full object-cover" alt="Kashmir"/>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Authentic Kashmiri Products</h3>
            <p className="text-sm text-gray-600">Saffron, dry fruits, preserves and more — carefully sourced from local producers in Kashmir.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Easy WhatsApp Orders</h3>
            <p className="text-sm text-gray-600">No payment needed on-site — message us on WhatsApp to confirm stock and place orders.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Comfortable Cottage Stays</h3>
            <p className="text-sm text-gray-600">Book cozy rooms near Gulmarg with scenic views and warm hospitality.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-semibold text-xl mb-4">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">1</div>
              <h4 className="font-semibold">Browse</h4>
              <p className="text-sm text-gray-600">Explore our collection of Kashmiri specialties.</p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">2</div>
              <h4 className="font-semibold">Add to Cart</h4>
              <p className="text-sm text-gray-600">Save items for reference while you decide.</p>
            </div>

            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">3</div>
              <h4 className="font-semibold">Contact on WhatsApp</h4>
              <p className="text-sm text-gray-600">Message us with your order or booking details and we'll reply quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-semibold text-xl mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-semibold text-xl mb-4">What customers say</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-gray-700">"Lovely products and prompt replies — the saffron is top quality!"</p>
              <div className="mt-3 text-sm text-gray-500">— A happy customer</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-gray-700">"We booked a room easily via WhatsApp and had a wonderful stay near Gulmarg."</p>
              <div className="mt-3 text-sm text-gray-500">— Guest from Delhi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-semibold text-xl mb-4">Find Us</h2>
          <div className="w-full h-56 md:h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&z=14&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kissan Cottage Gulmarg location"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Address: {site.address} — <a href={site.googleMapsLink} target="_blank" rel="noreferrer" className="text-primary">Open in Google Maps</a></p>
        </div>
      </section>
    </div>
  )
}
