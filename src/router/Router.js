import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashain from '../pages/Dashain'
import Tihar from '../pages/Tihar'

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashain />} />
      <Route path="/dashain" exact element={<Dashain />} />
      <Route path="/tihar" exact element={<Tihar />} />
    </Routes>
  )
}
