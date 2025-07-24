import { useState } from 'react'
import './App.css'
import{
  BrowserRouter as Router,
  Routes ,
  Route
}from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  

  return (
    <>
     <nav>
      <ul>
        <li>
          <Link to="/About">关于</Link>
        </li>
        <li>
          <Link to="/Home">首页</Link>
        </li>
      </ul>
     </nav>
     <main>
      <div className="container">
        <Routes>
          <Route path="/About" element={About} />
          <Route path="/Home" element={Home} />
        </Routes>
      </div>
     </main>
    </>
  )
}

export default App
