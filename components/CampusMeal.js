'use client'
import { useEffect, useState } from 'react'

/**
 * A styled, user-friendly CampusMeal UI using TailwindCSS and modal popup
 */
export default function CampusMeal({ campus, meal, sections }) {
  const [foods, setFoods]       = useState([])
  const [selected, setSelected] = useState({})
  const [totals, setTotals]     = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetch(`/api/foods?campus=${campus}&meal=${meal}`)
      .then(r => r.json())
      .then(setFoods)
      .catch(console.error)

    setSelected({})
    setTotals(null)
    setShowModal(false)
  }, [campus, meal])

  const handleCheck = (id, checked) =>
    setSelected(s => ({ ...s, [id]: checked ? (s[id] || 1) : 0 }))
  const handleQty   = (id, qty) =>
    setSelected(s => ({ ...s, [id]: qty }))

  const curate = () => {
    const t = { cal: 0, prot: 0, carbs: 0, fat: 0 }
    Object.entries(selected).forEach(([id, qty]) => {
      if (qty > 0) {
        const f = foods.find(x => x.id === id)
        if (f) {
          t.cal   += (f.macros?.cal   || 0) * qty
          t.prot  += (f.macros?.prot  || 0) * qty
          t.carbs += (f.macros?.carbs || 0) * qty
          t.fat   += (f.macros?.fat   || 0) * qty
        }
      }
    })
    setTotals(t)
    setShowModal(true)
  }

  return (
    <main className="p-6 space-y-8 max-w-4xl mx-auto">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">{campus} &mdash; {meal}</h1>
        <button
          onClick={curate}
          className="mt-4 sm:mt-0 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-lg transition"
        >
          Curate Meal
        </button>
      </header>

      {sections.map(({ title, items }) => {
        const sectionItems = items.filter(item =>
          foods.some(f => f.id === item.id)
        )
        if (!sectionItems.length) return null

        return (
          <section key={title} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectionItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded hover:shadow-md transition"
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={!!selected[item.id]}
                      onChange={e => handleCheck(item.id, e.target.checked)}
                      className="h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-800 font-medium">{item.name}</span>
                  </label>

                  <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                    <span className="text-sm text-gray-600">{item.serving}</span>
                    <a
                      href={item.link ?? `https://menuportal23.dining.rutgers.edu/foodpronet/label.aspx?RecNumAndPort=${item.id}`}
                      target="_blank"
                      className="text-sm text-red-600 hover:underline"
                    >
                      Info
                    </a>
                    <input
                      type="number"
                      min="1"
                      value={selected[item.id] || ''}
                      onChange={e => handleQty(item.id, parseInt(e.target.value) || 0)}
                      disabled={!selected[item.id]}
                      className="w-16 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}

      {showModal && totals && (
        <div
          // Using a darker gray with slightly higher opacity to make the dimming more apparent,
          // while still allowing backdrop-blur to work on the content behind it.
          className="fixed inset-0 bg-gray-950 bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Total Macros</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Calories:</strong> {totals.cal}</p>
              <p><strong>Protein:</strong> {totals.prot} g</p>
              <p><strong>Carbs:</strong> {totals.carbs} g</p>
              <p><strong>Fat:</strong> {totals.fat} g</p>
            </div>
            <button
              className="mt-6 w-full py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}