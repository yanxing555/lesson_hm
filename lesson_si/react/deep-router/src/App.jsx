import { useState ,
  lazy // 懒加载
  ,Suspense // 包裹懒加载的组件
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay';
//函数  路由-> Route
// 懒加载
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const NotFound = lazy(()=>import('./pages/NotFound'))
const Login = lazy(()=>import('./pages/Login'))
function App() {

  return (
    <>
      <Router>
        <Navigation/>
        <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 鉴权 */}
          <Route path="/pay" element={<ProtectRoute >
            {/* <Pay/> */}
          </ProtectRoute>} />
          <Route path="*" element={< NotFound/>} />
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App