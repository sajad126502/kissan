import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'
import { site } from '../lib/siteConfig'

export default function Footer(){
  return (
    <footer className="mt-16 bg-gray-50 border-t animate-floatUp">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.png" alt={site.title} className="h-10 w-auto object-contain mb-3" />
          <p className="text-sm text-gray-600">The Kissan Cottage Gulmarg — authentic Kashmiri products and comfortable stays near Gulmarg.</p>
          <div className="mt-4">
            <WhatsAppButton message={`Hi, I'd like to know more about ${site.title}`}>WhatsApp Us</WhatsAppButton>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick links</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
            <li><Link href="/booking" className="hover:text-primary">Book a Room</Link></li>
            <li><a href={site.googleMapsLink} target="_blank" rel="noreferrer" className="hover:text-primary">Find us on Maps</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="text-sm text-gray-600">Address: {site.address}</div>
          <div className="text-sm text-gray-600 mt-2">Phone: <a href={`https://wa.me/${site.whatsappNumber.replace('+','')}`} className="text-primary">{site.whatsappNumber}</a></div>
        </div>
      </div>

      <div className="py-4 border-t text-center text-sm text-gray-500">© {new Date().getFullYear()} KISSAN COTTAGE GULMARG — Made in Kashmir</div>
    </footer>
  )
}
