import React from 'react'
import Navbar from './components/Navbar'
import Logs from './components/Logs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>

      <BrowserRouter>
        <Navbar />
        <Logs />

        <Routes>

        </Routes>

      </BrowserRouter>   
   </>
  )
}

export default App
