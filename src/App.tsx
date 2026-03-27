// import for Tailwind CSS to work
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import DashboardPage from './Pages/DashboardPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
