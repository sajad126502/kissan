import WhatsAppButton from '../components/WhatsAppButton'
import { useCart } from '../context/CartContext'

export default function CartPage(){
  const { cart, clear } = useCart()

  const total = cart.reduce((s:any,i:any)=> s + (i.price || 0), 0)
  const message = `Order request:\n${cart.map((i:any)=>`- ${i.name} — ₹${i.price||'N/A'}`).join('\n')}\nTotal: ₹${total}`

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((it: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between bg-white p-4 rounded shadow-sm">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-gray-500">₹{it.price || 'N/A'}</div>
              </div>
              <div className="text-sm text-gray-500">Qty: 1</div>
            </div>
          ))}

          <div className="flex items-center justify-between">
            <div className="font-semibold">Total: ₹{total}</div>
            <div className="flex gap-2">
              <WhatsAppButton message={message}>Send order via WhatsApp</WhatsAppButton>
              <button onClick={clear} className="px-4 py-2 border rounded">Clear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
