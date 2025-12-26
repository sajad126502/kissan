import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { site } from '../lib/siteConfig'

type CartItem = { id: string; name: string; price: number; qty?: number }

type ToastData = {
  visible: boolean
  title?: string
  message?: string
  product?: CartItem | null
}

type CartContextType = {
  cart: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clear: () => void
  toast: ToastData
  hideToast: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [toast, setToast] = useState<ToastData>({ visible: false, product: null })
  const router = useRouter()

  useEffect(() => {
    try {
      const c = JSON.parse(localStorage.getItem('kissan_cart') || '[]')
      setCart(c)
    } catch (e) {
      setCart([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('kissan_cart', JSON.stringify(cart))
  }, [cart])

  const addItem = (item: CartItem) => {
    setCart(prev => [...prev, { ...item, qty: 1 }])
    const msg = `Added ${item.name} to cart.`
    setToast({ visible: true, title: 'Added to cart', message: msg, product: item })
    // auto-hide
    setTimeout(() => setToast({ visible: false, product: null }), 3500)
  }

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const clear = () => {
    setCart([])
  }

  const hideToast = () => setToast({ visible: false, product: null })

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, toast, hideToast }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
