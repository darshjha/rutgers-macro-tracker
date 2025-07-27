// app/[campus]/layout.js
import Link from 'next/link'

export default function CampusLayout({ children, params }) {
  const { campus } = params
  const meals = ['Breakfast','Lunch','Dinner']

  return (
    <>
      <nav className="p-4 bg-gray-50 flex items-center space-x-6">
        <Link
          href="/"
          className="text-blue-600 underline"
        >
          ← All Campuses
        </Link>

        {meals.map(meal => {
          const isActive = params.meal === meal
          return (
            <Link
              key={meal}
              href={`/${campus}/${meal}`}
              className={
                // active = red; inactive = outline button
                (isActive
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100') +
                ' px-5 py-2 rounded transition'
              }
            >
              {meal}
            </Link>
          )
        })}
      </nav>

      <div className="p-4">
        {children}
      </div>
    </>
  )
}