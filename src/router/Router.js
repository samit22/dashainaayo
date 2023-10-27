import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashain from '../pages/Dashain'
import Tihar from '../pages/Tihar'
import { DashainDates } from '../constants'

export default function Router() {
  const today = new Date()
  const hasDashainEnded = today > new Date(DashainDates.end_date)

  return (
    <Routes>
      <Route path="/" exact element={!hasDashainEnded ? <Dashain /> : <Tihar />} />
      <Route path="/dashain" exact element={<Dashain />} />
      <Route path="/tihar" exact element={<Tihar />} />
    </Routes>
  )
}
