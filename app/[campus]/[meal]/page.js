// app/[campus]/[meal]/page.js
'use client'
import { useParams }    from 'next/navigation'
import CampusMeal       from '@/components/CampusMeal'
import { SECTIONS }     from '@/data/sections'

export default function CampusMealPage() {
  // Destructure campus and meal from useParams()
  const { campus, meal } = useParams()

  // Filter for the exact campus & meal
  const sections = SECTIONS.filter(
    s => s.meal === meal && s.campus === campus
  )

  console.log('FILTERED SECTIONS:', sections)


  console.log('PARAMS →', { campus, meal })
  console.log('SECTIONS PASSED →', sections)

  return <CampusMeal campus={campus} meal={meal} sections={sections} />
}