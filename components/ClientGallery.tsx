import React from 'react'

const guests = [
  { file: 'client_male.jpeg', name: 'Happy Guest' },
  { file: 'lady_client.jpeg', name: 'Happy Guest' },
  { file: 'lady_client2.jpeg', name: 'Happy Guest' }
]

export default function ClientGallery() {
  const delays = ['delay-0','delay-75','delay-150']
  return (
    <section className="mt-6 animate-slideUp">
      <h2 className="text-xl font-semibold mb-3">Guests enjoying their stay</h2>
      <p className="mb-4 text-gray-600">Real moments from our guests.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {guests.map((g, idx) => (
          <figure key={g.file} className={`group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow animate-floatUp ${delays[idx % delays.length]}`} tabIndex={0}>
            <div className="relative">
              <img
                src={`/images/${g.file}`}
                alt={g.name}
                className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-focus:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-center">{g.name}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
