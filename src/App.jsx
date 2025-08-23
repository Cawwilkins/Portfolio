import { useState } from 'react'
import './App.css'
import MainPage from './pages/mainPage.jsx';
import { Link, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes> 
  )
}
export default App

