import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import FeaturedCarousel from "./FeaturedCarousel"
import Video from './Video'
import Image from './Image'
import Usememo from './Usememo'

import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<h3>Abhi kuch nahi hai</h3>}
          />
          <Route path='FeaturedCarousel' element={<FeaturedCarousel />} />
          < Route path='image' element ={<Image/>} />
 

        </Routes>

      </div>
      <div>
        <Video />
        <Usememo/>
      </div>

    </>
  )
}

export default App
