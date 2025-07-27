// app/CA/page.js
'use client'

import { useState } from 'react'

const MEALS = ['Breakfast', 'Lunch', 'Dinner']

export default function CollegeAvePage() {
  const [selected, setSelected] = useState(null)

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        College Avenue
      </h1>

      {/* Meal selector buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {MEALS.map(meal => (
          <button
            key={meal}
            onClick={() => setSelected(meal)}
            className={`px-6 py-2 rounded-lg font-medium shadow-sm transition
              ${
                selected === meal
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-600 hover:text-white'
              }`}
          >
            {meal}
          </button>
        ))}
      </div>

      {/* Coming Soon card */}
      {selected && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {selected}
          </h2>
          <p className="text-gray-600 mb-4">
            College Avenue {selected.toLowerCase()} menu is coming soon!
          </p>
          <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full font-semibold">
            Coming Soon
          </span>
        </div>
      )}
    </main>
  )
}