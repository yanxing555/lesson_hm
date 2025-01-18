import { 
    BrowserRouter,
    Routes,
    Route 
  } from 'react-router-dom'
  import App from '../App'
  import About from '../page/about'
  import About from '../page/Home'
  const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter