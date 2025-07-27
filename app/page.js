'use client'

import Link from 'next/link'

const CAMPUSES = [
  { id: 'Livi',  name: 'Livingston' },
  { id: 'CA',    name: 'College Avenue' },
  { id: 'Busch', name: 'Busch' },
  { id: 'CD',    name: 'Cook Douglass' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Select Your Campus
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CAMPUSES.map(({ id, name }) => (
            <Link
              key={id}
              href={`/${id}/Breakfast`}
              className="
                block
                text-center
                py-3
                px-4
                bg-white
                border border-gray-300
                rounded-lg
                text-gray-700
                font-medium
                hover:bg-red-600 hover:text-white
                transition-colors duration-200
                shadow-sm
                hover:shadow-md
              "
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}