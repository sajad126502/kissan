import { GetStaticPaths, GetStaticProps } from 'next'
import { products, Product } from '../../data/products'
import WhatsAppButton from '../../components/WhatsAppButton'
import { useCart } from '../../context/CartContext'

export default function ProductPage({ product }: { product: Product }){
  if(!product) return <div>Product not found</div>

  const { addItem } = useCart()
  const addToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price })
  }

  const whatsappMsg = `Hi, I'm interested in "${product.name}" (Product ID: ${product.id}). Please let me know how to order.`

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.images?.[0]} className="w-full h-96 object-cover rounded" alt={product.name} />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={addToCart} className="bg-indigo-600 text-white px-4 py-2 rounded">Add to cart</button>
            <WhatsAppButton message={whatsappMsg}>Contact via WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(p => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const product = products.find(p => p.slug === slug) || null
  return { props: { product } }
}
