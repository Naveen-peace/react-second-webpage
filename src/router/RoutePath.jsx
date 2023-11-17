import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import '../asset/css/Style.css'
import '../asset/css/Responsive.css'

function RoutePath() {
  return (
    <div>
      <BrowserRouter>      
          <Routes>
            <Route path='/react-second-webpage' index element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutePath