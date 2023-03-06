import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/inc/Navbar'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Footer from './components/pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="signin" element={<Signin/>} />
          </Routes>
          <Footer/>
    </BrowserRouter>


  )
}

export default App
