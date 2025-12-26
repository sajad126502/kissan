import React from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { site } from '../lib/siteConfig'

export default function Toast(){
  const { toast, hideToast, cart } = useCart() as any
  if(!toast?.visible) return null

  const product = toast.product
  const message = toast.message || ''
  const total = cart.reduce((s:any, i:any)=> s + (i.price || 0), 0)
  const phone = site.whatsappNumber.replace(/[^+\d]/g,'')
  const href = `https://wa.me/${phone.replace('+','')}?text=${encodeURIComponent(`Hi, I'm placing an order for: ${product?.name || 'items'}. Total: ₹${total}`)}`

  return (
    <div className="fixed right-4 bottom-4 w-80 z-50">
      <div className="bg-white shadow-lg rounded-md overflow-hidden">
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">{toast.title}</div>
              <div className="text-sm text-gray-600 mt-1">{message}</div>
            </div>
            <button onClick={hideToast} className="text-gray-400 text-sm">✕</button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <Link href="/cart" className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">View Cart</Link>
            <a href={href} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-3 py-1 rounded text-sm">Contact via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}
