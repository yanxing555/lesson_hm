import { 
  useState,
  useEffect,
  lazy,
  Suspense,

} from 'react'
import {
  Routes,
  Route

}from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import './App.css'
import NavBar from './components/NavBar'
const Home = lazy(()=>import('./views/Home'))
const Login = lazy(()=>import('./views/Login'))
const Pay = lazy(()=>import('./views/Pay'))
function App() {
  useEffect

  return (
    <>
    <NavBar />
    <Suspense fallback={<div>loading</div>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pay" element={
          <RequireAuth>
            <Pay />
          </RequireAuth>
          } />
      </Routes>
    </Suspense>
    </>
  )
}

export default App
