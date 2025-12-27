import WhatsAppButton from '../components/WhatsAppButton'
import StayGallery from '../components/StayGallery'
import ClientGallery from '../components/ClientGallery'
import { site } from '../lib/siteConfig'

export default function Booking(){
  const msg = `Hi, I'd like to reserve a room at ${site.title}. Please share availability and rates.`
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Room Booking</h1>
      <p className="mb-4 text-gray-700">Authentic, comfortable rooms near Gulmarg. To reserve, contact us on WhatsApp and we'll confirm availability and rates.</p>

      <StayGallery />

      <ClientGallery />

      <div className="flex gap-3 mt-4">
        <WhatsAppButton message={msg}>Book via WhatsApp</WhatsAppButton>
      </div>
    </div>
  )
}
