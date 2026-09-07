import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashain from '../pages/Dashain'
import Tihar from '../pages/Tihar'
import NoData from '../pages/NoData'
import { DashainDates, TiharDates } from '../constants'

export default function Router() {
  const today = new Date()
  const hasDashainEnded = today > new Date(DashainDates.end_date)
  const hasTiharEnded = today > new Date(TiharDates.end_date)

  function show() {
    if (!hasDashainEnded) {
      return <Dashain />
    }
    if (!hasTiharEnded) {
      return <Tihar />
    }
    return <NoData />
  }

  return (
    <Routes>
      <Route path="/" element={show()} />
      <Route path="/dashain" element={<Dashain />} />
      <Route path="/tihar" element={<Tihar />} />
      <Route path="/no-data" element={<NoData />} />
      <Route path="*" element={show()} />
    </Routes>
  )
}
