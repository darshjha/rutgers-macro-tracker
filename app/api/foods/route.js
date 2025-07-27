// app/api/foods/route.js
import allData from '../../../data/macros.json'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const campus = searchParams.get('campus') || '03'
  const meal   = searchParams.get('meal')   || 'Breakfast'

  const items = allData.filter(
    i => i.campus === campus && i.meal === meal
  )

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' }
  })
}