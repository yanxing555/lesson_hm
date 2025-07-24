import{
  BrowerRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route // 单条
}from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  

  return (
    <>
    {/* 前端路由接管一切 */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
