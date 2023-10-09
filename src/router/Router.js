import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashain from '../components/Dashain'
import Tihar from '../components/Tihar'

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashain />} />
      <Route path="/dashain" exact element={<Dashain />} />
      <Route path="/tihar" exact element={<Tihar />} />
    </Routes>
  )
}
