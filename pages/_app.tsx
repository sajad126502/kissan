import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'
import Toast from '../components/Toast'
import { site } from '../lib/siteConfig'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content="Authentic, natural Kashmiri products and comfortable room bookings near Gulmarg." />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content="Authentic, natural Kashmiri products and comfortable room bookings near Gulmarg." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Toast />
      </div>
    </CartProvider>
  )
}
