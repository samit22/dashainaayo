import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashainCountdown from '../Dashain';
import TiharCountdown from '../Tihar';

export default function Router () {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <DashainCountdown
          />
        }
      />
       <Route
        path="/dashain"
        exact
        element={
          <DashainCountdown
          />
        }
      />
      <Route
        path="/tihar"
        exact
        element={
          <TiharCountdown
          />
        }
      />
    </Routes>
  );
}