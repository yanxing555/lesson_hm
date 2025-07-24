import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  GlobalProvider
} from './context/GlobalContext.jsx'

// 页面级别组件由路由驱动
createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>
)
