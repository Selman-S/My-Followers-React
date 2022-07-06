import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Login from '../../pages/Login'
import NavBar  from '../NavBar'
import NotFound from '../../pages/NotFound'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
