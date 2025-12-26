import { site } from '../lib/siteConfig'

export default function WhatsAppButton({ message, children }: { message: string, children?: React.ReactNode }) {
  const phone = site.whatsappNumber.replace(/[^+\d]/g, '')
  const encoded = encodeURIComponent(message)
  const href = `https://wa.me/${phone.replace('+','') || phone}?text=${encoded}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-accent">
      {children || 'Contact via WhatsApp'}
    </a>
  )
}
