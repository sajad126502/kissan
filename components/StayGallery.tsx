import React from 'react'

const images = [
  { file: 'room_with_bed.jpeg', label: 'Bed Room' },
  { file: 'room2_with_bed.jpeg', label: 'Bed Room' },
  { file: 'room3_with_bed.jpeg', label: 'Bed Room' },
  { file: 'washroom.jpeg', label: 'Private Bathroom — Modern Fixtures' },
  { file: 'washroom_full.jpeg', label: 'Ensuite Bathroom — Spacious Layout' },
  { file: 'washroom_geyser.jpeg', label: 'Bathroom — Instant Hot Water' },
  { file: 'cortage_outside.jpeg', label: 'Cottage Exterior' },
  { file: 'cortage_lobby.jpeg', label: 'Lobby — Traditional Kashmiri Decor' },
  { file: 'cortage_lobby2.jpeg', label: 'Lobby — Relaxing Seating Area' },
]

export default function StayGallery() {
  const delays = ['delay-0','delay-75','delay-150','delay-200']
  return (
    <section className="mt-6 animate-slideUp">
      <h2 className="text-xl font-semibold mb-3">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <figure key={img.file} className={`group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow animate-floatUp ${delays[idx % delays.length]}`} tabIndex={0}>
            <div className="relative">
              <img
                src={`/images/${img.file}`}
                alt={img.label}
                className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-center">{img.label}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
